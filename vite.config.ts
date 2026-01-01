import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Target ES2019 to avoid optional chaining (?.) which react-snap's old Chromium doesn't support
    target: "es2019",
    rollupOptions: {
      output: {
        // Clean filenames without hashes for assets
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  plugins: [
    react(),
    mode === "development" &&
      (await import("lovable-tagger").then((m) => m.componentTagger())),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
