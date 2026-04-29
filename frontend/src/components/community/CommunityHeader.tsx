import React from 'react';
import { motion } from 'framer-motion';
import { Bolt } from '@mui/icons-material';

const CommunityHeader = ({ isDark, textColor, subColor }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-4 md:px-10 py-16">
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 ${isDark ? 'bg-white/5' : 'bg-blue-500/10'}`} />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
   
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold ${
            isDark ? 'bg-white/10 text-white border-white/20' : 'bg-blue-500/10 text-blue-500 border-blue-200'
          }`}>
            <Bolt fontSize="small" />
            <span>Latest Tech Updates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ color: isDark ? '#FFFFFF' : textColor }}>
            Welcome to <br />
            <span className={isDark ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}>
              VPhone Community
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl" style={{ color: isDark ? '#cbd5e1' : subColor }}>
            Explore a massive tech knowledge base, discuss with experts, and grab exclusive deals reserved only for the VPhone community.
          </p>

          <div className="flex gap-4">
            <button className={`px-8 py-4 rounded-2xl font-bold transition ${
              isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
            }`}>
              Join Now
            </button>
            <button className={`px-8 py-4 rounded-2xl font-bold border transition ${
              isDark ? 'border-white text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}>
              Explore More
            </button>
          </div>
        </motion.div>
        
     
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] ${isDark ? 'border-white/20' : 'border-white'} shadow-2xl`}
        >
            <img src="./src/assets/images/phone.png" className="w-full h-[500px] object-cover" alt="VPhone" />
        </motion.div>

      </div>
    </section>
  );
};

export default CommunityHeader;