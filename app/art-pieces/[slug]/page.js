import ArtPieceDetails from "@/components/ArtPiecesDetails";
import fetchArtPieces from "@/lib/fetchArtPieces";

export async function generateStaticParams() {
  const pieces = await fetchArtPieces();

  return pieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export default async function Page({ params }) {
  const pieces = await fetchArtPieces();
  const piece = pieces.find((piece) => piece.slug === params.slug);

  return (
    <>
      <header>
        <h1>{piece?.name ?? "Unknown Piece"}</h1>
      </header>
      {piece && <ArtPieceDetails piece={piece} />}
    </>
  );
}
