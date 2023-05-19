"use client";

import styles from "./SpotlightPage.module.css";
import Image from "next/image.js";
import FavoriteButton from "@/components/FavoriteButton";
import { useContext, useEffect, useState } from "react";
import {
  ArtPiecesInfoAPIContext,
  ArtPiecesInfoContext,
} from "@/lib/context/artPiecesInfoContext";
import { randomIndex } from "@/lib/randomIndex";

export default function SpotlightPage({ pieces }) {
  const { isFavorite } = useContext(ArtPiecesInfoContext);
  const { toggleFavorite } = useContext(ArtPiecesInfoAPIContext);
  const [piece, setPiece] = useState(null);

  useEffect(() => {
    setPiece(pieces[randomIndex(pieces.length)]);
  }, []);

  if (!piece) {
    return <div>Shuffling</div>;
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
