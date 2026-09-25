import { useEffect } from "react";
import { useUiStore } from "@/store/useUiStore";

export default function ThemeSync() {
  const theme = useUiStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return null;
}
