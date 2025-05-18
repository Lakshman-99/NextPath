/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://nextpath-algo.vercel.app",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: "./public",

    // Force include the homepage
    additionalPaths: async () => [
        {
            loc: "/", // required
            changefreq: "monthly",
            priority: 1.0,
            lastmod: new Date().toISOString(),
        },
    ],
};

export default config;
