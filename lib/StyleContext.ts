import { createContext } from "react";
import { ColorContextStyle } from "./types";

const color: ColorContextStyle = { color: "white" }

export const StyleContext = createContext(color)