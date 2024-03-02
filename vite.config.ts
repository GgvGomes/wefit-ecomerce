import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import tsconfigPaths from "vite-tsconfig-paths";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: [
      // { find: "@assets/*", replacement: resolve(__dirname, "src/assets/*") },

      // {
      //   find: "@molecules/*",
      //   replacement: resolve(__dirname, "src/components/molecules/*"),
      // },
      // {
      //   find: "@organisms/*",
      //   replacement: resolve(__dirname, "src/components/organisms/*"),
      // },
      {
        find: "@templates",
        replacement: resolve(__dirname, "src/components/templates"),
      },
      // { find: "@context/*", replacement: resolve(__dirname, "src/context/*") },
    ],
  },
});
