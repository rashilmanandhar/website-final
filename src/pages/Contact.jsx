import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 relative"
    >
      {/* Background glow effects */}
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <section className="flex flex-col gap-4">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-violet-500/20 bg-black/[0.02] dark:bg-violet-950/20 text-xs font-semibold tracking-wide text-violet-600 dark:text-violet-300 w-fit"
          variants={itemVariants}
        >
          <MessageSquare size={12} />
          Get In Touch
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Let's Start a Conversation
        </motion.h1>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Info Sidebar Cards */}
        <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.01] border border-black/[0.06] dark:border-white/[0.06] flex flex-col gap-6">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Contact Information</h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border border-violet-500/10">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Email Me</span>
                  <a href="mailto:sayamirashil@gmail.com" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    sayamirashil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border border-cyan-500/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-semibold uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.01] border border-black/[0.06] dark:border-white/[0.06] flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Active Hours</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Typically active Monday to Friday from 9:00 AM to 6:00 PM (GMT+5:45). I try to reply to all queries within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 p-8 rounded-2xl bg-white dark:bg-white/[0.01] border border-black/[0.06] dark:border-white/[0.06] shadow-sm relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-3 bg-black/[0.01] dark:bg-black/[0.15] border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-black/[0.08] dark:border-white/[0.08]'
                        }`}
                    />
                    {errors.name && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-3 bg-black/[0.01] dark:bg-black/[0.15] border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-black/[0.08] dark:border-white/[0.08]'
                        }`}
                    />
                    {errors.email && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Proposal"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 bg-black/[0.01] dark:bg-black/[0.15] border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-black/[0.08] dark:border-white/[0.08]'
                      }`}
                  />
                  {errors.subject && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timelines, or thoughts..."
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 bg-black/[0.01] dark:bg-black/[0.15] border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-black/[0.08] dark:border-white/[0.08]'
                      }`}
                  />
                  {errors.message && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-violet-800 disabled:to-indigo-800 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={15} />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                  Thank you for reaching out. Your message has been received, and I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-black/[0.08] dark:border-white/[0.08] rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.div>
  );
}
