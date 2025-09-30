import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig(({command}) => ({
    plugins: [
        remix({
            ignoredRouteFiles: ["**/.*"],
            ssr: false,
            basename: "/portfolio-site/",
            buildEnd: async (ctx) => {
                if (ctx.config.isSsr) return;

                // This tells Remix to create an index.html file in your build/client folder.
                await ctx.createViteManifest();
            },
        }),
    ],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./app"),
        },
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    base: command === "build" ? "/portfolio-site/" : "/",
    build: {
        outDir: "build",
        emptyOutDir: true,
    },
}));
