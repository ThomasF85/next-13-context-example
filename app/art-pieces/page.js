import fetchArtPieces from "@/lib/fetchArtPieces";
import { Suspense } from "react";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <header>
        <h1>Art Pieces</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();

  return (
    <ul className={styles.list}>
      {pieces.map((piece) => (
        <li key={piece.slug} className={styles.item}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
