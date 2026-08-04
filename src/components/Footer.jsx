import { NavLink } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.05] dark:border-white/[0.05] bg-gray-50 dark:bg-[#07080c] py-12 text-center text-xs text-gray-500 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Rashil Portfolio
          </span>
          <p>© {currentYear} Rashil. All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <NavLink to="/" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Home</NavLink>
          <NavLink to="/about" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">About</NavLink>
          <NavLink to="/projects" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Projects</NavLink>
          <NavLink to="/photography" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Photography</NavLink>
          <NavLink to="/blog" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Blog</NavLink>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/rashilsayami"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rashil-manandhar-65174a234/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
