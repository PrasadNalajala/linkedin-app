import HomePage from "../components/HomePage";

export const metadata = {
  title: "LinkedIn",
  description: "A modern LinkedIn-inspired social feed built with Next.js and Material UI.",
  openGraph: {
    title: "LinkedIn",
    description: "A modern LinkedIn-inspired social feed built with Next.js and Material UI.",
    url: "https://yourdomain.com/",
    siteName: "LinkedIn Clone",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LinkedIn"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn",
    description: "A modern LinkedIn-inspired social feed built with Next.js and Material UI.",
    images: ["https://yourdomain.com/og-image.png"]
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  }
};

export default function Home() {
  return <HomePage />;
}
