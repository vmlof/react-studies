import React from "react";
import type { GeocodingResponse, WeatherResponse } from "./types";
import { convertToFlag } from "./utils";

interface AppState {
  location: string;
  isLoading: boolean;
  displayLocation: string;
  weather: WeatherResponse["daily"] | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      location: "london",
      isLoading: false,
      displayLocation: "",
      weather: null,
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  async fetchWeather() {
    try {
      this.setState({ isLoading: true });

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`,
      );
      const geoData: GeocodingResponse = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results[0];
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
      );
      const weatherData: WeatherResponse = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render(): React.ReactNode {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
        {this.state.isLoading && <p className="loader">Loading...</p>}
      </div>
    );
  }
}

export default App;
