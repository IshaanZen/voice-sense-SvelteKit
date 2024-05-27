// vite.config.js
import { sveltekit } from "file:///D:/Major%20Project%20-%20FullStack/voice-sense-FrontEnd/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///D:/Major%20Project%20-%20FullStack/voice-sense-FrontEnd/node_modules/vite/dist/node/index.js";
import Icons from "file:///D:/Major%20Project%20-%20FullStack/voice-sense-FrontEnd/node_modules/unplugin-icons/dist/vite.js";
var vite_config_default = defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
      autoInstall: true
    })
  ],
  server: {
    fs: {
      // Allow access to files from the project root.
      allow: [".."]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNYWpvciBQcm9qZWN0IC0gRnVsbFN0YWNrXFxcXHZvaWNlLXNlbnNlLUZyb250RW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxNYWpvciBQcm9qZWN0IC0gRnVsbFN0YWNrXFxcXHZvaWNlLXNlbnNlLUZyb250RW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NYWpvciUyMFByb2plY3QlMjAtJTIwRnVsbFN0YWNrL3ZvaWNlLXNlbnNlLUZyb250RW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRcdEljb25zKHtcblx0XHRcdGNvbXBpbGVyOiAnc3ZlbHRlJyxcblx0XHRcdGF1dG9JbnN0YWxsIDogdHJ1ZVxuXHRcdH0pXG5cdF0gLCBcblx0c2VydmVyOiB7XG5cdFx0ZnM6IHtcblx0XHRcdC8vIEFsbG93IGFjY2VzcyB0byBmaWxlcyBmcm9tIHRoZSBwcm9qZWN0IHJvb3QuXG5cdFx0XHRhbGxvdzogWycuLiddXG5cdFx0fVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVYsU0FBUyxpQkFBaUI7QUFDM1csU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLGFBQWM7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxNQUVILE9BQU8sQ0FBQyxJQUFJO0FBQUEsSUFDYjtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
