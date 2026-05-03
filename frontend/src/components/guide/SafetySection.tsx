import { motion } from "framer-motion";
import {
  Security,
  WarningAmber,
  Lock,
  Payment,
  LocalShipping,
  FactCheck,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SafetySection() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === "dark";

  return (
    <section className="mb-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-normal mb-12 text-center flex items-center justify-center gap-2"
        style={{ color: isDark ? "#fff" : "#111827" }}
      >
        <Security /> Safety & Security
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`p-8 rounded-xl mb-10 ${
          isDark
            ? "bg-black border border-cyan-500/30 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            : "bg-white border border-gray-200 shadow-lg text-gray-900"
        }`}
      >
        <h3 className="text-center font-semibold mb-10 text-lg">
          VPhone Escrow Process
        </h3>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black border border-white/10 mx-auto mb-3">
              <Payment className="text-blue-500" />
            </div>
            <p className="text-sm font-semibold">1. Payment</p>
            <p className="text-xs text-gray-400">
              Buyer makes payment. Funds are held securely by VPhone.
            </p>
          </div>
          <ArrowForward className="text-gray-400 hidden md:block" />
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black border border-cyan-400/40 mx-auto mb-3">
              <LocalShipping className="text-blue-500" />
            </div>
            <p className="text-sm font-semibold">2. Shipping</p>
            <p className="text-xs text-gray-400">
              Seller ships the item. Updates the tracking number.
            </p>
          </div>
          <ArrowForward className="text-gray-400 hidden md:block" />
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black border border-purple-400/40 mx-auto mb-3">
              <FactCheck className="text-purple-400" />
            </div>
            <p className="text-sm font-semibold">3. Inspection</p>
            <p className="text-xs text-gray-400">
              Buyer receives and inspects within 48 hours.
            </p>
          </div>
          <ArrowForward className="text-gray-400 hidden md:block" />
          <div className="text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-black mx-auto mb-3">
              <CheckCircle />
            </div>
            <p className="text-sm font-semibold">4. Release</p>
            <p className="text-xs text-gray-400">
              Confirmation OK. Funds are released to the seller.
            </p>
          </div>

        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl ${
            isDark
              ? "bg-black border border-red-500/40 text-white shadow-[0_0_20px_rgba(239,68,68,0.15)]"
              : "bg-white border border-red-300 text-gray-900 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <WarningAmber className="text-red-400" />
            <h3 className="text-lg font-semibold text-red-400">
              Scam Prevention
            </h3>
          </div>
          <p className="font-semibold mb-3">CRITICAL WARNING:</p>

          <ul className="space-y-2 text-sm">
            <li> Never transact outside the VPhone platform.</li>
            <li>
              Do not transfer money directly (Wire Transfer/ZaloPay) to the seller under any circumstances.
            </li>
            <li>
              Be wary of messages requesting OTP codes or login information.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`p-6 rounded-xl ${
            isDark
              ? "bg-black border border-cyan-500/30 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              : "bg-white border border-gray-200 text-gray-900 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-gray-300" />
            <h3 className="text-lg font-semibold">
              Data Privacy
            </h3>
          </div>
          <p className="text-sm text-gray-400">
            Military-grade data erasure commitment. For devices passing through
            the VPhone inspection center, we perform a 3-pass Data Wiping process
            according to the DoD 5220.22-M standard, ensuring 100% of old data is
            unrecoverable before reaching the new owner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}