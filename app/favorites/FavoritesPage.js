"use client";

import ArtPiecePreview from "@/components/ArtPiecePreview";
import styles from "./FavoritesPage.module.css";
import { useContext } from "react";
import { ArtPiecesInfoContext } from "@/lib/context/artPiecesInfoContext";

export default function FavoritesPage({ pieces }) {
  const { isFavorite } = useContext(ArtPiecesInfoContext);

  return (
    <ul className={styles.list}>
      {pieces
        .filter((piece) => isFavorite(piece.slug))
        .map((piece) => (
          <li key={piece.slug} className={styles.item}>
            <ArtPiecePreview piece={piece} />
          </li>
        ))}
    </ul>
  );
}
