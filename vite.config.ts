import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig(({command}) => ({
    plugins: [
        remix({
            
            ignoredRouteFiles: ["**/.*"],
            ssr: false,
            basename: "/portfolio-site/",
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
    base: "./",
    build: {
        outDir: "build/client",
        emptyOutDir: true,
    },
}));
