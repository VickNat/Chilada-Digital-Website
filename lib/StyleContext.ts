import { createContext } from "react";
import { ColorContextStyle } from "./types";

const color: any = { color: "white" }

export const StyleContext = createContext(color)