


// import { Helmet } from "react-helmet-async";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CustomCursor from "./components/CustomCursor";

// function App() {
//   const siteUrl =
//     typeof window !== "undefined"
//       ? window.location.origin
//       : "https://sohamdang.vercel.app";

//   const fullImage = `${siteUrl}/ss3.jpg`;

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <Helmet>
//         {/* PRIMARY SEO */}
//         <title>Soham Dang | Full Stack Developer | MERN Expert | Portfolio 2025</title>
//         <meta
//           name="description"
//           content="Portfolio of Soham Dang — Full Stack Developer, MERN Specialist, Team Lead. Expert in React, Node.js, MongoDB, Express, 3D Web, and premium website development. Based in Rohtak, Haryana."
//         />
//         <meta
//           name="keywords"
//           content="Soham Dang, Soham, SD, Soham Portfolio, Soham Dang Portfolio, Best Web Developer India, MERN Stack Developer, Full Stack Developer Haryana, React Developer India, Node Developer, 3D Web Portfolio, Best Portfolio Website Developer ,Dang ,Dang Portfolio , 3D websites"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={siteUrl} />

//         {/* OPEN GRAPH */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={siteUrl} />
//         <meta property="og:title" content="Soham Dang | Full Stack & MERN Developer" />
//         <meta
//           property="og:description"
//           content="Explore the premium MERN portfolio of Soham Dang — Full Stack Developer & Team Lead. High-performance apps, 3D web experiences, and AI-powered projects."
//         />
//         <meta property="og:image" content={fullImage} />

//         {/* TWITTER CARDS */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:url" content={siteUrl} />
//         <meta
//           name="twitter:title"
//           content="Soham Dang | Full Stack Developer & MERN Expert"
//         />
//         <meta
//           name="twitter:description"
//           content="Premium MERN Stack portfolio featuring 3D web development, React, Node.js, and modern interactive UI."
//         />
//         <meta name="twitter:image" content={fullImage} />

//         {/* SCHEMA.ORG STRUCTURED DATA */}
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "Person",
//             "name": "Soham Dang",
//             "alternateName": ["SD", "Soham Dng", "Best Web Developer Soham"],
//             "url": "${siteUrl}",
//             "image": "${fullImage}",
//             "jobTitle": "Full Stack Developer (MERN)",
//             "address": {
//               "@type": "PostalAddress",
             
//               "addressRegion": "Haryana",
//               "addressCountry": "India"
//             },
//             "worksFor": {
//               "@type": "Organization",
//               "name": "Freelance / Team Lead"
//             },
//             "sameAs": [
//               "https://www.linkedin.com/in/soham-dang-9ba897215/",
//               "https://github.com/Soham3131",
//               "https://www.instagram.com/soham_.31/"
//             ],
//             "description": "Soham Dang is a Full Stack MERN Developer specializing in React, Node.js, MongoDB, Express, premium web experiences, and high-performance applications."
//           }
//           `}
//         </script>
//       </Helmet>

//       <CustomCursor />
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

/**
 * App - SEO-friendly wrapper using react-helmet-async
 * Ensure HelmetProvider wraps this component in index.js
 */
export default function App() {
  const siteUrl =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "https://sohamdang.vercel.app";

  const ogImage = `${siteUrl}/og-main.jpg`; // 1200x630 OG image
  const profileImage = `${siteUrl}/ss3.jpg`;
  const logo192 = `${siteUrl}/logo192.png`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Soham Dang",
    alternateName: ["SD", "Soham Dng"],
    url: siteUrl,
    image: profileImage,
    jobTitle: "Full Stack MERN Developer & Team Lead",
    description:
      "Full Stack MERN Developer (React, Node.js, Express, MongoDB). Building high-performance web apps, 3D interactive experiences (Three.js) and SEO-first portfolios.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohtak",
      addressRegion: "Haryana",
      addressCountry: "IN"
    },
    sameAs: [
      "https://www.linkedin.com/in/soham-dang-9ba897215/",
      "https://github.com/Soham3131",
      "https://www.instagram.com/soham_.31/"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Soham Dang — Portfolio",
    url: siteUrl,
    description:
      "Soham Dang (SD) portfolio — Full Stack MERN Developer, 3D Web & Team Lead. Visit for projects, resume and contact.",
    publisher: {
      "@type": "Organization",
      name: "Soham Dang",
      logo: {
        "@type": "ImageObject",
        url: logo192
      }
    },
    sameAs: personJsonLd.sameAs
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Helmet>
        {/* Primary SEO */}
        <title>Soham Dang | Full Stack MERN Developer & Team Lead | 3D Portfolio</title>

        <meta
          name="description"
          content="Soham Dang (SD) — Full Stack MERN Developer & Team Lead from Rohtak. I build high-performance React apps, 3D interactive experiences (Three.js), admin dashboards and SEO-optimized portfolio websites."
        />

        <meta
          name="keywords"
          content={
            "Soham Dang, Soham, SD, sohamdang.vercel.app, Full Stack Developer, MERN Developer, React Developer, Node.js, MongoDB, Three.js, 3D portfolio, best portfolio website, portfolio developer, UI/UX, Team Lead, Avani Enterprises, Rohtak, Haryana, SEO portfolio, animated portfolio"
          }
        />

        <meta name="author" content="Soham Dang" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Soham Dang Portfolio" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Soham Dang | Full Stack MERN Developer & Team Lead" />
        <meta property="og:description" content="Explore the professional MERN portfolio of Soham Dang — 3D demos, admin dashboards, AI workflows and premium UI." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Soham Dang — Full Stack Developer portfolio preview" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soham Dang | Full Stack MERN Developer" />
        <meta name="twitter:description" content="Full Stack MERN Developer & Team Lead — React, Node, 3D Web, SEO-focused portfolios." />
        <meta name="twitter:image" content={ogImage} />

        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Favicons & app icons */}
        <link rel="icon" href={`${siteUrl}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${siteUrl}/favicon-32.png`} />
        <link rel="apple-touch-icon" href={logo192} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>

      {/* If CustomCursor causes issues, comment it out */}
      <CustomCursor />

      <Navbar />
      <Home />
    </div>
  );
}
