import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig(({command}) => ({
    plugins: [
        remix({
            ignoredRouteFiles: ["**/.*"],
            ssr: false,
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
