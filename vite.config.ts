import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import Unocss from "./config/unocss";

// https://vitejs.dev/config/
console.log("zhixin");

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  optimizeDeps: {
    // exclude: ["vue-demi"],
  },
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
