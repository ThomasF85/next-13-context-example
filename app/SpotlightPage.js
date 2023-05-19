"use client";

import styles from "./SpotlightPage.module.css";
import Image from "next/image.js";
import { useArtPiecesInfo } from "@/lib/useArtPiecesInfo";
import FavoriteButton from "@/components/FavoriteButton";

export default function SpotlightPage({ piece }) {
  const { isFavorite, toggleFavorite } = useArtPiecesInfo();

  if (!piece) {
    return <div>No Piece present</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <FavoriteButton
          isFavorite={isFavorite(piece.slug)}
          toggleFavorite={() => toggleFavorite(piece.slug)}
          positionAbsolute={true}
        />
        <Image
          className={styles.image}
          src={piece.imageSource}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${piece.artist}`}
        />
      </div>
      <h2>{piece.artist}</h2>
    </div>
  );
}
