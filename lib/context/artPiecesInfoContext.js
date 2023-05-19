"use client";

import { createContext, useCallback, useMemo } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ArtPiecesInfoContext = createContext();
export const ArtPiecesInfoAPIContext = createContext();

export const PiecesInfoContextProvider = ({ children }) => {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-gallery",
    { defaultValue: [] }
  );

  const toggleFavorite = useCallback(
    (slug) => {
      setArtPiecesInfo((prev) => {
        const artPiece = prev.find((piece) => piece.slug === slug);
        if (artPiece) {
          return prev.map((pieceInfo) =>
            pieceInfo.slug === slug
              ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
              : pieceInfo
          );
        } else {
          return [...prev, { slug, isFavorite: true }];
        }
      });
    },
    [setArtPiecesInfo]
  );

  const addComment = useCallback(
    (slug, newComment) =>
      setArtPiecesInfo((prev) => {
        const artPiece = prev.find((piece) => piece.slug === slug);
        if (artPiece) {
          return prev.map((pieceInfo) => {
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
          });
        } else {
          return [...prev, { slug, isFavorite: false, comments: [newComment] }];
        }
      }),
    [setArtPiecesInfo]
  );

  const isFavorite = useCallback(
    (slug) => {
      return !!artPiecesInfo.find((artPiece) => artPiece.slug === slug)
        ?.isFavorite;
    },
    [artPiecesInfo]
  );

  const getComments = useCallback(
    (slug) => {
      return artPiecesInfo.find((piece) => piece.slug === slug)?.comments || [];
    },
    [artPiecesInfo]
  );

  const context = useMemo(
    () => ({
      isFavorite,
      getComments,
    }),
    [isFavorite, getComments]
  );

  const apiContext = useMemo(
    () => ({
      addComment,
      toggleFavorite,
    }),
    [addComment, toggleFavorite]
  );

  return (
    <ArtPiecesInfoContext.Provider value={context}>
      <ArtPiecesInfoAPIContext.Provider value={apiContext}>
        {children}
      </ArtPiecesInfoAPIContext.Provider>
    </ArtPiecesInfoContext.Provider>
  );
};
