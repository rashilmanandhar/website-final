import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Search, ExternalLink, Filter, Code } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Github = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories = ["All", "Web App", "Devops", "Self-Hosting", "Automation", "Other"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 relative"
    >
      {/* Background glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none -z-10"
      />

      {/* Header */}
      <section className="flex flex-col gap-4">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-indigo-500/20 bg-black/[0.02] dark:bg-indigo-950/20 text-xs font-semibold tracking-wide text-indigo-600 dark:text-indigo-300 w-fit shadow-sm"
          variants={cardVariants}
        >
          <Folder size={13} />
          Projects
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-none"
          variants={cardVariants}
        >
          My Creations & Coding Projects
        </motion.h1>
        <motion.p
          className="text-gray-500 dark:text-gray-400 max-w-2xl text-base font-light"
          variants={cardVariants}
        >
          A catalog of web platforms, design files, and tooling projects. Switch filters or input keywords to filter the stack.
        </motion.p>
      </section>

      {/* Search & Filter Controls */}
      <motion.section
        variants={cardVariants}
        className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.02] dark:bg-white/[0.01] border border-black/[0.06] dark:border-white/[0.06] p-4 rounded-3xl backdrop-blur-md shadow-sm"
      >
        {/* Category Pills with Sliding Selector */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto relative z-10">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-xs font-bold tracking-wide rounded-xl transition-colors duration-300 ${isActive
                  ? "text-white dark:text-gray-950"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-gray-900 dark:bg-white rounded-xl -z-10 shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 flex items-center">
          <Search size={16} className="absolute left-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search stack, tag, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-sm bg-white/50 dark:bg-black/[0.15] border border-black/[0.08] dark:border-white/[0.08] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors shadow-sm"
          />
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-3xl glass-card border border-black/[0.05] dark:border-white/[0.05] overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] transition-all duration-500 group"
            >
              {/* Card Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gray-900/80 dark:bg-[#05060a]/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-2.5 py-1.5 rounded-lg text-white border border-white/[0.08] shadow-sm">
                  {project.category}
                </div>

                {/* Visual hover layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-full bg-white text-gray-900 hover:bg-violet-600 hover:text-white transition-all transform scale-75 group-hover:scale-100 duration-300"
                  >
                    <Code size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-full bg-white text-gray-900 hover:bg-violet-600 hover:text-white transition-all transform scale-75 group-hover:scale-100 duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow gap-4 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">{project.description}</p>
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/[0.03] dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 border border-black/[0.02] dark:border-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-black/[0.05] dark:border-white/[0.05] pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Github size={13} />
                      Source Code
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-16 text-center text-gray-500 flex flex-col items-center gap-2"
          >
            <Filter size={32} className="text-gray-400 mb-2" />
            <p className="font-semibold text-gray-700 dark:text-gray-300">No projects found</p>
            <p className="text-sm">Try broadening your search query or switching filters.</p>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  );
}
