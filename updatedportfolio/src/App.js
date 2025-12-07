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
// import CustomCursor from "./components/CustomCursor";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// function App() {
//   // Define your site URL variable here for easy updates
//   const siteUrl = "https://your-domain-name.com"; 

//   return (
//     <div className="relative min-h-screen bg-black text-white md:cursor-none">
//       <Helmet>
//         {/* --- PRIMARY SEO --- */}
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

//         {/* --- OPEN GRAPH / FACEBOOK / LINKEDIN --- */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={siteUrl} />
//         <meta property="og:title" content="Soham Dang | Full Stack Team Lead & Best MERN Developer" />
//         <meta property="og:description" content="I build premium, scalable web experiences. Check out my 3D portfolio and MERN stack projects." />
//         {/* Assuming ss3.jpg is in your public folder */}
//         <meta property="og:image" content={`${siteUrl}/ss3.jpg`} />

//         {/* --- TWITTER --- */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Soham Dang | Full Stack Team Lead" />
//         <meta name="twitter:description" content="I build premium, scalable web experiences. Check out my 3D portfolio." />
//         <meta name="twitter:image" content={`${siteUrl}/ss3.jpg`} />
//       </Helmet>

//       {/* <CustomCursor /> */}
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;


import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomCursor from "../src/components/CustomCursor"

function App() {
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://sohamdang-one.vercel.app";

  return (
    <div className="relative min-h-screen bg-black text-white md:cursor-none">
      <Helmet>
        <title>Soham Dang | Full Stack Team Lead & MERN Developer</title>
        <meta
          name="description"
          content="Official Portfolio of Soham Dang (SD). Top-performing Full Stack Team Lead at Avani Enterprises. Specializing in premium MERN stack web development, 3D experiences, and AI workflows."
        />
        <meta
          name="keywords"
          content="Soham Dang, Soham Dng, Soham Dang Portfolio, Soham, best web developer, Full stack developer, SD, Portfolio Website, MERN Stack Developer, React Developer, Web Development India, Avani Enterprises, 3D Web, Three.js"
        />
        <meta name="author" content="Soham Dang" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content="Soham Dang | Full Stack Team Lead & Best MERN Developer"
        />
        <meta
          property="og:description"
          content="I build premium, scalable web experiences. Check out my 3D portfolio and MERN stack projects."
        />
        <meta property="og:image" content={`${siteUrl}/ss3.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Soham Dang | Full Stack Team Lead"
        />
        <meta
          name="twitter:description"
          content="I build premium, scalable web experiences. Check out my 3D portfolio."
        />
        <meta name="twitter:image" content={`${siteUrl}/ss3.jpg`} />
      </Helmet>
       {/* <CustomCursor/> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
