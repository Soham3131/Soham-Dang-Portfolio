// import CustomCursor from "./components/CustomCursor";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// function App() {
//   return (
//     // Change bg-black to bg-slate-900 or bg-gray-900 just to test
// <div className="relative min-h-screen bg-black text-white md:cursor-none">
//       <CustomCursor />
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;


// import { Helmet } from "react-helmet-async";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CustomCursor from "../src/components/CustomCursor"

// function App() {
//   const siteUrl =
//     typeof window !== "undefined"
//       ? window.location.origin
//       : "https://sohamdang-one.vercel.app";

//   return (
//     <div className="relative min-h-screen bg-black text-white md:cursor-none">
//       <Helmet>
//         <title>Soham Dang | Full Stack Team Lead & MERN Developer</title>
//         <meta
//           name="description"
//           content="Official Portfolio of Soham Dang (SD). Top-performing Full Stack Team Lead at Avani Enterprises. Specializing in premium MERN stack web development, 3D experiences, and AI workflows."
//         />
//         <meta
//           name="keywords"
//           content="Soham Dang, Soham Dng, Soham Dang Portfolio, Soham, best web developer, Full stack developer, SD, Portfolio Website, MERN Stack Developer, React Developer, Web Development India, Avani Enterprises, 3D Web, Three.js"
//         />
//         <meta name="author" content="Soham Dang" />
//         <link rel="canonical" href={siteUrl} />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={siteUrl} />
//         <meta
//           property="og:title"
//           content="Soham Dang | Full Stack Team Lead & Best MERN Developer"
//         />
//         <meta
//           property="og:description"
//           content="I build premium, scalable web experiences. Check out my 3D portfolio and MERN stack projects."
//         />
//         <meta property="og:image" content={`${siteUrl}/ss3.jpg`} />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Soham Dang | Full Stack Team Lead"
//         />
//         <meta
//           name="twitter:description"
//           content="I build premium, scalable web experiences. Check out my 3D portfolio."
//         />
//         <meta name="twitter:image" content={`${siteUrl}/ss3.jpg`} />
//       </Helmet>
//        <CustomCursor/>
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;

import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

function App() {
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://sohamdang.vercel.app";

  const fullImage = `${siteUrl}/ss3.jpg`;

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Helmet>
        {/* PRIMARY SEO */}
        <title>Soham Dang | Full Stack Developer | MERN Expert | Portfolio 2025</title>
        <meta
          name="description"
          content="Portfolio of Soham Dang — Full Stack Developer, MERN Specialist, Team Lead. Expert in React, Node.js, MongoDB, Express, 3D Web, and premium website development. Based in Rohtak, Haryana."
        />
        <meta
          name="keywords"
          content="Soham Dang, Soham, SD, Soham Portfolio, Soham Dang Portfolio, Best Web Developer India, MERN Stack Developer, Full Stack Developer Haryana, React Developer India, Node Developer, 3D Web Portfolio, Best Portfolio Website Developer ,Dang ,Dang Portfolio , 3D websites"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Soham Dang | Full Stack & MERN Developer" />
        <meta
          property="og:description"
          content="Explore the premium MERN portfolio of Soham Dang — Full Stack Developer & Team Lead. High-performance apps, 3D web experiences, and AI-powered projects."
        />
        <meta property="og:image" content={fullImage} />

        {/* TWITTER CARDS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta
          name="twitter:title"
          content="Soham Dang | Full Stack Developer & MERN Expert"
        />
        <meta
          name="twitter:description"
          content="Premium MERN Stack portfolio featuring 3D web development, React, Node.js, and modern interactive UI."
        />
        <meta name="twitter:image" content={fullImage} />

        {/* SCHEMA.ORG STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Soham Dang",
            "alternateName": ["SD", "Soham Dng", "Best Web Developer Soham"],
            "url": "${siteUrl}",
            "image": "${fullImage}",
            "jobTitle": "Full Stack Developer (MERN)",
            "address": {
              "@type": "PostalAddress",
             
              "addressRegion": "Haryana",
              "addressCountry": "India"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Team Lead"
            },
            "sameAs": [
              "https://www.linkedin.com/in/soham-dang-9ba897215/",
              "https://github.com/Soham3131",
              "https://www.instagram.com/soham_.31/"
            ],
            "description": "Soham Dang is a Full Stack MERN Developer specializing in React, Node.js, MongoDB, Express, premium web experiences, and high-performance applications."
          }
          `}
        </script>
      </Helmet>

      <CustomCursor />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
