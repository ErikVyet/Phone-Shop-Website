import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HeroSection() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === "dark";

  return (
    <div className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: isDark ? "#ffffff" : "#111827" }}
        className="text-5xl font-normal mb-4"
      >
        Master the Trade.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ color: isDark ? "#94a3b8" : "#475569" }}
      >
        Your comprehensive guide to securely buying and selling devices in the
        VPhone ecosystem.
      </motion.p>
    </div>
  );
}