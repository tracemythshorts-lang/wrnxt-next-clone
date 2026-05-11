import { Metadata } from "next";

export const siteConfig = {
  name: "WR Next Digital",
  description: "Next-gen digital agency specializing in premium SaaS development, high-conversion design, and scalable infrastructure.",
  url: "https://wrnext.digital",
  ogImage: "https://wrnext.digital/og.png",
  links: {
    twitter: "https://twitter.com/wrnext",
    github: "https://github.com/wrnext",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Digital Agency",
      "SaaS Development",
      "Next.js Agency",
      "Premium Web Design",
      "Conversion Optimization",
      "Full-stack Development",
      "UI/UX Design",
    ],
    authors: [
      {
        name: "WR Next Digital Team",
        url: siteConfig.url,
      },
    ],
    creator: "WR Next Digital",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@wrnext",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
