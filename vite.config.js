import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // o MapLibre 6 resolve o worker pelo caminho do próprio pacote; pré-empacotado, ele se perde
  optimizeDeps: { exclude: ["maplibre-gl"] },
  resolve: {
    // o mesmo alias precisa existir no jsconfig.json, para o editor
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
