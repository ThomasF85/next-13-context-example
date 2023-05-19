import useLocalStorageState from "use-local-storage-state";

export function useArtPiecesInfo() {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-gallery",
    { defaultValue: [] }
  );

  function toggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
      return artPiece
        ? artPiecesInfo.map((pieceInfo) =>
            pieceInfo.slug === slug
              ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
              : pieceInfo
          )
        : [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  function isFavorite(slug) {
    return !!artPiecesInfo.find((artPiece) => artPiece.slug === slug)
      ?.isFavorite;
  }

  function getComments(slug) {
    return artPiecesInfo.find((piece) => piece.slug === slug)?.comments || [];
  }

  function addComment(slug, newComment) {
    setArtPiecesInfo((artPiecesInfo) => {
      const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
      return artPiece
        ? artPiecesInfo.map((pieceInfo) => {
            if (pieceInfo.slug === slug) {
              return pieceInfo.comments
                ? {
                    ...pieceInfo,
                    comments: [...pieceInfo.comments, newComment],
                  }
                : { ...pieceInfo, comments: [newComment] };
            } else {
              return pieceInfo;
            }
          })
        : [
            ...artPiecesInfo,
            { slug, isFavorite: false, comments: [newComment] },
          ];
    });
  }

  return { isFavorite, toggleFavorite, getComments, addComment };
}
