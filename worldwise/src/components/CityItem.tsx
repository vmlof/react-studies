import { Link } from "react-router";
import type { City } from "../types";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

type CityItemProps = {
  city: City;
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

// flags emojis for windows
const flagemojiToPNG = (flag: string) => {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0)!)
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CityItem({ city }: CityItemProps) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          x
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
