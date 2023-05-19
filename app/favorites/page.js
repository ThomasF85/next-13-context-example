import fetchArtPieces from "@/lib/fetchArtPieces";
import FavoritesPage from "./FavoritesPage";
import { Suspense } from "react";

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

  return <FavoritesPage pieces={pieces} />;
}
