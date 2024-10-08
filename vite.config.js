import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 其他配置...
  assetsInclude: ["**/*.glb"],
});
