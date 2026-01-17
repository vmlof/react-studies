import { Form, useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat: string | null = searchParams.get("lat");
  const lng: string | null = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: "23", lng: "50" });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
