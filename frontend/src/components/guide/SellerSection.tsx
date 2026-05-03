import photoImg from "../../assets/images/laudth.png";
import packageImg from "../../assets/images/anhForSelect.png";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
    Build,
    CameraAlt,
    LocalShipping,
    StorefrontOutlined,
    WarningAmber,
} from "@mui/icons-material";

const fadeInUp = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};
const stagger = {
    whileInView: {
        transition: {
            staggerChildren: 0.15
        }
    }
};
export default function SellerSection() {
    const themeContext = useContext(ThemeContext);
    const isDark = themeContext?.theme === "dark";

    return (
        <section className="mb-32">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-normal mb-12 flex justify-end items-center gap-3"
                style={{ color: isDark ? "#fff" : "#111827" }}
            >
                For Sellers
                <StorefrontOutlined className="text-blue-500" />
            </motion.h2>
            <motion.div
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
            >
                <motion.div
                    variants={fadeInUp}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: isDark
                            ? "0 0 25px rgba(34,211,238,0.3)"
                            : ""
                    }}
                    className={`p-6 rounded-xl ${isDark
                        ? "bg-black/60 border border-white/10 text-white backdrop-blur-xl"
                        : "bg-white border border-gray-200 shadow-xl text-gray-900"
                        }`}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Build className="text-blue-500" />
                        <h3 className="font-semibold text-lg">
                            Prepare for Sale
                        </h3>
                    </div>
                    <div className="space-y-15 text-sm">
                        <div>
                            <p className="text-blue-500 font-semibold">ONE</p>
                            <p className="font-semibold">Data Backup</p>
                            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                                Backup all data to the Cloud or a computer.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">Factory Reset</p>
                            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                                Erase all personal data (Erase All Content and Settings).
                            </p>
                        </div>
                        <div
                            className={`p-4 rounded-lg mt-4 ${isDark
                                ? "bg-red-500/10 border border-red-400/40"
                                : "bg-red-50 border border-red-300"
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <WarningAmber className="text-red-400" />
                                <p className="font-semibold">MANDATORY</p>
                            </div>
                            <p className="text-sm">
                                Turn off 'Find My iOS' or 'Google FRP Lock' (Android).
                                If not turned off, the new buyer will not be able to activate
                                the device. This is the most crucial step.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: isDark
                            ? "0 0 25px rgba(34,211,238,0.3)"
                            : ""
                    }}
                    className={`p-6 rounded-xl ${isDark
                        ? "bg-black/60 border border-white/10 text-white backdrop-blur-xl"
                        : "bg-white border border-gray-200 shadow-xl text-gray-900"
                        }`}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <CameraAlt className="text-blue-500" />
                        <h3 className="font-semibold text-lg">
                            Photo Masterclass
                        </h3>
                    </div>

                    <img
                        src={photoImg}
                        className="rounded-lg mb-4 w-full h-[210px] object-cover"
                    />
                    <ul className="space-y-3 text-sm">
                        <li> Use natural light, avoid harsh flash glare.</li>
                        <li> Shoot at a 45-degree angle to clearly show the device's edges.</li>
                        <li> Turn on screen with a white background to prove good display quality.</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: isDark
                            ? "0 0 25px rgba(34,211,238,0.3)"
                            : ""
                    }}
                    className={`p-6 rounded-xl ${isDark
                        ? "bg-black/60 border border-white/10 text-white backdrop-blur-xl"
                        : "bg-white border border-gray-200 shadow-xl text-gray-900"
                        }`}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <LocalShipping className="text-blue-500" />
                        <h3 className="font-semibold text-lg">
                            Safe Packaging
                        </h3>
                    </div>

                    <img
                        src={packageImg}
                        className="rounded-lg mb-4 w-full h-[210px] object-cover"
                    />
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Use a sturdy, well-fitting box. Wrap with at least 3 layers of
                        bubble wrap. Seal all box edges with heavy-duty packing tape.
                        Record a video of the packaging process.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}