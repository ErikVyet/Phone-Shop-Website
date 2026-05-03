import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Verified,
  Star,
  Security,
  ShoppingCartOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";

export default function BuyerSection() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === "dark";

  return (
    <section className="mb-32">
      <h2
        className="text-3xl font-normal mb-12 flex items-center gap-3"
        style={{ color: isDark ? "#fff" : "#111827" }}
      >
        <ShoppingCartOutlined className="text-blue-500" />
        For Buyers
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-8 rounded-xl ${isDark
            ? "bg-black/60 border border-cyan-500/30 backdrop-blur-xl text-white"
            : "bg-white border border-gray-200 shadow-xl text-gray-900"
            }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <Verified className="text-blue-500" />
            <h3 className="text-xl font-semibold">
              Inspection Checklist
            </h3>
          </div>

          <div className="space-y-6 text-sm">   
            <div className="flex gap-3">
              <CheckCircleOutline className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">IMEI Verification</p>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Check the IMEI code (*#06#) on the device and cross-reference
                  with the box/receipt. Verify network lock and blacklist status
                  on the system.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircleOutline className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Water Damage Check</p>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Check the Liquid Contact Indicator (LCI) in the SIM tray. If it
                  has turned red, the device has been exposed to liquid.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircleOutline className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Screen & Display</p>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Inspect for dead pixels, screen lines, and touch responsiveness
                  across the entire surface.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircleOutline className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Hardware Check</p>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Test the microphone, external speakers, cameras (front/rear),
                  physical buttons, and charging port.
                </p>
              </div>
            </div>
          </div>
        </motion.div>   
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl ${isDark
              ? "bg-black/60 border border-cyan-500/30 backdrop-blur-xl text-white"
              : "bg-white border border-gray-200 shadow-lg text-gray-900"
              }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-blue-500" />
              <h3 className="font-semibold text-lg">
                Grading Standards
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div
                className={`p-4 rounded-lg ${isDark
                  ? "bg-black/70 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
                  }`}
              >
                <p className="font-semibold">New</p>
                <p className="text-gray-500 text-xs">
                  Factory sealed, unactivated.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${isDark
                  ? "bg-black/70 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
                  }`}
              >
                <p className="font-semibold">Like New</p>
                <p className="text-gray-500 text-xs">
                  100% battery, no scratches, flawless.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${isDark
                  ? "bg-black/70 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
                  }`}
              >
                <p className="font-semibold">Good</p>
                <p className="text-gray-500 text-xs">
                  Minor housing scratches, pristine screen, battery &gt;85%.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${isDark
                  ? "bg-black/70 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
                  }`}
              >
                <p className="font-semibold">Fair</p>
                <p className="text-gray-500 text-xs">
                  Visible scratches, fully functional.
                </p>
              </div>

            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl ${isDark
              ? "bg-black/60 border border-cyan-500/30 backdrop-blur-xl text-white"
              : "bg-white border border-gray-200 shadow-lg text-gray-900"
              }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Security className="text-blue-500" />
              <h3 className="font-semibold text-lg">
                Buyer Protection
              </h3>
            </div>
            <p className={isDark ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>
              Report issues within 48 hours of receipt. Escrow system keeps your
              money safe. 100% refund if the product is not as described.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}