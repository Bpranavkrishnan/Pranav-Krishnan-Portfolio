import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Cursor from "@/components/main/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Krishnan - Portfolio",
  description: "Explore the portfolio of Pranav Krishnan, showcasing skills, projects, and achievements.",
  keywords: [
    "Pranav Krishnan",
    "Portfolio",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "REST API",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Firebase",
    "Git",
    "GitHub",
    "CI/CD",
    "Agile Development",
    "Responsive Design",
    "UI/UX Design",
    "Web Performance Optimization",
    "Testing",
    "Jest",
    "Cypress",
    "Webpack",
    "Babel",
    "Software Engineer",
    "Programming",
    "Coding",
    "Tech Enthusiast",
    "Problem Solver",
    "Team Player",
    "Open Source Contributor",
  ],
  authors: [{ name: "Pranav Krishnan" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={(metadata.keywords as string[]).join(", ")} />
        <meta name="author" content={Array.isArray(metadata.authors) ? metadata.authors[0]?.name : metadata.authors?.name} />
        <meta name="viewport" content={metadata.viewport as string} />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="https://your-portfolio-url.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta name="twitter:description" content={metadata.description as string} />
       
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Cursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
