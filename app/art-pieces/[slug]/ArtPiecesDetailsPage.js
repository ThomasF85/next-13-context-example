"use client";

import FavoriteButton from "@/components/FavoriteButton";
import styles from "./ArtPieceDetailsPage.module.css";
import Image from "next/image";
import Comments from "@/components/Comments";
import { useArtPiecesInfo } from "@/lib/useArtPiecesInfo";

export default function ArtPieceDetailsPage({ piece }) {
  const { isFavorite, toggleFavorite, addComment, getComments } =
    useArtPiecesInfo();
  const { imageSource: image, title, artist, year, genre, colors } = piece;

  return (
    <section className={styles.wrapper}>
      <div className={styles.actionContainer}>
        <FavoriteButton
          isFavorite={isFavorite(piece.slug)}
          toggleFavorite={() => toggleFavorite(piece.slug)}
        />
      </div>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`${artist}: ${title}`}
        />
      </div>
      <ul role="list" className={styles.list}>
        {colors.map((color, index) => (
          <li
            style={{ backgroundColor: color }}
            className={styles.color}
            key={index}
            color={color}
            aria-label={color}
          />
        ))}
      </ul>
      <ul role="list" className={styles.list}>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <Comments
        comments={getComments(piece.slug)}
        addComment={(newComment) => addComment(piece.slug, newComment)}
      />
    </section>
  );
}
