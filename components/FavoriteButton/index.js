import Image from "next/image.js";
import styles from "./index.module.css";

export default function FavoriteButton({
  isFavorite,
  toggleFavorite,
  positionAbsolute = false,
}) {
  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      onClick={toggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
