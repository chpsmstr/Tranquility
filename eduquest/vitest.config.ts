import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/backend/setup.ts"],
    //Delete the "//" below when testing database
    include: ["./__tests__/frontend/*"],
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
  },
});
