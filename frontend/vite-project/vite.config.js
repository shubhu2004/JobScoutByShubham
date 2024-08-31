// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  plugins: [react()], // react is being used here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})