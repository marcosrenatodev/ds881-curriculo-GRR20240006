import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/ds881-curriculo-GRR20240006/" : "/"
}));
