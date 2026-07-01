const siteUrl = "https://www.arquitetopaulofonseca.com.br";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
