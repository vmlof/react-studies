import type { City } from "../types";
import styles from "./CityItem.module.css";

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

// flag emojis dor windows
const flagemojiToPNG = (flag: string) => {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0)!)
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CityItem({ city }: CityItemProps) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}></button>
    </li>
  );
}

export default CityItem;
