import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/mockData';
import resumePDF from '../assets/rashildevops_cv.pdf';
console.log(resumePDF);
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Resume() {
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Rashil_Manandhar_DevOps_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 relative"
    >
      {/* Background glow effects */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-black/[0.05] dark:border-white/[0.05] pb-8">
        <div className="flex flex-col gap-3">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-violet-500/20 bg-black/[0.02] dark:bg-violet-950/20 text-xs font-semibold tracking-wide text-violet-600 dark:text-violet-300 w-fit"
            variants={itemVariants}
          >
            <FileText size={12} />
            Curriculum Vitae
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Experience & Skill Set
          </motion.h1>
        </div>
        <motion.button
          onClick={handleDownload}
          variants={itemVariants}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-md shadow-violet-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer w-fit"
        >
          <Download size={15} />
          Download Resume PDF
        </motion.button>
      </section>

      {/* Experience & Education Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/*  Experience */}
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Briefcase size={20} className="text-violet-500" />
            Learning and experience
          </h2>
          <div className="flex flex-col gap-8 pl-4 border-l border-black/[0.08] dark:border-white/[0.08]">
            {resumeData.experience.map((job) => (
              <div key={job.id} className="relative flex flex-col gap-1.5">
                {/* Bullet */}
                <div className="absolute left-[-21px] top-1.5 h-2.5 w-2.5 rounded-full bg-violet-600 dark:bg-violet-500" />
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">{job.period}</span>
                <h3 className="font-bold text-gray-950 dark:text-white text-base leading-snug">{job.role}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-500">{job.company}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <GraduationCap size={20} className="text-indigo-500" />
            Education
          </h2>
          <div className="flex flex-col gap-8 pl-4 border-l border-black/[0.08] dark:border-white/[0.08]">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="relative flex flex-col gap-1.5">
                {/* Bullet */}
                <div className="absolute left-[-21px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{edu.period}</span>
                <h3 className="font-bold text-gray-950 dark:text-white text-base leading-snug">{edu.degree}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-500">{edu.institution}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Progress Grid */}
      <motion.section variants={itemVariants} className="flex flex-col gap-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Award size={20} className="text-cyan-500" />
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/[0.01] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] p-6 md:p-8 rounded-2xl">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <span>{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.rating}%</span>
              </div>
              <div className="h-2 w-full bg-black/[0.05] dark:bg-white/[0.05] rounded-full overflow-hidden">
                {/* Animating fill bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.rating}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 * index }}
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
