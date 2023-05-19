import fetchArtPieces from "@/lib/fetchArtPieces";
import { randomIndex } from "@/lib/randomIndex";
import SpotlightPage from "./SpotlightPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>Random Art Piece</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();
  const spotlightPiece = pieces[randomIndex(pieces.length)];

  return <SpotlightPage piece={spotlightPiece} />;
}
