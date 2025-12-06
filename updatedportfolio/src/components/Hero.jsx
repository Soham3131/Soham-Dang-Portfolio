

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// // Make sure this file name matches exactly what is in your folder (case sensitive)
// import { ShaderPlane } from "./ui/BackgroundPaperShaders"; 
// import avaniLogo from "../assets/avani.jpg";

// // Wrapper component for the shader background
// function ShaderBackground() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 50 }}
//       style={{
//         position: "absolute",
//         inset: 0,
//         pointerEvents: "none", // Allows clicking through the canvas
//       }}
//       dpr={[1, 2]} // Optimizes for different screens
//     >
//       {/* NOTE: If it is still too dark, change these hex codes 
//          to bright colors (e.g., color1="#ff0000") to test visibility.
//       */}
//       <ShaderPlane 
//         position={[0, 0, 0]} 
//         color1="#1a1a1a" // Dark Grey
//         color2="#2f2f2f" // Slightly lighter Grey
//       />
//     </Canvas>
//   );
// }

// const Hero = () => {
//   // 3D tilt motion for the right card
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-40, 40], [10, -10]);
//   const rotateY = useTransform(x, [-40, 40], [-10, 10]);

//   const handleTilt = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const posX = e.clientX - (rect.left + rect.width / 2);
//     const posY = e.clientY - (rect.top + rect.height / 2);
//     x.set(posX / 6);
//     y.set(posY / 6);
//   };

//   const resetTilt = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <section
//       id="hero"
//       // FIX 1: Removed 'bg-black' so the background is visible
//       className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
//     >
//       {/* Shader Background Layer */}
//       {/* FIX 2: Changed from -z-10 to z-0 to ensure it's not hidden behind the root */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <ShaderBackground />
//       </div>

//       {/* Subtle gradient overlay for depth (z-10) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-10" />

//       {/* Main Content Layer (z-20) */}
//       <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
        
//         {/* LEFT: Intro / text */}
//         <div className="flex-1 space-y-6">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-300 backdrop-blur-xl"
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
//             Full Stack Team Lead · MERN · 3D · AI
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.05, duration: 0.45 }}
//             className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl"
//           >
//             I build{" "}
//             <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
//               premium, scalable
//             </span>{" "}
//             web experiences for modern brands.
//           </motion.h1>

//           {/* Sub text */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.4 }}
//             className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
//           >
//             I&apos;m <span className="font-medium text-slate-50">Soham Dang</span>,
//             Full Stack Developer & Team Lead at{" "}
//             <span className="font-medium text-slate-50">Avani Enterprises</span>.
//             I design, architect and ship MERN applications, 3D experiences and
//             AI-powered workflows that improve performance, reduce manual work,
//             and actually move business metrics.
//           </motion.p>

//           {/* CTA buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.16, duration: 0.4 }}
//             className="flex flex-wrap items-center gap-3"
//           >
//             <button
//               onClick={() =>
//                 document
//                   .querySelector("#projects")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               data-cursor="hover"
//               className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-50 backdrop-blur-xl"
//             >
//               <span className="relative z-10">View Selected Projects</span>
//               <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             </button>

//             <button
//               onClick={() =>
//                 document
//                   .querySelector("#contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               data-cursor="hover"
//               className="rounded-2xl border border-white/15 bg-black/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 hover:border-white/40 hover:text-slate-50 backdrop-blur-xl"
//             >
//               Let&apos;s Talk
//             </button>
//           </motion.div>

//           {/* Quick stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.4 }}
//             className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md"
//           >
//             <div className="space-y-1">
//               <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                 Core Stack
//               </p>
//               <p className="text-slate-100">
//                 React · Node.js · Express · MongoDB · Tailwind · REST APIs
//               </p>
//             </div>
//             <div className="space-y-1">
//               <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                 What I love doing
//               </p>
//               <p className="text-slate-100">
//                 Client-facing problem solving, 3D & motion, agentic AI flows.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT: 3D floating stats card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30, scale: 0.96 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
//           className="relative mt-4 flex w-full flex-1 justify-center md:mt-0"
//           onMouseMove={handleTilt}
//           onMouseLeave={resetTilt}
//         >
//           {/* subtle ring behind card */}
//           <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//             <div className="h-56 w-56 rounded-full border border-white/10 bg-gradient-to-tr from-slate-200/20 via-transparent to-transparent blur-2xl" />
//           </div>

//           <motion.div
//             style={{
//               x,
//               y,
//               rotateX,
//               rotateY,
//               transformStyle: "preserve-3d",
//               transformPerspective: 900,
//             }}
//             className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-black/80 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl"
//           >
//             {/* Top row: role + logo */}
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                   Currently
//                 </p>
//                 <p className="text-sm text-slate-50">
//                   Full Stack Team Lead · Avani Enterprises
//                 </p>
//                 <p className="mt-1 text-[11px] text-slate-300">
//                   Leading a dev team, owning client calls & delivery.
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/80 border border-white/15 overflow-hidden">
//                 <img
//                   src={avaniLogo}
//                   alt="Avani Enterprises"
//                   className="h-8 w-8 object-contain opacity-90"
//                 />
//               </div>
//             </div>

//             {/* Metrics */}
//             <div className="space-y-3 text-xs text-slate-300">
//               <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
//                 <span>Products & platforms shipped</span>
//                 <span className="text-slate-50 font-semibold">10+ </span>
//               </div>
//               <div className="flex items-center justify-between rounded-2xl bg-transparent px-3 py-2">
//                 <span>Live users</span>
//                 <span className="text-slate-50 font-semibold">
//                   1,500+ / month
//                 </span>
//               </div>
//               <div className="flex items-center justify-between rounded-2xl bg-transparent px-3 py-2">
//                 <span>Performance & efficiency wins</span>
//                 <span className="text-slate-50 text-[11px] text-right">
//                   up to 40% faster · 15+ hrs/week saved
//                 </span>
//               </div>
//             </div>

//             {/* Footer row */}
//             <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400">
//               <span>Scroll to see experience & projects</span>
//               <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em]">
//                 Portfolio · SD
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// // Make sure this file name matches exactly what is in your folder (case sensitive)
// import { ShaderPlane } from "./ui/BackgroundPaperShaders"; 
// import avaniLogo from "../assets/avani.jpg";

// // Wrapper component for the shader background
// function ShaderBackground() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 50 }}
//       style={{
//         position: "absolute",
//         inset: 0,
//         pointerEvents: "none", // Allows clicking through the canvas
//       }}
//       dpr={[1, 2]} // Optimizes for different screens
//     >
//       <ShaderPlane 
//         position={[0, 0, 0]} 
//         color1="#1a1a1a" // Dark Grey
//         color2="#2f2f2f" // Slightly lighter Grey
//       />
//     </Canvas>
//   );
// }

// const Hero = () => {
//   // 3D tilt motion for the right card
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-40, 40], [10, -10]);
//   const rotateY = useTransform(x, [-40, 40], [-10, 10]);

//   const handleTilt = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const posX = e.clientX - (rect.left + rect.width / 2);
//     const posY = e.clientY - (rect.top + rect.height / 2);
//     x.set(posX / 6);
//     y.set(posY / 6);
//   };

//   const resetTilt = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
//     >
//       {/* Shader Background Layer */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <ShaderBackground />
//       </div>

//       {/* Subtle gradient overlay for depth (z-10) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-10" />

//       {/* Main Content Layer (z-20) */}
//       <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
        
//         {/* LEFT: Intro / text */}
//         <div className="flex-1 space-y-6">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-300 backdrop-blur-xl"
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
//             Full Stack Team Lead · MERN · 3D · AI
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.05, duration: 0.45 }}
//             className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl"
//           >
//             I build{" "}
//             {/* UPDATED: Uses the Emerald -> Cyan gradient */}
//             <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//               premium, scalable
//             </span>{" "}
//             web experiences for modern brands.
//           </motion.h1>

//           {/* Sub text */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.4 }}
//             className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
//           >
//             I&apos;m <span className="font-medium text-slate-50">Soham Dang</span>,
//             Full Stack Developer & Team Lead at{" "}
//             <span className="font-medium text-slate-50">Avani Enterprises</span>.
//             I design, architect and ship MERN applications, 3D experiences and
//             AI-powered workflows that improve performance, reduce manual work,
//             and actually move business metrics.
//           </motion.p>

//           {/* CTA buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.16, duration: 0.4 }}
//             className="flex flex-wrap items-center gap-3"
//           >
//             <button
//               onClick={() =>
//                 document
//                   .querySelector("#projects")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               data-cursor="hover"
//               className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-50 backdrop-blur-xl"
//             >
//               <span className="relative z-10">View Selected Projects</span>
//               <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             </button>

//             <button
//               onClick={() =>
//                 document
//                   .querySelector("#contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               data-cursor="hover"
//               className="rounded-2xl border border-white/15 bg-black/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 hover:border-white/40 hover:text-slate-50 backdrop-blur-xl"
//             >
//               Let&apos;s Talk
//             </button>
//           </motion.div>

//           {/* Quick stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.4 }}
//             className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md"
//           >
//             <div className="space-y-1">
//               <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                 Core Stack
//               </p>
//               <p className="text-slate-100">
//                 React · Node.js · Express · MongoDB · Tailwind · REST APIs
//               </p>
//             </div>
//             <div className="space-y-1">
//               <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                 What I love doing
//               </p>
//               <p className="text-slate-100">
//                 Client-facing problem solving, 3D & motion, agentic AI flows.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT: 3D floating stats card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30, scale: 0.96 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
//           className="relative mt-4 flex w-full flex-1 justify-center md:mt-0"
//           onMouseMove={handleTilt}
//           onMouseLeave={resetTilt}
//         >
//           {/* subtle ring behind card */}
//           <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//             <div className="h-56 w-56 rounded-full border border-white/10 bg-gradient-to-tr from-slate-200/20 via-transparent to-transparent blur-2xl" />
//           </div>

//           <motion.div
//             style={{
//               x,
//               y,
//               rotateX,
//               rotateY,
//               transformStyle: "preserve-3d",
//               transformPerspective: 900,
//             }}
//             className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-black/80 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl"
//           >
//             {/* Top row: role + logo */}
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
//                   Currently
//                 </p>
//                 <p className="text-sm text-slate-50">
//                   Full Stack Team Lead · Avani Enterprises
//                 </p>
//                 <p className="mt-1 text-[11px] text-slate-300">
//                   Leading a dev team, owning client calls & delivery.
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/80 border border-white/15 overflow-hidden">
//                 <img
//                   src={avaniLogo}
//                   alt="Avani Enterprises"
//                   className="h-8 w-8 object-contain opacity-90"
//                 />
//               </div>
//             </div>

//             {/* Metrics */}
//             <div className="space-y-3 text-xs text-slate-300">
//               <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
//                 <span>Products & platforms shipped</span>
//                 <span className="text-slate-50 font-semibold">10+ </span>
//               </div>
//               <div className="flex items-center justify-between rounded-2xl bg-transparent px-3 py-2">
//                 <span>Live users</span>
//                 <span className="text-slate-50 font-semibold">
//                   1,500+ / month
//                 </span>
//               </div>
//               <div className="flex items-center justify-between rounded-2xl bg-transparent px-3 py-2">
//                 <span>Performance & efficiency wins</span>
//                 <span className="text-slate-50 text-[11px] text-right">
//                   up to 40% faster · 15+ hrs/week saved
//                 </span>
//               </div>
//             </div>

//             {/* Footer row */}
//             <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400">
//               <span>Scroll to see experience & projects</span>
//               <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em]">
//                 Portfolio <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">·</span> SD
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ShaderPlane } from "./ui/BackgroundPaperShaders";
import avaniLogo from "../assets/avani.jpg";

// Wrapper component for the shader background
function ShaderBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      dpr={[1, 2]}
    >
      <ShaderPlane
        position={[0, 0, 0]}
        // Emerald / teal paper base – animated by the shader
        color1="#022c22"
        color2="#020617"
      />
    </Canvas>
  );
}

const Hero = () => {
  // 3D tilt motion for the right card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);
const handleTilt = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const posX = e.clientX - (rect.left + rect.width / 2);
  const posY = e.clientY - (rect.top + rect.height / 2);
  x.set(posX / 6);
  y.set(posY / 6);
};

const resetTilt = () => {
  x.set(0);
  y.set(0);
};

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Shader Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ShaderBackground />
      </div>

      {/* Overlay (let the fluid paper breathe – a bit lighter) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.16),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.9))]" />

      {/* Main Content Layer */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
        {/* LEFT: Intro / text */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-200 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
            Full Stack Team Lead · MERN · 3D · AI
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-cyan-400 bg-clip-text text-transparent">
              premium, scalable
            </span>{" "}
            web experiences for modern brands.
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            I&apos;m <span className="font-medium text-slate-50">Soham Dang</span>,
            Full Stack Developer & Team Lead at{" "}
            <span className="font-medium text-slate-50">Avani Enterprises</span>.
            I design, architect and ship MERN applications, 3D experiences and
            AI-powered workflows that improve performance, reduce manual work,
            and actually move business metrics.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-cursor="hover"
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/60 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-cyan-400/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-50 backdrop-blur-xl"
            >
              <span className="relative z-10">View Selected Projects</span>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-cursor="hover"
              className="rounded-2xl border border-white/15 bg-black/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 hover:border-emerald-400/60 hover:text-slate-50 backdrop-blur-xl"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md"
          >
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Core Stack
              </p>
              <p className="text-slate-100">
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  React · Node.js · Express · MongoDB
                </span>{" "}
                · Tailwind · REST APIs
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                What I love doing
              </p>
              <p className="text-slate-100">
                Client-facing problem solving,{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  3D & motion
                </span>
                , agentic AI flows.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: 3D floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          className="relative mt-4 flex w-full flex-1 justify-center md:mt-0"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          {/* Gradient ring behind card */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
            <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.4),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.45),transparent_55%)] blur-3xl opacity-80" />
          </div>

          <motion.div
            style={{
              x,
              y,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 900,
            }}
            className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-emerald-400/40 via-black/90 to-cyan-500/40 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            {/* Inner card */}
            <div className="rounded-[1.4rem] border border-white/15 bg-black/85 p-5">
              {/* Top row: role + logo */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Currently
                  </p>
                  <p className="text-sm text-slate-50">
                    Full Stack Team Lead · Avani Enterprises
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Leading a dev team, owning client calls & delivery.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/80 border border-emerald-400/40 overflow-hidden">
                  <img
                    src={avaniLogo}
                    alt="Avani Enterprises"
                    className="h-8 w-8 object-contain opacity-90"
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                  <span>Products & platforms shipped</span>
                  <span className="font-semibold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    10+
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl px-3 py-2">
                  <span>Live users</span>
                  <span className="font-semibold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    1,500+ / month
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl px-3 py-2">
                  <span>Performance & efficiency wins</span>
                  <span className="text-[11px] text-right bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    up to 40% faster · 15+ hrs/week saved
                  </span>
                </div>
              </div>

              {/* Footer row */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400">
                <span>Scroll to see experience & projects</span>
                <span className="rounded-full border border-emerald-400/50 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] bg-black/60">
                  Portfolio · SD
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
