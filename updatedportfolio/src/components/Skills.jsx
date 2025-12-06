

// import { useRef } from "react";
// import { MorphingCardStack } from "./ui/MorphingCardStack";
// import { 
//   Database, Layout, Server, Boxes, Terminal, Users, 
//   Code2, Cpu, Globe, GitBranch 
// } from "lucide-react";

// // Mapped data with icons and rich content (JSX)
// const skillsData = [
//   {
//     id: "core",
//     title: "Core Stack",
//     badge: "MERN",
//     icon: <Database className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         {/* 2nd: Items List */}
//         <div className="flex flex-wrap gap-2">
//           {["React", "Node.js", "Express", "MongoDB", "REST APIs"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         {/* 3rd: One line highlight */}
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › End-to-end product delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "frontend",
//     title: "Frontend & UI",
//     badge: "UI / UX",
//     icon: <Layout className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["React Router", "Tailwind CSS", "Framer Motion", "Responsive"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Clean, premium interfaces
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "backend",
//     title: "Backend",
//     badge: "System",
//     icon: <Server className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["Node.js", "Express", "JWT Auth", "MongoDB Aggregations"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Secure, scalable APIs
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "motion",
//     title: "3D & Motion",
//     badge: "Creative",
//     icon: <Boxes className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["GSAP", "Framer Motion", "Three.js", "AI-powered flows"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Delightful motion + real impact
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "devops",
//     title: "DevOps",
//     badge: "Workflow",
//     icon: <GitBranch className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["Git & GitHub", "CI / CD", "VS Code", "Postman"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Fast feedback & delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "soft",
//     title: "Soft Skills",
//     badge: "Leadership",
//     icon: <Users className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["Communication", "Team Leading", "Roadmapping"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/10 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Translating business → tech
//           </p>
//         </div>
//       </div>
//     ),
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden">
      
//       {/* Background Ambience */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/5 blur-[80px]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
//             02 · Expertise
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
//             The stack I use to ship <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-emerald-200 to-cyan-400 bg-clip-text text-transparent">
//               premium products.
//             </span>
//           </h2>
//         </div>

//         {/* The Component - Defaults to Grid as per your layout preference */}
//         <MorphingCardStack 
//           cards={skillsData} 
//           defaultLayout="grid" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { useRef } from "react";
// import { MorphingCardStack } from "./ui/MorphingCardStack"; // Make sure path matches your file structure
// import { 
//   Database, Layout, Server, Boxes, Terminal, Users, 
//   Code2, Cpu, Globe, GitBranch 
// } from "lucide-react";

// // Mapped data
// const skillsData = [
//   {
//     id: "core",
//     title: "Core Stack",
//     badge: "MERN",
//     icon: <Database className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         {/* Keep boxes for 1st card */}
//         <div className="flex flex-wrap gap-2">
//           {["React", "Node.js", "Express", "MongoDB", "REST APIs"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › End-to-end product delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "frontend",
//     title: "Frontend & UI",
//     badge: "UI / UX",
//     icon: <Layout className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["React Router", "Tailwind CSS", "Framer Motion", "Responsive"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Clean, premium interfaces
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "backend",
//     title: "Backend",
//     badge: "System",
//     icon: <Server className="h-5 w-5" />,
//     // --- CHANGE: 3rd card content is now Text instead of Boxes ---
//     description: (
//       <div className="flex flex-col h-full justify-start gap-3">
//         <p className="text-slate-300 leading-relaxed text-sm">
//           Focused on building robust server-side applications using <strong className="text-emerald-400">Node.js</strong> and <strong className="text-emerald-400">Express</strong>.
//         </p>
//         <p className="text-slate-400 text-xs leading-relaxed">
//            Designing scalable REST APIs and managing MongoDB aggregations for high-performance data systems.
//         </p>
//         <div className="mt-auto border-t border-white/5 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Secure, scalable architecture
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "motion",
//     title: "3D & Motion",
//     badge: "Creative",
//     icon: <Boxes className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["GSAP", "Framer Motion", "Three.js", "AI Flows"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Delightful motion + impact
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "devops",
//     title: "DevOps",
//     badge: "Workflow",
//     icon: <GitBranch className="h-5 w-5" />,
//     description: (
//       <div className="flex flex-col h-full justify-between gap-4">
//         <div className="flex flex-wrap gap-2">
//           {["Git & GitHub", "CI / CD", "VS Code", "Postman"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-3">
//           <p className="text-xs font-mono text-emerald-400">
//             › Fast feedback & delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden bg-black">
      
//       {/* Background Ambience (Greenish) */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[80px]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
//             02 · Expertise
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
//             The stack I use to ship <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//               premium products.
//             </span>
//           </h2>
//         </div>

//         {/* The Component - Defaults to Stack now */}
//         <MorphingCardStack 
//           cards={skillsData} 
//           defaultLayout="stack" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { useRef } from "react";
// import { MorphingCardStack } from "./ui/MorphingCardStack";
// import { 
//   Database, Layout, Server, Boxes, Terminal, GitBranch 
// } from "lucide-react";

// // Mapped data
// const skillsData = [
//   {
//     id: "core",
//     title: "Core Stack",
//     badge: "MERN",
//     icon: <Database className="h-6 w-6" />,
//     description: (
//       <div className="flex flex-col h-full justify-between">
//         {/* --- Card 1 Layout: Tags --- */}
//         <div className="flex flex-wrap gap-2 content-start">
//           {["React", "Node.js", "Express", "MongoDB", "REST APIs"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
//               {item}
//             </span>
//           ))}
//         </div>
        
//         {/* Footer Text */}
//         <div className="border-t border-white/5 pt-4 mt-4">
//           <p className="text-xs font-mono font-medium text-emerald-400">
//             › End-to-end product delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "frontend",
//     title: "Frontend & UI",
//     badge: "UI / UX",
//     icon: <Layout className="h-6 w-6" />,
//     description: (
//       <div className="flex flex-col h-full justify-between">
//         {/* --- Card 2 Layout: Tags --- */}
//         <div className="flex flex-wrap gap-2 content-start">
//           {["React Router", "Tailwind CSS", "Framer Motion", "Responsive"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Footer Text */}
//         <div className="border-t border-white/5 pt-4 mt-4">
//           <p className="text-xs font-mono font-medium text-emerald-400">
//             › Clean, premium interfaces
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "backend",
//     title: "Backend",
//     badge: "System",
//     icon: <Server className="h-6 w-6" />,
//     description: (
//       <div className="flex flex-col h-full justify-between">
//         {/* --- Card 3 Layout: Text Paragraphs --- */}
//         <div className="space-y-4">
//           <p className="text-slate-300 text-[13px] leading-relaxed">
//             Focused on building robust server-side applications using <strong className="text-emerald-400 font-semibold">Node.js</strong> and <strong className="text-emerald-400 font-semibold">Express</strong>.
//           </p>
//           <p className="text-slate-400 text-[12px] leading-relaxed">
//             Designing scalable REST APIs and managing MongoDB aggregations for high-performance data systems.
//           </p>
//         </div>

//         {/* Footer Text */}
//         <div className="border-t border-white/5 pt-4 mt-4">
//           <p className="text-xs font-mono font-medium text-emerald-400">
//             › Secure, scalable architecture
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "motion",
//     title: "3D & Motion",
//     badge: "Creative",
//     icon: <Boxes className="h-6 w-6" />,
//     description: (
//       <div className="flex flex-col h-full justify-between">
//         <div className="flex flex-wrap gap-2 content-start">
//           {["GSAP", "Framer Motion", "Three.js", "AI Flows"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-4 mt-4">
//           <p className="text-xs font-mono font-medium text-emerald-400">
//             › Delightful motion + impact
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "devops",
//     title: "DevOps",
//     badge: "Workflow",
//     icon: <GitBranch className="h-6 w-6" />,
//     description: (
//       <div className="flex flex-col h-full justify-between">
//         <div className="flex flex-wrap gap-2 content-start">
//           {["Git & GitHub", "CI / CD", "VS Code", "Postman"].map((item) => (
//             <span key={item} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className="border-t border-white/5 pt-4 mt-4">
//           <p className="text-xs font-mono font-medium text-emerald-400">
//             › Fast feedback & delivery
//           </p>
//         </div>
//       </div>
//     ),
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden bg-black">
      
//       {/* Background Ambience (Greenish) */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[80px]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
//             02 · Expertise
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
//             The stack I use to ship <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//               premium products.
//             </span>
//           </h2>
//         </div>

//         {/* The Component - Defaults to Stack now */}
//         <MorphingCardStack 
//           cards={skillsData} 
//           defaultLayout="stack" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import { MorphingCardStack } from "./ui/MorphingCardStack";
// import { 
//   Database, Layout, Server, Boxes, GitBranch 
// } from "lucide-react";

// // Mapped data
// const skillsData = [
//   {
//     id: "core",
//     title: "Core Stack",
//     badge: "MERN",
//     icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
//     // Used for Stack/Grid
//     tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
//     // Used for List
//     description: "End-to-end product delivery using the full MERN stack ecosystem for scalable web apps.",
//     footer: "End-to-end product delivery",
//   },
//   {
//     id: "frontend",
//     title: "Frontend & UI",
//     badge: "UI / UX",
//     icon: <Layout className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["React Router", "Tailwind CSS", "Framer Motion", "Responsive"],
//     description: "Crafting clean, pixel-perfect interfaces with advanced animations and responsive design patterns.",
//     footer: "Clean, premium interfaces",
//   },
//   {
//     id: "backend",
//     title: "Backend",
//     badge: "System",
//     icon: <Server className="h-5 w-5 md:h-6 md:w-6" />,
//     // --- FIX: Added tags so it renders correctly in Stack/Grid ---
//     tags: ["Node.js", "Express", "MongoDB", "Aggregations", "System Design"],
//     // --- FIX: Description used specifically for List View ---
//     description: (
//       <span>
//         Focused on building robust server-side applications using <strong className="text-emerald-400 font-medium">Node.js</strong> and <strong className="text-emerald-400 font-medium">Express</strong>.
//       </span>
//     ),
//     footer: "Secure, scalable architecture",
//   },
//   {
//     id: "motion",
//     title: "3D & Motion",
//     badge: "Creative",
//     icon: <Boxes className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["GSAP", "Framer Motion", "Three.js", "AI Flows"],
//     description: "Adding life to web applications with high-performance 3D elements and fluid motion effects.",
//     footer: "Delightful motion + impact",
//   },
//   {
//     id: "devops",
//     title: "DevOps",
//     badge: "Workflow",
//     icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["Git & GitHub", "CI / CD", "VS Code", "Postman"],
//     description: "Streamlined development workflows ensuring code quality and fast delivery cycles.",
//     footer: "Fast feedback & delivery",
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden bg-black">
//       {/* Background Ambience */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[80px]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
//             02 · Expertise
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
//             The stack I use to ship <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//               premium products.
//             </span>
//           </h2>
//         </div>

//         {/* The Component */}
//         <MorphingCardStack 
//           cards={skillsData} 
//           defaultLayout="stack" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { MorphingCardStack } from "./ui/MorphingCardStack";
import { 
  Database, Layout, Server, Boxes, GitBranch, Bot
} from "lucide-react";

// Mapped data
const skillsData = [
  {
    id: "core",
    title: "Core Stack",
    badge: "MERN",
    icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
    // Stack/Grid View: Tags
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    // List View: Description
    description: "Building full-stack applications with the MERN stack. utilizing Mongoose for efficient data modeling and Express for robust server-side logic.",
    footer: "Full-Stack MERN Development",
  },
  {
    id: "frontend",
    title: "Frontend & Design",
    badge: "UI / UX",
    icon: <Layout className="h-5 w-5 md:h-6 md:w-6" />,
    tags: ["Tailwind CSS", "Bootstrap", "Figma", "Canva"],
    description: "Translating designs from Figma and Canva into responsive code using Tailwind CSS and Bootstrap for clean, modern interfaces.",
    footer: "Responsive Design Implementation",
  },
  {
    id: "backend",
    title: "Backend & Security",
    badge: "API",
    icon: <Server className="h-5 w-5 md:h-6 md:w-6" />,
    tags: ["REST APIs", "JWT", "Node.js", "Express"],
    // Rich Description for List View
    description: (
      <span>
        Developing secure <strong className="text-emerald-400 font-medium">RESTful APIs</strong> with Node.js. Implementing <strong className="text-emerald-400 font-medium">JWT authentication</strong> for secure user sessions.
      </span>
    ),
    footer: "Secure API Architecture",
  },
  {
    id: "creative",
    title: "Creative & 3D",
    badge: "INTERACTIVE",
    icon: <Boxes className="h-5 w-5 md:h-6 md:w-6" />,
    tags: ["Three.js", "React", "3D Web", "Interactive UI"],
    description: "Integrating 3D elements using Three.js to create immersive and interactive web experiences that stand out.",
    footer: "Immersive Web Experiences",
  },
  {
    id: "deployment",
    title: "Deployment",
    badge: "DEVOPS",
    icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
    tags: ["Git", "Vercel", "Render", "Cloudinary"],
    description: "Managing code versions with Git and deploying applications to Vercel and Render. Handling media assets efficiently via Cloudinary.",
    footer: "Streamlined Deployment Pipelines",
  },
  {
    id: "ai",
    title: "AI & Integrations",
    badge: "MODERN TECH",
    icon: <Bot className="h-5 w-5 md:h-6 md:w-6" />,
    tags: ["Agentic AI", "Payment Integration", "API Integration"],
    description: "Building intelligent workflows with Agentic AI and integrating secure payment gateways into e-commerce applications.",
    footer: "Smart Integrations & AI",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden bg-black">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
            02 · Expertise
          </p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
            The stack I use to ship <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              premium products.
            </span>
          </h2>
        </div>

        {/* The Component */}
        <MorphingCardStack 
          cards={skillsData} 
          defaultLayout="stack" 
        />
      </div>
    </section>
  );
};

export default Skills;