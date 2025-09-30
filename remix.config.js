/** @type {import('@remix-run/dev').AppConfig} */
export default {
    ignoredRouteFiles: ["**/.*"],
    publicPath: process.env.NODE_ENV === "production" ? "/portfolio-site/" : "/",
    ssr: false
};
