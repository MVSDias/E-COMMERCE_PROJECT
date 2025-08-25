import { useContext } from "react";
import { CardProductContext } from "./CardProductContext";

export const useCardProduct = () => {
  const context = useContext(CardProductContext);
  if (!context) throw new Error("useCardProduct deve ser usado dentro do CardProductProvider");
  return context;
};