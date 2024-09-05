import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonHome",
      remotes: {
        pokemonList: "http://localhost:5173/assets/remoteEntry.js",
      },
      shared: {
        'lodash/isEmpty': {
          version: "4.17.21",
        },
        react: {
          version: "18.2.0", // 指定 React 的确切版本
        },
        "react-dom": {
          version: "18.2.0", // 指定 ReactDOM 的确切版本
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
