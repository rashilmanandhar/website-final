
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Calendar, Clock, X, ArrowRight } from 'lucide-react';
import { blogPostsData } from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const categoryColors = {
  CSS: "bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400",
  Animations: "bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400",
  DevOps: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400",
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [readingPost, setReadingPost] = useState(null);

  const filteredPosts = blogPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 relative"
    >
      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-15%] w-[320px] h-[320px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none -z-10"
      />

      {/* Header */}
      <section className="flex flex-col gap-4">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-violet-500/20 bg-black/[0.02] dark:bg-violet-950/20 text-xs font-semibold tracking-wide text-violet-600 dark:text-violet-300 w-fit shadow-sm"
          variants={itemVariants}
        >
          <BookOpen size={13} />
          Technical Writing
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-none"
          variants={itemVariants}
        >
          Insights & Learnings
        </motion.h1>
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-base font-light"
          variants={itemVariants}
        >
          Articles on frontend engineering, CSS architecture, animation systems, and static deployments.
        </motion.p>
      </section>

      {/* Search Bar */}
      <motion.div
        variants={itemVariants}
        className="relative flex items-center"
      >
        <Search size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by title, topic or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 text-sm bg-white/50 dark:bg-black/[0.15] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors shadow-sm"
        />
      </motion.div>

      {/* Blog list */}
      <motion.section
        layout
        className="flex flex-col gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setReadingPost(post)}
              whileHover={{ scale: 1.01, boxShadow: "0 15px 40px rgba(139, 92, 246, 0.15)" }}
              className="p-7 md:p-8 rounded-3xl bg-white/60 dark:bg-[#1a1d27] border border-black/[0.08] dark:border-white/[0.07] hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] cursor-pointer transition-all duration-300 group shadow-lg"
            >
              <div className="flex flex-wrap items-center gap-y-3 text-sm mb-5">
                <span
                  className={`px-3 py-1 rounded-xl text-xs font-bold ${categoryColors[post.category] || "bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-gray-400"}`}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="flex items-center gap-1 text-sm"><Calendar size={14} /> {post.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="flex items-center gap-1 text-sm"><Clock size={14} /> {post.readingTime}</span>
                </div>
              </div>

              <h2
                className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors leading-snug"
              >
                {post.title}
              </h2>
              <p
                className="text-md text-gray-600 dark:text-gray-300 mt-2 mb-6 leading-relaxed font-normal"
              >
                {post.summary}
              </p>

              <div className="flex items-center gap-1.5 text-base font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition duration-300">
                Continue Reading <ArrowRight size={20} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Placeholder for "Previous Data" / Navigation */}
        <div className="pt-4 md:pt-8 text-center border-t border-black/[0.1] dark:border-white/[0.08]">
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600/10 border border-violet-200 dark:border-violet-700 text-violet-600 dark:text-violet-400 hover:bg-violet-100/30 dark:hover:bg-violet-900/40 rounded-full font-medium transition cursor-pointer shadow-md"
            onClick={() => alert("Navigating to previous or related content...")}
          >
            ← View Previous Insights (Mock Data)
          </motion.button>
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-gray-500"
          >
            <BookOpen size={40} className="text-gray-300 dark:text-gray-700 mx-auto mb-3" />
            <p className="font-semibold text-gray-700 dark:text-gray-300">No articles found</p>
            <p className="text-sm mt-1">Try refining your search keyword.</p>
          </motion.div>
        )}
      </motion.section>

      {/* Article Reading Modal */}
      <AnimatePresence>
        {readingPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setReadingPost(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.93, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 25, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0d0e14] border border-black/[0.08] dark:border-white/[0.06] w-full max-w-3xl rounded-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden cursor-default"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <h1
                  className="text-3xl font-bold text-gray-900 dark:text-white"
                >
                  {readingPost.title}
                </h1>
                <X
                  size={24}
                  onClick={() => setReadingPost(null)}
                  className="cursor-pointer text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition duration-300"
                />
              </div>

              {/* Modal Content */}
              <div
                className="p-6 flex flex-col gap-y-4 overflow-y-auto flex-1 min-h-0"
              >
                <motion.div initial="visible" animate="visible" variants={itemVariants}>
                  <div className="prose dark:prose-invert max-w-none">
                    {readingPost.content.split("\n").map((line, index) => {
                      if (line.startsWith("### ")) {
                        return (
                          <h3
                            key={index}
                            className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white"
                          >
                            {line.replace("### ", "")}
                          </h3>
                        );
                      }

                      if (line.startsWith("- ")) {
                        return (
                          <li
                            key={index}
                            className="ml-5 list-disc text-gray-700 dark:text-gray-300"
                          >
                            {line.replace("- ", "")}
                          </li>
                        );
                      }

                      if (line.trim() === "") return <br key={index} />;

                      return (
                        <p
                          key={index}
                          className="leading-8 text-gray-700 dark:text-gray-300"
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Add additional content here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}