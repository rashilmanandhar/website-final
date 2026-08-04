// src/pages/About.jsx

import { motion } from 'framer-motion';
import { User, Code, Camera, Laptop, Coffee, Sparkles } from 'lucide-react';
import rashilimage from '../assets/IMG_20231207_145439.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, damping: 14 }
  }
};

export default function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20 relative"
    >
      {/* Background glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] left-[-15%] w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none -z-10"
      />

      {/* Header */}
      <section className="flex flex-col gap-4 text-center sm:text-left">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-violet-500/20 bg-black/[0.02] dark:bg-violet-950/20 text-xs font-semibold tracking-wide text-violet-600 dark:text-violet-300 w-fit mx-auto sm:mx-0 shadow-sm"
        >
          <User size={13} />
          About Me
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          My Story & Technical Journey
        </motion.h1>
      </section>

      {/* Main Story & Profile */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Profile Image & Quick Stats card */}
        <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col gap-6">
          <div className="aspect-[3/5] rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] shadow-sm relative group bg-gray-100 dark:bg-white/[0.02]">
            <img
              src={rashilimage}
              alt="Profile placeholder"
              className="w-full h-full object-cover filter grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
              <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                <Sparkles size={12} className="text-violet-400" />
                DevOps Engineer & Photographer
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-black/[0.0] dark:border-white/[0.06] flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Quick Facts</h3>

            <ul className="text-sm flex flex-col gap-3">
              <li className="flex items-start">
                <span className="w-28 shrink-0 font-semibold text-gray-400 dark:text-gray-500">
                  Based in:
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Kathmandu, NEPAL
                </span>
              </li>

              <li className="flex items-start">
                <span className="w-28 shrink-0 font-semibold text-gray-400 dark:text-gray-500">
                  Primary Role:
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Aspiring DevOps Engineer
                </span>
              </li>

              <li className="flex items-start">
                <span className="w-28 shrink-0 font-semibold text-gray-400 dark:text-gray-500">
                  Focus Areas:
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Linux • Cloud • Automation • Web Technologies
                </span>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Story details */}
        <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Who is Rashil?</h2>
          <p className="font-light">
            I am a technology enthusiast building my journey toward DevOps and cloud engineering. I enjoy working with Linux systems, automation tools, and modern web technologies to create reliable and efficient digital solutions.
          </p>
          <p className="font-light">
            My learning journey focuses on understanding how applications move from development to production from writing code and managing environments to deploying, monitoring, and maintaining systems.
            I work with tools like Linux, Git, Docker, Nginx, and cloud platforms while continuously improving my skills in infrastructure, automation, and deployment workflows.
          </p>
          <p className="font-light">
            Beyond coding, I am an enthusiastic photographer. Street photography teaches me to observe lighting, composition, and human dynamics, which heavily influences how I build spatial layouts and color palettes in web design.
          </p>

          {/* Interests Section */}
          <div className="mt-6 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">What I love doing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Code size={18} className="text-violet-500" />, title: "Building Systems", desc: "Creating reliable environments using Linux, automation and cloud technologies." },
                { icon: <Camera size={18} className="text-indigo-500" />, title: "Automation Workflows", desc: "Learning CI/CD pipelines, deployments, and infrastructure practices." },
                { icon: <Laptop size={18} className="text-cyan-500" />, title: "Exploring Technology", desc: "Experimenting with DevOps tools, servers, networking, and modern development practices." },
                { icon: <Coffee size={18} className="text-amber-500" />, title: "Photography", desc: "Capturing moments, places, and stories through visual creativity." }
              ].map((interest, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-2xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.01] dark:bg-white/[0.01] flex items-start gap-3.5 hover:border-violet-500/25 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">{interest.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{interest.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-light leading-relaxed">{interest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Learning Journey Timeline */}
      <motion.section variants={itemVariants} className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-black/[0.05] dark:border-white/[0.05] pb-4">My Learning Journey</h2>
        <div className="flex flex-col gap-8 pl-5 border-l border-violet-500/20 ml-2.5 relative">
          {[
            {
              year: "2026 - Present",
              title: "DevOps Engineering",
              desc: "Building hands-on experience with Linux administration, Docker containers, Git workflows, CI/CD pipelines, Nginx reverse proxies, cloud fundamentals, and infrastructure automation. Continuously exploring modern DevOps practices and deployment strategies through practical projects and home-lab environments."
            },
            {
              year: "2024 - 2025",
              title: "(MERN Stack) Modern Web Development",
              desc: "Developed responsive web applications using React, Vite, JavaScript, and Tailwind CSS. Focused on component-based architecture, performance optimization, responsive design principles, and creating intuitive user experiences."
            },
            {
              year: "2018 - 2023",
              title: "Technology & Systems Foundation",
              desc: "Established a strong foundation in computer systems, networking fundamentals, programming concepts, version control, operating systems, and software development workflows while exploring various technologies and development environments."
            }
          ].map((step, idx) => (
            <div key={idx} className="relative flex flex-col gap-1.5 group">
              {/* Bullet */}
              <div className="absolute left-[-26.5px] top-1.5 h-3 w-3 rounded-full bg-violet-600 dark:bg-violet-500 border-2 border-white dark:border-[#05060a] group-hover:scale-125 transition-transform duration-300 shadow-sm" />
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400">{step.year}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">{step.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed mt-1 font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}