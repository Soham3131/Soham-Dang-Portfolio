

// // src/components/Projects.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";

// // Assets
// import rtkshoe from "../assets/rtkshoe.mp4";
// import hr from "../assets/hr.mp4"
// import tpo from "../assets/tpo.mp4"
// import tpoImg from "../assets/tpoImg.png"
// import hrimg from "../assets/hrimg.png"
// import avani from "../assets/avani.jpg";
// import shoe from "../assets/shoe.png";
// import apsara from "../assets/apsara.mp4"
// import apsaradash from "../assets/apsaradash.png"
// import apsaramain from "../assets/apsaramain.png"
// import tpo1 from "../assets/tpo1.png"



// // --- ICONS ---

// function PlayIcon() {
//   return (
//     <svg
//       className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//     >
//       <path d="M8 5v14l11-7z" />
//     </svg>
//   );
// }

// function MaximizeIcon() {
//   return (
//     <svg
//       className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//     </svg>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg
//       className="w-6 h-6 text-white"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   );
// }

// function ExternalIcon() {
//   return (
//     <svg
//       className="h-3 w-3"
//       viewBox="0 0 16 16"
//       aria-hidden="true"
//       fill="none"
//     >
//       <path
//         d="M5.25 3.5H12.5M12.5 3.5V10.75M12.5 3.5L4 12"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function Spinner() {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
//        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-emerald-500"></div>
//     </div>
//   );
// }

// // --- MAIN DATA ---

// const projects = [
//   {
//     id: "01",
//     year: "2025",
//     title: "Rohtak Shoe Co. 3D Store",
//     category: "MERN · 3D Web",
//     client: "Rohtak Shoe Co.",
//     role: "Full Stack Team Lead",
//     summary:
//       "A comprehensive e-commerce platform featuring immersive 3D product integration, dedicated dashboards for admins and delivery partners, and robust analytics for business growth.",
//     highlights: [
//       "Interactive 3D model integration for product visualization.",
//       "Admin & Delivery dashboards with stock management and analytics.",
//       "Advanced order system: Rescheduling, Cancellations, and Refund tracking.",
//     ],
//     tech: ["React", "React Three Fiber", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay"],
//     liveUrl: "https://shoes-ecommerce",
//     repoUrl: "",
//     media: [
//       {
//         type: "video",
//         src: rtkshoe,
//         poster: shoe,
//         label: "3D Product & Dashboard Demo",
//       },
//       {
//         type: "image",
//         src: shoe,
//         label: "Analytics & Admin View",
//       },
//     ],
//   },

//   {
//     id: "02", // Adjust ID as needed
//     year: "2025", // Adjust year if needed
//     title: "HR Portal (ERP Software)",
//     category: "MERN · Enterprise App",
//     client: "Avani Enterprises", // Based on your team lead role
//     role: "Full Stack Team Lead",
//     summary:
//       "A comprehensive ERP solution designed to streamline workforce management. Features automated payroll with penalty calculations, real-time attendance tracking with check-in/out, and performance analytics.",
//     highlights: [
//       "Automated Payroll system with penalty & leave calculations.",
//       "Daily EOD submission & Employee Goal Tracking.",
//       "Analytics Dashboard for attendance trends & performance rates.",
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS" , "Cron"],
//     liveUrl: "https://hr-portal-dndt.vercel.app/",
//     repoUrl: "",
//     media: [
//       {
//         type: "video",
//         src: hr, // Replace with your imported video variable
//         poster: hrimg, // Replace with your imported image variable
//         label: "ERP Dashboard Walkthrough",
//       },
//       {
//         type: "image",
//         src: hrimg, // Replace with your imported image variable
//         label: "Payroll & Analytics View",
//       },
//     ],
//   },
//   {
//     id: "03",
//     year: "2024",
//     title: "BMU Placement Cell Portal",
//     category: "MERN · EdTech",
//     client: "Baba Mastnath University",
//     role: "Full Stack Developer",
//     summary:
//       "A centralized recruitment ecosystem for University placements. Bridges the gap between students and recruiters with automated job applications, drive management, and student portfolio generation.",
//     highlights: [
//       "Integrated Resume Builder: Students can create and download ATS-friendly PDFs.",
//       "Admin Panel: Manages job fairs, internships, and tracks student applications.",
//       "Real-time Analytics: Visual insights on placement drives and application status.",
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Puppeteer (PDF Gen)"],
//     liveUrl: "https://trainingandplacementcell.com",
//     repoUrl: "",
//     media: [
//       {
//         type: "video",
//         src: tpo, // Replace with imported video
//         poster: tpo1, // Replace with imported image
//         label: "Resume Builder & Job Application Demo",
//       },
//       {
//         type: "image",
//         src: tpoImg, // Replace with imported image
//         label: "Admin & Job Listing Dashboard",
//       },
//     ],
//   },
//   {
//     id: "04",
//     year: "2024",
//     title: "Apsara Cafe Ordering App",
//     category: "MERN · FoodTech",
//     client: "Apsara Cafe",
//     role: "Full Stack Developer",
//     summary:
//       "A complete food ordering ecosystem featuring a highly interactive UI for customers and a powerful backend for cafe management. Streamlines operations from order placement to revenue tracking.",
//     highlights: [
//       "Razorpay Payment Gateway: Secure and seamless transaction integration.",
//       "Dynamic Menu Management: Admin can create/edit items instantly from the dashboard.",
//       "Accurate Sales Analytics: Visual breakdowns of daily revenue and order volume.",
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS"],
//     liveUrl: "https://apsara-cafe.vercel.app/",
//     repoUrl: "",
//     media: [
//       {
//         type: "video",
//         src: apsara, // Replace with imported video
//         poster: apsaramain, // Replace with imported image
//         label: "Ordering Flow & Admin Demo",
//       },
//       {
//         type: "image",
//         src: apsaradash, // Replace with imported image
//         label: "Menu & Sales Dashboard",
//       },
//     ],
//   },
//   // ... other projects
// ];

// // --- COMPONENT LOGIC ---

// function ProjectContentInsideTablet({ project }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isExpanded, setIsExpanded] = useState(false); // Controls full-screen mode
//   const [isVideoLoading, setIsVideoLoading] = useState(false);
//   const videoRef = useRef(null);

//   const activeMedia = project.media[activeIndex];

//   // Reset state when changing media slides
//   useEffect(() => {
//     setIsExpanded(false);
//     setIsVideoLoading(activeMedia.type === 'video'); // Assume video is loading initially
//   }, [activeIndex, activeMedia.type]);

//   // Handle Expand (Play Video OR Zoom Image)
//   const handleExpand = () => {
//     setIsExpanded(true);
//     if (activeMedia.type === "video" && videoRef.current) {
//       videoRef.current.play().catch(e => console.log("Play failed", e));
//     }
//   };

//   // Handle Close (Pause Video & Reset View)
//   const handleClose = (e) => {
//     e.stopPropagation();
//     setIsExpanded(false);
//     if (activeMedia.type === "video" && videoRef.current) {
//       videoRef.current.pause();
//       // Optional: don't reset time so they can resume, or reset: videoRef.current.currentTime = 0;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-full w-full bg-[#111] relative overflow-hidden">
      
//       {/* LEFT SIDE: Media Area (Becomes Full Screen when isExpanded is true) */}
//       <div 
//         className={`relative transition-all duration-500 ease-in-out bg-black ${
//           isExpanded 
//             ? "absolute inset-0 z-50 w-full h-full" 
//             : "w-full md:w-1/2 h-64 md:h-full border-r border-white/10"
//         }`}
//       >
//         <div className="h-full w-full relative group">
          
//           {/* --- VIDEO LOGIC --- */}
//           {activeMedia.type === "video" ? (
//             <>
//               {/* Spinner: Visible if loading and currently playing/expanded */}
//               {isVideoLoading && isExpanded && <Spinner />}
              
//               <video
//                 ref={videoRef}
//                 src={activeMedia.src}
//                 poster={activeMedia.poster}
//                 className={`h-full w-full object-cover transition-opacity duration-300 ${isVideoLoading && isExpanded ? 'opacity-50' : 'opacity-100'}`}
//                 playsInline
//                 // Listeners for loading state
//                 onWaiting={() => setIsVideoLoading(true)}
//                 onPlaying={() => setIsVideoLoading(false)}
//                 onCanPlay={() => setIsVideoLoading(false)}
//                 onEnded={() => setIsExpanded(false)} // Auto close on end?
//               />
//             </>
//           ) : (
//              /* --- IMAGE LOGIC --- */
//             <img
//               src={activeMedia.src}
//               alt={activeMedia.label}
//               className="h-full w-full object-cover"
//               draggable={false}
//             />
//           )}

//           {/* --- OVERLAY: PLAY / EXPAND BUTTON --- */}
//           {/* Only visible if NOT expanded */}
//           {!isExpanded && (
//             <div 
//               onClick={handleExpand}
//               className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 cursor-pointer transition-all z-20"
//             >
//               <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 shadow-xl group-hover:border-emerald-500/50 transition-colors transform group-hover:scale-105">
//                  {activeMedia.type === 'video' ? <PlayIcon /> : <MaximizeIcon />}
//               </div>
//             </div>
//           )}

//           {/* --- CLOSE BUTTON --- */}
//           {/* Only visible if EXPANDED */}
//           {isExpanded && (
//             <button
//               onClick={handleClose}
//               className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-red-600/80 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-all shadow-lg"
//             >
//               <CloseIcon />
//             </button>
//           )}

//         </div>

//         {/* Media Toggles (Thumbnails) - Hidden when expanded */}
//         {!isExpanded && project.media.length > 1 && (
//           <div className="absolute bottom-4 left-4 flex gap-2 z-30">
//             {project.media.map((m, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded border backdrop-blur-md transition-colors ${
//                   idx === activeIndex
//                     ? "bg-emerald-500/80 border-emerald-500 text-white"
//                     : "bg-black/50 border-white/20 text-zinc-300 hover:bg-black/80"
//                 }`}
//               >
//                 {m.type === "video" ? "Video" : "Img"}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* RIGHT SIDE: Text Info */}
//       {/* Hidden when expanded */}
//       <div 
//         className={`w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col gap-5 overflow-y-auto bg-zinc-900/50 text-left transition-opacity duration-300 ${
//           isExpanded ? "opacity-0 pointer-events-none hidden" : "opacity-100"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
//            <div className="flex gap-4 pt-2">
//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg transition-colors"
//               >
//                 Live Site <ExternalIcon />
//               </a>
//             )}
//             {project.repoUrl && (
//               <a
//                 href={project.repoUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 GitHub <ExternalIcon />
//               </a>
//             )}
//            </div>
//            <span className="text-zinc-500">/</span>
//            <span className="text-zinc-400">{project.category}</span>
//         </div>

//         {/* Title */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
//             {project.title}
//           </h2>
//           <p className="mt-1 text-sm font-medium text-emerald-400">
//             {project.role} <span className="text-zinc-600">@</span> {project.client}
//           </p>
//         </div>

//         {/* Summary */}
//         <p className="text-sm text-zinc-300 leading-relaxed">
//           {project.summary}
//         </p>

//         {/* Highlights */}
//         <ul className="space-y-2">
//           {project.highlights.map((h, i) => (
//             <li key={i} className="flex gap-2 text-xs text-zinc-400 leading-relaxed">
//               <span className="mt-1.5 min-h-[4px] min-w-[4px] rounded-full bg-emerald-500" />
//               {h}
//             </li>
//           ))}
//         </ul>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="px-2 py-1 text-[10px] text-zinc-400 bg-zinc-800 rounded border border-zinc-700"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const Projects = () => {
//   return (
//     <section id="projects" className="relative bg-[#0f172a] py-20">
//       {/* Background Gradients */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
//       </div>

//       {/* Section heading */}
//       <div className="relative z-10 mx-auto mb-10 max-w-4xl px-6 md:px-10 text-center md:text-left">
//         <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
//           04 · Projects
//         </p>
//         <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
//           Selected work that{" "}
//           <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
//             actually shipped to users.
//           </span>
//         </h2>
//         <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
//           A mix of internal tools and client work — each project shows real UI,
//           behaviour and the stack I used to build it.
//         </p>
//       </div>

//       {/* Projects list */}
//       <div className="flex flex-col gap-0">
//         {projects.map((project) => (
//           <div key={project.id} className="relative z-10">
//             <ContainerScroll
//               titleComponent={
//                 <div className="flex flex-col items-center">
//                   <span className="text-[100px] md:text-[140px] font-black text-white/5 leading-none select-none">
//                     {project.id}
//                   </span>
//                 </div>
//               }
//             >
//               <ProjectContentInsideTablet project={project} />
//             </ContainerScroll>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
// src/components/Projects.jsx
import React, { useState, useRef, useEffect } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

// Assets
import rtkshoe from "../assets/rtkshoe.mp4";
import hr from "../assets/hr.mp4"
import tpo from "../assets/tpo.mp4"
import tpoImg from "../assets/tpoImg.png"
import hrimg from "../assets/hrimg.png"
import avani from "../assets/avani.jpg";
import shoe from "../assets/shoe.png";
import apsara from "../assets/apsara.mp4"
import apsaradash from "../assets/apsaradash.png"
import apsaramain from "../assets/apsaramain.png"
import tpo1 from "../assets/tpo1.png"

// --- ICONS ---

function PlayIcon() {
  return (
    <svg
      className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg
      className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M5.25 3.5H12.5M12.5 3.5V10.75M12.5 3.5L4 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
       <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-emerald-500"></div>
    </div>
  );
}

// --- MAIN DATA ---

const projects = [
  {
    id: "01",
    year: "2025",
    title: "Rohtak Shoe Co. 3D Store",
    category: "MERN · 3D Web",
    client: "Rohtak Shoe Co.",
    role: "Full Stack Team Lead",
    summary:
      "A comprehensive e-commerce platform featuring immersive 3D product integration, dedicated dashboards for admins and delivery partners, and robust analytics for business growth.",
    highlights: [
      "Interactive 3D model integration for product visualization.",
      "Admin & Delivery dashboards with stock management and analytics.",
      "Advanced order system: Rescheduling, Cancellations, and Refund tracking.",
    ],
    tech: ["React", "React Three Fiber", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay"],
    liveUrl: "https://shoes-ecommerce",
    repoUrl: "",
    media: [
      {
        type: "video",
        src: rtkshoe,
        poster: shoe,
        label: "3D Product & Dashboard Demo",
      },
      {
        type: "image",
        src: shoe,
        label: "Analytics & Admin View",
      },
    ],
  },

  {
    id: "02", // Adjust ID as needed
    year: "2025", // Adjust year if needed
    title: "HR Portal (ERP Software)",
    category: "MERN · Enterprise App",
    client: "Avani Enterprises", // Based on your team lead role
    role: "Full Stack Team Lead",
    summary:
      "A comprehensive ERP solution designed to streamline workforce management. Features automated payroll with penalty calculations, real-time attendance tracking with check-in/out, and performance analytics.",
    highlights: [
      "Automated Payroll system with penalty & leave calculations.",
      "Daily EOD submission & Employee Goal Tracking.",
      "Analytics Dashboard for attendance trends & performance rates.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS" , "Cron"],
    liveUrl: "https://hr-portal-dndt.vercel.app/",
    repoUrl: "",
    media: [
      {
        type: "video",
        src: hr, // Replace with your imported video variable
        poster: hrimg, // Replace with your imported image variable
        label: "ERP Dashboard Walkthrough",
      },
      {
        type: "image",
        src: hrimg, // Replace with your imported image variable
        label: "Payroll & Analytics View",
      },
    ],
  },
  {
    id: "03",
    year: "2024",
    title: "BMU Placement Cell Portal",
    category: "MERN · EdTech",
    client: "Baba Mastnath University",
    role: "Full Stack Developer",
    summary:
      "A centralized recruitment ecosystem for University placements. Bridges the gap between students and recruiters with automated job applications, drive management, and student portfolio generation.",
    highlights: [
      "Integrated Resume Builder: Students can create and download ATS-friendly PDFs.",
      "Admin Panel: Manages job fairs, internships, and tracks student applications.",
      "Real-time Analytics: Visual insights on placement drives and application status.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Puppeteer (PDF Gen)"],
    liveUrl: "https://trainingandplacementcell.com",
    repoUrl: "",
    media: [
      {
        type: "video",
        src: tpo, // Replace with imported video
        poster: tpo1, // Replace with imported image
        label: "Resume Builder & Job Application Demo",
      },
      {
        type: "image",
        src: tpoImg, // Replace with imported image
        label: "Admin & Job Listing Dashboard",
      },
    ],
  },
  {
    id: "04",
    year: "2024",
    title: "Apsara Cafe Ordering App",
    category: "MERN · FoodTech",
    client: "Apsara Cafe",
    role: "Full Stack Developer",
    summary:
      "A complete food ordering ecosystem featuring a highly interactive UI for customers and a powerful backend for cafe management. Streamlines operations from order placement to revenue tracking.",
    highlights: [
      "Razorpay Payment Gateway: Secure and seamless transaction integration.",
      "Dynamic Menu Management: Admin can create/edit items instantly from the dashboard.",
      "Accurate Sales Analytics: Visual breakdowns of daily revenue and order volume.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://apsara-cafe.vercel.app/",
    repoUrl: "",
    media: [
      {
        type: "video",
        src: apsara, // Replace with imported video
        poster: apsaramain, // Replace with imported image
        label: "Ordering Flow & Admin Demo",
      },
      {
        type: "image",
        src: apsaradash, // Replace with imported image
        label: "Menu & Sales Dashboard",
      },
    ],
  },
  // ... other projects
];

// --- COMPONENT LOGIC ---

function ProjectContentInsideTablet({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // Controls full-screen mode
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoRef = useRef(null);

  const activeMedia = project.media[activeIndex];

  // Reset state when changing media slides
  useEffect(() => {
    setIsExpanded(false);
    setIsVideoLoading(activeMedia.type === 'video'); // Assume video is loading initially
  }, [activeIndex, activeMedia.type]);

  // Handle Expand (Play Video OR Zoom Image)
  const handleExpand = () => {
    setIsExpanded(true);
    if (activeMedia.type === "video" && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Play failed", e));
    }
  };

  // Handle Close (Pause Video & Reset View)
  const handleClose = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    if (activeMedia.type === "video" && videoRef.current) {
      videoRef.current.pause();
      // Optional: don't reset time so they can resume, or reset: videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-[#111] relative overflow-hidden">
      
      {/* LEFT SIDE: Media Area (Becomes Full Screen when isExpanded is true) */}
      <div 
        className={`relative transition-all duration-500 ease-in-out bg-black ${
          isExpanded 
            ? "absolute inset-0 z-50 w-full h-full" 
            : "w-full md:w-1/2 h-64 md:h-full border-r border-white/10"
        }`}
      >
        <div className="h-full w-full relative group">
          
          {/* --- VIDEO LOGIC --- */}
          {activeMedia.type === "video" ? (
            <>
              {/* Spinner: Visible if loading and currently playing/expanded */}
              {isVideoLoading && isExpanded && <Spinner />}
              
              <video
                ref={videoRef}
                src={activeMedia.src}
                poster={activeMedia.poster}
                className={`h-full w-full object-cover transition-opacity duration-300 ${isVideoLoading && isExpanded ? 'opacity-50' : 'opacity-100'}`}
                playsInline
                // Listeners for loading state
                onWaiting={() => setIsVideoLoading(true)}
                onPlaying={() => setIsVideoLoading(false)}
                onCanPlay={() => setIsVideoLoading(false)}
                onEnded={() => setIsExpanded(false)} // Auto close on end?
              />
            </>
          ) : (
             /* --- IMAGE LOGIC --- */
            <img
              src={activeMedia.src}
              /* SEO: Prepending context for Image Search */
              alt={`Soham Dang Portfolio Project: ${activeMedia.label}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          )}

          {/* --- OVERLAY: PLAY / EXPAND BUTTON --- */}
          {/* Only visible if NOT expanded */}
          {!isExpanded && (
            <div 
              onClick={handleExpand}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 cursor-pointer transition-all z-20"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 shadow-xl group-hover:border-emerald-500/50 transition-colors transform group-hover:scale-105">
                 {activeMedia.type === 'video' ? <PlayIcon /> : <MaximizeIcon />}
              </div>
            </div>
          )}

          {/* --- CLOSE BUTTON --- */}
          {/* Only visible if EXPANDED */}
          {isExpanded && (
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-red-600/80 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-all shadow-lg"
            >
              <CloseIcon />
            </button>
          )}

        </div>

        {/* Media Toggles (Thumbnails) - Hidden when expanded */}
        {!isExpanded && project.media.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-2 z-30">
            {project.media.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded border backdrop-blur-md transition-colors ${
                  idx === activeIndex
                    ? "bg-emerald-500/80 border-emerald-500 text-white"
                    : "bg-black/50 border-white/20 text-zinc-300 hover:bg-black/80"
                }`}
              >
                {m.type === "video" ? "Video" : "Img"}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE: Text Info */}
      {/* Hidden when expanded */}
      <div 
        className={`w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col gap-5 overflow-y-auto bg-zinc-900/50 text-left transition-opacity duration-300 ${
          isExpanded ? "opacity-0 pointer-events-none hidden" : "opacity-100"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
           <div className="flex gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg transition-colors"
              >
                Live Site <ExternalIcon />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                GitHub <ExternalIcon />
              </a>
            )}
           </div>
           <span className="text-zinc-500">/</span>
           <span className="text-zinc-400">{project.category}</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h2>
          <p className="mt-1 text-sm font-medium text-emerald-400">
            {project.role} <span className="text-zinc-600">@</span> {project.client}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm text-zinc-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs text-zinc-400 leading-relaxed">
              <span className="mt-1.5 min-h-[4px] min-w-[4px] rounded-full bg-emerald-500" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] text-zinc-400 bg-zinc-800 rounded border border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0f172a] py-20">
      
      {/* --------------------------------------------------
          HIDDEN SEO CONTENT BLOCK
          -------------------------------------------------- */}
      <div style={{
          position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px',
          overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
      }}>
        <h3>Soham Dang - Full Stack Projects & Case Studies</h3>
        <p>Explore the best MERN Stack and 3D Web projects developed by Soham Dang (SD).</p>
        <ul>
          <li><strong>Rohtak Shoe Co:</strong> A premium 3D e-commerce store using React Three Fiber and MERN stack.</li>
          <li><strong>Avani Enterprises ERP:</strong> A complex HR management portal for payroll, attendance, and analytics.</li>
          <li><strong>BMU Placement Cell:</strong> An EdTech platform for university recruitment with automated resume building.</li>
          <li><strong>Apsara Cafe:</strong> A full-stack food ordering app with Razorpay integration and real-time dashboard.</li>
        </ul>
      </div>

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-4xl px-6 md:px-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          04 · Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
          Selected work that{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            actually shipped to users.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
          A mix of internal tools and client work — each project shows real UI,
          behaviour and the stack I used to build it.
        </p>
      </div>

      {/* Projects list */}
      <div className="flex flex-col gap-0">
        {projects.map((project) => (
          <div key={project.id} className="relative z-10">
            <ContainerScroll
              titleComponent={
                <div className="flex flex-col items-center">
                  <span className="text-[100px] md:text-[140px] font-black text-white/5 leading-none select-none">
                    {project.id}
                  </span>
                </div>
              }
            >
              <ProjectContentInsideTablet project={project} />
            </ContainerScroll>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;