const siteUrl = "https://www.arquitetopaulofonseca.com.br";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/"
      },
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
