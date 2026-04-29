import React from 'react';
import { motion } from 'framer-motion';
import { Bolt } from '@mui/icons-material';

const CommunityHeader = ({ isDark, textColor, subColor }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-4 md:px-10 py-16">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-200 dark:border-blue-800 text-sm font-bold">
            <Bolt fontSize="small" />
            <span>Cập nhật công nghệ mới nhất</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ color: textColor }}>
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              VPhone Community
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl" style={{ color: textColor }}>
            Khám phá kho kiến thức công nghệ khổng lồ, thảo luận cùng các chuyên gia 
            và săn những ưu đãi độc quyền dành riêng cho cộng đồng VPhone.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
              Tham gia ngay
            </button>
            <button 
              className="px-8 py-4 rounded-2xl font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300"
              style={{ color: textColor }} 
            >
              Khám phá thêm
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl">
            <img
              src="./src/assets/images/phone.png"
              alt="Technology"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHeader;