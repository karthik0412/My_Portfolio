import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Loader2, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [downloading, setDownloading] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      setStatus("");
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Karthikraja_J_Resume.pdf";
      link.download = "Karthikraja_J_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_cm9djw5",
        "template_ds3c23p",
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        },
        "9oBK8gUMkcFEVKnDQ"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
            budget: "",
            timeline: "",
            service: "",
          });
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        },
        () => {
          setLoading(false);
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient bg-[length:400%_400%]" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's Build Your Dream Website
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From modern portfolios to full-stack solutions, I create scalable
            and visually stunning web experiences tailored to your brand.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 w-full">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold text-white
                         bg-gradient-to-r from-purple-500 to-blue-500
                         shadow-[0_0_25px_rgba(168,85,247,0.8)]
                         hover:shadow-[0_0_45px_rgba(168,85,247,1)]
                         transition-all duration-300 flex items-center justify-center gap-2
                         relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Hire Me Now
              </span>
            </motion.button>

            <motion.button
              onClick={handleDownload}
              disabled={downloading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold text-white
                         bg-gradient-to-r from-blue-500 to-purple-500
                         shadow-[0_0_25px_rgba(98,144,255,0.8)]
                         hover:shadow-[0_0_45px_rgba(98,144,255,1)]
                         transition-all duration-300 flex items-center justify-center gap-2
                         relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                {downloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Resume
                  </>
                )}
              </span>
            </motion.button>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-16 w-full justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Fast Delivery", desc: "On-time project completion.", icon: "⚡" },
              { title: "Custom Design", desc: "Tailored to your brand.", icon: "🎨" },
              { title: "Full Support", desc: "Post-launch assistance.", icon: "🚀" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg text-white
                           hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-start justify-end z-[100] p-4 pr-6 md:pr-10 w-full overflow-y-auto pt-36 md:pt-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 text-black shadow-2xl border border-purple-500/50 ring-1 ring-white/10 backdrop-blur-md flex flex-col max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sticky header */}
              <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-md px-8 pt-6 pb-4 rounded-t-2xl border-b border-white/10">
                <button
                  className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 rounded-full p-2 text-white transition-colors"
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                    Hire Me 🚀
                  </h3>
                  <p className="text-black/80 text-base">
                    Let's discuss your project requirements
                  </p>
                </div>
              </div>

              {/* Scrollable body */}
              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto px-8 py-4 space-y-5 text-left text-black"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                {/* Updated Select */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-5 text-lg rounded-xl border-2 border-gray-600 bg-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none pr-10 transition-all duration-200 min-h-[56px]"
                    required
                  >
                    <option value="" disabled className="text-gray-500 bg-gray-800">
                      Select Service
                    </option>
                    <option value="Web Development" className="text-black">
                      Web Development
                    </option>
                    <option value="UI/UX Design" className="text-black">
                      UI/UX Design
                    </option>
                    <option value="Full-Stack Development" className="text-black">
                      Full-Stack Development
                    </option>
                    <option value="Consultation" className="text-black">
                      Consultation
                    </option>
                  </select>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Budget ($)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      placeholder="e.g. $1000 - $5000"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
 
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      placeholder="e.g. 2 weeks"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                    rows={5}
                    required
                  />
                </div>
 
                <div className="sticky bottom-0 z-10 bg-black/40 backdrop-blur-md -mx-8 px-8 py-4 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-black bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_35px_rgba(168,85,247,1)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Submit Request
                        </>
                      )}
                    </span>
                  </button>
                  {status && (
                    <div className="pt-3">
                      <p
                        className={`text-center text-sm font-medium p-3 rounded-lg ${
                          status.includes("✅")
                            ? "text-green-400 bg-green-400/10 border border-green-400/20"
                            : "text-red-400 bg-red-400/10 border border-red-400/20"
                        }`}
                      >
                        {status}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 12s ease infinite;
        }
        .overflow-y-auto::-webkit-scrollbar { width: 8px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: #1e293b; border-radius: 4px; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background: #7e22ce; border-radius: 4px; }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #8b5cf6; }
      `}</style>
    </section>
  );
};
