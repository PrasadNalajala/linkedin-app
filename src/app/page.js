import HomePage from "../components/HomePage";

export const metadata = {
  title: "LinkedIn",
  description: "A modern LinkedIn-inspired social feed built with Next.js and Material UI.",
  openGraph: {
    title: "LinkedIn",
    description: "A modern LinkedIn-inspired social feed built with Next.js and Material UI.",
    url: "https://linkedin-app-beta.vercel.app/",
    siteName: "LinkedIn Clone",
    images: [
      {
        url: "https://linkedin-app-beta.vercel.app/og-image.png",
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
    images: ["https://linkedin-app-beta.vercel.app/og-image.png"]
  },
  alternates: {
    canonical: "https://linkedin-app-beta.vercel.app/",
  }
};

export default function Home() {
  return <HomePage />;
}
