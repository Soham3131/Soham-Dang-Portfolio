
// import profileImg from "../assets/avani.jpg"; // your avatar image (top-left)
// import cvFile from "../assets/resume.pdf"; // your CV file to download

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Github, Linkedin, Instagram, Download, Send, User, MessageSquare } from "lucide-react";



// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState(null);

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 1. Direct Email Link (Gmail Autofill)
//   const handleDirectEmail = () => {
//     const subject = encodeURIComponent("Project Inquiry / Collaboration");
//     const body = encodeURIComponent("Hi Soham,\n\nI came across your portfolio and would like to discuss...");
//     window.location.href = `mailto:Sohamdang0@gmail.com?subject=${subject}&body=${body}`;
//   };

//   // 2. Form Submission (Using Web3Forms - No Backend Required)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // --- HOW TO MAKE THIS WORK ---
//     // 1. Go to https://web3forms.com/
//     // 2. Enter your email (Sohamdang0@gmail.com) to get an Access Key.
//     // 3. Replace 'YOUR_ACCESS_KEY_HERE' below with the key you receive.
    
//     const object = {
//       ...formData,
//       access_key: "YOUR_ACCESS_KEY_HERE", // <--- PASTE YOUR KEY HERE
//     };

//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });
//       const result = await res.json();

//       if (result.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       console.log(error);
//       setStatus("error");
//     } finally {
//       setIsSubmitting(false);
//       // Reset status after 5 seconds
//       setTimeout(() => setStatus(null), 5000);
//     }
//   };

//   return (
//     <section id="contact" className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center bg-[#020617]">
//       {/* Background Ambience */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
//         <div className="absolute top-20 left-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
//       </div>

//       <div className="mx-auto max-w-6xl w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
//           {/* LEFT COLUMN: Profile & Info */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col gap-8 order-2 lg:order-1"
//           >
//             {/* Header Text */}
//             <div className="space-y-4">
//               <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
//                 07 · Contact
//               </p>
//               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 Let’s build something <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
//                   legendary together.
//                 </span>
//               </h2>
//               <p className="text-slate-400 text-lg leading-relaxed max-w-md">
//                 Whether you have a project in mind, a question, or just want to say hi, I’m always open to discussing new opportunities.
//               </p>
//             </div>

//             {/* Profile Card */}
//             <div className="relative group w-fit">
//               <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30 blur transition duration-500 group-hover:opacity-60" />
//               <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
//                 {/* Placeholder Image - Ensure you import yours */}
//                 <img 
//                   src={profileImg} 
//                   alt="Soham Dang" 
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                 />
//               </div>
//               <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" title="Available for work" />
//             </div>

//             {/* Contact Details & Socials */}
//             <div className="flex flex-col gap-6">
              
//               {/* Direct Email Button */}
//               <button 
//                 onClick={handleDirectEmail}
//                 className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-emerald-500/30 text-left w-full max-w-md"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Drop an email</p>
//                   <p className="text-slate-100 font-medium group-hover:text-emerald-300 transition-colors">Sohamdang0@gmail.com</p>
//                 </div>
//               </button>

//               {/* Social Row */}
//               <div className="flex items-center gap-4">
//                 <SocialLink href="https://github.com/Soham3131" icon={<Github className="h-5 w-5" />} label="GitHub" />
//                 <SocialLink href="https://www.linkedin.com/in/soham-dang-9ba897215/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
//                 <SocialLink href="https://www.instagram.com/soham_.31/#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
//               </div>

//               {/* Download CV */}
//               <a 
//                 href={cvFile} 
//                 download="Soham_Dang_CV"
//                 className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-emerald-400 transition-colors mt-2"
//               >
//                 <Download className="h-4 w-4" />
//                 Download CV / Resume
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="order-1 lg:order-2"
//           >
//             <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
//               <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name Input */}
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Name</label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your Name"
//                       className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
//                     />
//                   </div>
//                 </div>

//                 {/* Email Input */}
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email</label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Your Email"
//                       className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
//                     />
//                   </div>
//                 </div>

//                 {/* Message Input */}
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
//                   <div className="relative">
//                     <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell me about your project..."
//                       className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
//                 >
//                   <div className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-8 py-3 transition-all duration-300 group-hover:bg-opacity-0">
//                     <span className="font-bold text-white">
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                     </span>
//                     {!isSubmitting && <Send className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />}
//                   </div>
//                 </button>

//                 {/* Status Messages */}
//                 {status === "success" && (
//                   <p className="text-center text-sm font-medium text-emerald-400 animate-in fade-in slide-in-from-bottom-2">
//                     Message sent successfully! I'll get back to you soon.
//                   </p>
//                 )}
//                 {status === "error" && (
//                   <p className="text-center text-sm font-medium text-red-400 animate-in fade-in slide-in-from-bottom-2">
//                     Something went wrong. Please try emailing me directly.
//                   </p>
//                 )}
//               </form>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // Helper for Social Links
// const SocialLink = ({ href, icon, label }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
//       aria-label={label}
//     >
//       {icon}
//     </a>
//   );
// };

// export default Contact;

// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

// Update these imports to match your assets
import profileImg from "../assets/avani.jpg"; // avatar image
import cvFile from "../assets/resume.pdf"; // CV/resume file

// OPTIONAL: Add your web3forms access key to send submissions without a custom backend.
// If you don't want this, leave it as an empty string and the form will open a pre-filled mail client.
const WEB3FORMS_ACCESS_KEY = ""; // <-- paste your key here to enable serverless delivery

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hp: "", // honeypot field (should remain empty)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  // Open Gmail compose in new tab (prefilled). If blocked/fails, fallback to mailto.
  function openGmailCompose({ to, subject, body }) {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const w = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!w) {
      // fallback to mailto
      window.location.href = `mailto:${encodeURIComponent(
        to
      )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  // Quick direct email button (opens compose)
  const handleDirectEmail = () => {
    const to = "Sohamdang0@gmail.com";
    const subject = "Hello Soham — quick chat";
    const body = [
      "Hi Soham,",
      "",
      "I found your portfolio and would like to talk about...",
      "",
      "Regards,",
      "[Your name]",
    ].join("\n");
    openGmailCompose({ to, subject, body });
  };

  // Main submit: if WEB3FORMS_ACCESS_KEY is set, post to web3forms; otherwise open compose so user sends from their email.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill name, email and message." });
      window.setTimeout(() => setStatus(null), 4000);
      return;
    }

    // honeypot anti-bot
    if (formData.hp) {
      // likely a bot — silently ignore
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const subject =
      formData.subject?.trim() || `Portfolio message from ${formData.name}`;
    const body = [
      `Hi Soham,`,
      ``,
      `You received a message via the portfolio contact form:`,
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      ``,
      `Message:`,
      `${formData.message}`,
      ``,
      `---`,
      `This message was initiated from the portfolio (client-side).`,
    ].join("\n");

    // if the user configured Web3Forms, send to that API (serverless)
    if (WEB3FORMS_ACCESS_KEY) {
      try {
        const payload = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          // honeypot and extra metadata
          hp: formData.hp,
          source: "portfolio-contact",
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (json.success) {
          setStatus({ type: "success", text: "Message sent — thanks! I'll reply soon." });
          setFormData({ name: "", email: "", message: "", hp: "" });
        } else {
          console.error("web3forms error:", json);
          setStatus({
            type: "error",
            text: "Could not send (Web3Forms). Opening your email client as fallback...",
          });
          // fallback to open compose so the visitor can send
          openGmailCompose({ to: "Sohamdang0@gmail.com", subject, body });
        }
      } catch (err) {
        console.error(err);
        setStatus({
          type: "error",
          text: "Network error. Opening your email client as fallback...",
        });
        openGmailCompose({ to: "Sohamdang0@gmail.com", subject, body });
      } finally {
        setIsSubmitting(false);
        window.setTimeout(() => setStatus(null), 5000);
      }
    } else {
      // no serverless configured — open compose so visitor sends from their mail client
      openGmailCompose({ to: "Sohamdang0@gmail.com", subject, body });
      setIsSubmitting(false);
      setStatus({
        type: "success",
        text:
          "A compose window has been opened in your mail client. Press Send to deliver the message (no backend configured).",
      });
      setFormData({ name: "", email: "", message: "", hp: "" });
      window.setTimeout(() => setStatus(null), 7000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden"
    >
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-emerald-500/6 blur-[120px]" />
        <div className="absolute top-14 left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/6 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: intro, avatar, socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                07 · Contact
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                Let’s build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  legendary.
                </span>
              </h2>
              <p className="mt-4 text-slate-400 text-lg max-w-md">
                If you have a project, an opportunity or a question — reach out.
                Email is fastest. You can also download my CV or connect on
                socials below.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {/* Avatar card */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400/10 to-cyan-300/8 opacity-40 blur-sm transition-all group-hover:opacity-80" />
                <div className="relative overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 border border-white/8 bg-slate-900">
                  <img
                    src={profileImg}
                    alt="Soham Dang"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-slate-900 animate-pulse" title="Available" />
              </div>

              <div>
                <p className="text-lg font-semibold text-slate-100">Soham Dang</p>
                <p className="text-sm text-slate-400">Full Stack Web Developer</p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={handleDirectEmail}
                    className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-black/50 px-3 py-2 text-sm text-slate-100 hover:bg-white/5 transition-all"
                    aria-label="Email Soham"
                    title="Open a compose in Gmail / mail client"
                  >
                    <Mail className="h-4 w-4 text-emerald-300" />
                    Email
                  </button>

                  <a
                    href={cvFile}
                    download="Soham_Dang_CV"
                    className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-black/50 px-3 py-2 text-sm text-slate-100 hover:bg-white/5 transition-all"
                  >
                    <Download className="h-4 w-4 text-slate-200" />
                    Download CV
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <SocialLink href="https://github.com/Soham3131" label="GitHub" icon={<Github className="h-5 w-5" />} />
                  <SocialLink href="https://www.linkedin.com/in/soham-dang-9ba897215/" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
                  <SocialLink href="https://www.instagram.com/soham_.31/#" label="Instagram" icon={<Instagram className="h-5 w-5" />} />
                </div>
              </div>
            </div>

            <div className="max-w-lg text-sm text-slate-400">
              <strong>Note:</strong> The contact form either sends via the serverless Web3Forms service (if you paste an access key at the top of this file), or will open your email client with a prefilled message so the visitor sends the message directly (no backend).
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl border border-white/8 bg-white/5 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* honeypot */}
                <label style={{ display: "none" }}>
                  Keep this empty
                  <input name="hp" value={formData.hp} onChange={handleChange} autoComplete="off" />
                </label>

                <div>
                  <label htmlFor="name" className="text-sm text-slate-300 block mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-slate-300 block mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-slate-300 block mb-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full rounded-xl bg-black/40 border border-white/8 px-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow hover:brightness-95 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-4 w-4 text-black" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ name: "", email: "", message: "", hp: "" })}
                    className="rounded-lg border border-white/8 bg-black/30 px-4 py-2 text-sm text-slate-200 hover:bg-white/4"
                  >
                    Reset
                  </button>
                </div>

                {status && (
                  <div
                    className={`mt-2 p-3 rounded-md text-sm ${
                      status.type === "success" ? "bg-emerald-900/40 text-emerald-200" : "bg-rose-900/40 text-rose-200"
                    }`}
                  >
                    {status.text}
                  </div>
                )}
              </form>
            </div>

            {/* small caption about delivery */}
            <p className="mt-4 text-xs text-slate-400 max-w-md">
              Privacy: messages sent via the built-in email client are sent from the visitor's email. If Web3Forms is enabled (paste key at top of file), submissions are delivered serverlessly to your email.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Small social icon pill */
const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/8 bg-black/30 p-2 text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300 transition"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Contact;
