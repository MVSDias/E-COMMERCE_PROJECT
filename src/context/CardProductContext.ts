import { createContext } from "react";
import type { CardProductContextType} from "./CardProductProvider";

//crio o contexto;
export const CardProductContext = createContext<CardProductContextType | undefined>(undefined);