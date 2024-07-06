import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Applies to all search engines like Google, Bing, Yahoo, etc.
      allow: "/",
      disallow: ["/reset-password/*"], // Disallow the reset password page from being indexed.
    },
    sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
  };
}
