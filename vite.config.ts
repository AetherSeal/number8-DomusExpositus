import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_URL } from "./src/utils/constants";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
