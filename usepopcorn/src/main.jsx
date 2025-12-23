import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./components/StarRating";
import { useState } from "react";
// import './index.css'
// import App from './App.jsx'

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRaiting={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRaiting={3} />
    <Test />
  </StrictMode>
);
