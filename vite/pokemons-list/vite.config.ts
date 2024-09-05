import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonList",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonList": "./src/components/PokemonList",
        "./Pokemon": "./src/atoms/Pokemon.ts",
        "./DynamicLoading": "./src/test",
      },
      shared: {
        'lodash/isEmpty': {
          generate: false,
        },
        react: "18.2.0",
        "react-dom": "18.2.0",
        jotai: "2.1.1",
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
