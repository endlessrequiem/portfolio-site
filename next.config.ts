import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/portfolio-site/' : '',
    basePath: isProd ? '/portfolio-site' : '',
    // Other configurations
};

const nextConfig: NextConfig = {
    /* config options here */
};

export default nextConfig;
