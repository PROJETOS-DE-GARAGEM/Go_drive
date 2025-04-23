import { useContext } from "react";
import { HomeContext } from "../contexts/homeContext";

export function useHome() {
  const homeContext = useContext(HomeContext);

  return homeContext;
}
