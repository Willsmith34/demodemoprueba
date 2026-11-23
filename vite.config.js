// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // In development the API still runs on PHP: start it with `npm run start`.
  vite: { server: { proxy: { "/api": "http://localhost:8000" } } },
  // Production is served by PHP (see public/index.php), so no Node server is built.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // Only used at build time, to prerender the routes.
    server: { entry: "server" },
    // Every route linked from the home page becomes static HTML in dist/client.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      filter: ({ path }) => !path.includes("#"),
    },
  },
});
