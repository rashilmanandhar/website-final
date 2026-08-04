import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ZoomIn, X } from 'lucide-react';
import { photographyData } from '../data/mockData';

const categories = ["All", "People", "Street", "Architecture", "Animal", "landscape", "Food"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const photoVariants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
  exit: {
    scale: 0.92,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredPhotos = photographyData.filter((photo) =>
    selectedCategory === "All" || photo.category === selectedCategory
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 relative"
    >
      {/* Animated glow orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-fuchsia-600/10 blur-[130px] pointer-events-none -z-10"
      />

      {/* Header */}
      <section className="flex flex-col gap-4">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-fuchsia-500/20 bg-black/[0.02] dark:bg-fuchsia-950/20 text-xs font-semibold tracking-wide text-fuchsia-600 dark:text-fuchsia-300 w-fit shadow-sm"
          variants={photoVariants}
        >
          <Camera size={13} />
          Photography
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-none"
          variants={photoVariants}
        >
          Captured Perspectives
        </motion.h1>
        <motion.p
          className="text-gray-500 dark:text-gray-400 max-w-xl text-base font-light"
          variants={photoVariants}
        >
          Light chasing through city frames and natural terrain. Click any photo for a full-screen view.
        </motion.p>
      </section>

      {/* Filter Pills */}
      <motion.section
        variants={photoVariants}
        className="flex flex-wrap gap-1.5 pb-4 border-b border-black/[0.05] dark:border-white/[0.05] relative z-10"
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-5 py-2 text-xs font-bold tracking-wide rounded-xl transition-colors duration-300 ${isActive
                ? "text-white dark:text-gray-950"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              {isActive && (
                <motion.span
                  layoutId="photoFilterPill"
                  className="absolute inset-0 bg-gray-900 dark:bg-white rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          );
        })}
      </motion.section>

      {/* Photo Grid - Masonry style */}
      <motion.section layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-black/[0.05] dark:border-white/[0.05] shadow-sm hover:shadow-[0_0_40px_rgba(217,70,239,0.1)] transition-all duration-500 break-inside-avoid"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/25 transition-colors">
                    <ZoomIn size={16} />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-300 block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-white text-base font-bold leading-tight">{photo.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10 z-10"
            >
              <X size={20} />
            </button>

            {/* Lightbox Card */}
            <motion.div
              initial={{ scale: 0.88, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center gap-5 cursor-default"
            >
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[78vh] w-auto max-w-full rounded-3xl object-contain border border-white/[0.08] shadow-2xl"
              />
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-fuchsia-400 block mb-1">
                  {activePhoto.category}
                </span>
                <h2 className="text-white text-xl font-bold">{activePhoto.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
