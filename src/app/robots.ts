import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/dashboard"
        },
        sitemap: 'https://fake-store-beta-taupe.vercel.app/sitemap.xml'
    }
}