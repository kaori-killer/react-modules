import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "index",
      fileName: (format) => {
        if (format === "es") return "index.js";
        if (format === "cjs") return "index.cjs";
        return "index.umd.cjs";
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: [
        {
          format: "es",
          entryFileNames: "index.js",
          preserveModules: false,
        },
        {
          format: "cjs",
          entryFileNames: "index.cjs",
          preserveModules: false,
        },
      ],
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    react(),
    dts({
      include: ["src/lib"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
});
