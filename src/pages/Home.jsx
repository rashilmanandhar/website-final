import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Camera, BookOpen, ExternalLink, Code } from 'lucide-react';
import { projectsData, photographyData } from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);
  const featuredPhotos = photographyData.slice(0, 3);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24 relative"
    >
      {/* Dynamic Background glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[5%] left-[-10%] w-[380px] h-[380px] rounded-full bg-violet-600/10 dark:bg-violet-600/8 blur-[120px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-cyan-600/10 dark:bg-cyan-600/8 blur-[120px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[25%] w-[450px] h-[450px] rounded-full bg-indigo-600/8 blur-[150px] pointer-events-none -z-10"
      />

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center max-w-4xl mx-auto gap-8 relative z-10">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-violet-500/20 bg-black/[0.02] dark:bg-violet-950/20 text-xs font-semibold tracking-wide text-violet-600 dark:text-violet-300 shadow-sm"
        >
          <Sparkles size={13} className="text-violet-500 dark:text-violet-400 animate-pulse" />
          Welcome to my digital landscape
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95] text-gray-900 dark:text-white"
        >
          Designing & Coding <br />
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Aspiring DevOps Engineer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light"
        >
          Hi, I'm Rashil. I'm an aspiring DevOps engineer focused on automation, cloud infrastructure, Linux systems, and building modern web experiences. I document my journey through projects, technical blogs, and creative photography.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center items-center mt-2">
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            Explore Projects
            <ArrowRight size={16} />
          </NavLink>
          <NavLink
            to="/contact"
            className="px-7 py-4 font-semibold rounded-xl bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-800 dark:text-gray-200 hover:scale-[1.03] active:scale-95 transition-all"
          >
            Get In Touch
          </NavLink>
        </motion.div>
      </section>

      {/* Grid Quick Navigation Links */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        {[
          {
            title: "Development Portfolio",
            desc: "Interactive React applications, frontend libraries, and visual layouts.",
            icon: <Terminal size={22} className="text-violet-600 dark:text-violet-400" />,
            to: "/projects",
            border: "hover:border-violet-500/30",
            shadow: "hover:shadow-violet-500/5"
          },
          {
            title: "Photography Gallery",
            desc: "Street frames, architecture geometries, and natural light patterns.",
            icon: <Camera size={22} className="text-fuchsia-600 dark:text-fuchsia-400" />,
            to: "/photography",
            border: "hover:border-fuchsia-500/30",
            shadow: "hover:shadow-fuchsia-500/5"
          },
          {
            title: "Technical Writing",
            desc: "Articles describing web architectures, layouts, and compilation engines.",
            icon: <BookOpen size={22} className="text-cyan-600 dark:text-cyan-400" />,
            to: "/blog",
            border: "hover:border-cyan-500/30",
            shadow: "hover:shadow-cyan-500/5"
          }
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={`flex flex-col p-6 rounded-2xl glass-card border border-black/[0.05] dark:border-white/[0.05] ${item.border} ${item.shadow} transition-all duration-500 group`}
          >
            <div className="mb-5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] w-fit">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-1.5">
              {item.title}
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">{item.desc}</p>
          </NavLink>
        ))}
      </motion.section>

      {/* Tech Stack Stats */}
      <motion.section id="tech-stack" variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
        {[
          { label: "Platform", val: "Linux", color: "text-blue-600 dark:text-blue-400", border: "hover:border-blue-500/30" },
          { label: "Containers", val: "Docker", color: "text-amber-500 dark:text-amber-400", border: "hover:border-amber-500/30" },
          { label: "Projects", val: "Homelab", color: "text-cyan-600 dark:text-cyan-400", border: "hover:border-cyan-500/30" },
          { label: "Creative", val: "Photography", color: "text-emerald-600 dark:text-emerald-400", border: "hover:border-emerald-500/30" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, y: -4 }}
            className={`glass-card p-6 rounded-2xl border border-black/[0.05] dark:border-white/[0.05] ${item.border} transition-all duration-300 shadow-sm`}
          >
            <span className="text-xs text-gray-400 dark:text-gray-500 block mb-1.5 font-bold uppercase tracking-wider">{item.label}</span>
            <span className={`text-xl font-extrabold ${item.color}`}>{item.val}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Featured Projects Highlight */}
      <motion.section variants={itemVariants} className="flex flex-col gap-8">
        <div className="flex items-end justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-4">
          <div>
            <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Selected Works</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">Featured Projects</h2>
          </div>
          <NavLink to="/projects" className="text-sm font-bold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1.5">
            View All <ArrowRight size={14} />
          </NavLink>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group rounded-3xl glass-card border border-black/[0.05] dark:border-white/[0.05] overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-violet-600 hover:text-white transition-all transform scale-75 group-hover:scale-100 duration-300"
                  >
                    <Code size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-violet-600 hover:text-white transition-all transform scale-75 group-hover:scale-100 duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-black/[0.03] dark:bg-white/[0.03] text-gray-500 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed font-light">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Photography Gallery */}
      <motion.section variants={itemVariants} className="flex flex-col gap-8">
        <div className="flex items-end justify-between border-b border-black/[0.05] dark:border-white/[0.05] pb-4">
          <div>
            <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">Visual Diary</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">Recent Captures</h2>
          </div>
          <NavLink to="/photography" className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 hover:underline flex items-center gap-1.5">
            View Gallery <ArrowRight size={14} />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-sm cursor-pointer border border-black/[0.05] dark:border-white/[0.05]"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest mb-1">{photo.category}</span>
                <h4 className="text-white text-base font-bold">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
