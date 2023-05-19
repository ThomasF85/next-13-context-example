"use client";

import Image from "next/image.js";
import styles from "./index.module.css";
import { useContext } from "react";
import {
  ArtPiecesInfoAPIContext,
  ArtPiecesInfoContext,
} from "@/lib/context/artPiecesInfoContext";

export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const { isFavorite } = useContext(ArtPiecesInfoContext);
  const { toggleFavorite } = useContext(ArtPiecesInfoAPIContext);

  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite(slug) ? styles.favorite : ""
      }`}
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-label={isFavorite(slug) ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
