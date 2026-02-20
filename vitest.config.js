import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { transform } from "esbuild";

export default defineConfig({
  plugins: [
    {
      name: "jsx-in-js",
      enforce: "pre",
      async transform(code, id) {
        if (/\.js$/.test(id) && !id.includes("node_modules") && code.includes("<")) {
          const result = await transform(code, {
            loader: "jsx",
            jsx: "automatic",
            sourcefile: id,
          });
          return {
            code: result.code,
            map: result.map || null,
          };
        }
      },
    },
    react(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.js"],
    include: ["**/__tests__/**/*.test.{js,jsx}", "**/*.test.{js,jsx}"],
  },
});
