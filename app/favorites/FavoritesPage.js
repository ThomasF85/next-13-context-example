"use client";

import ArtPiecePreview from "@/components/ArtPiecePreview";
import styles from "./FavoritesPage.module.css";
import { useArtPiecesInfo } from "@/lib/useArtPiecesInfo";

export default function FavoritesPage({ pieces }) {
  const { isFavorite, toggleFavorite } = useArtPiecesInfo();

  return (
    <ul className={styles.list}>
      {pieces
        .filter((piece) => isFavorite(piece.slug))
        .map((piece) => (
          <li key={piece.slug} className={styles.item}>
            <ArtPiecePreview
              isFavorite={isFavorite(piece.slug)}
              toggleFavorite={() => toggleFavorite(piece.slug)}
              piece={piece}
            />
          </li>
        ))}
    </ul>
  );
}
