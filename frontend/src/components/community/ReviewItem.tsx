import React from 'react';
import { motion } from 'framer-motion'; 
import { FavoriteBorder, ChatBubbleOutline } from '@mui/icons-material';

const ReviewItem = ({ rev, isDark }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`p-6 rounded-xl border ${
        isDark ? 'border-white/10 bg-[#121212]' : 'border-slate-100 bg-white shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src="./src/assets/images/user.png" className="w-[45px] h-[45px] rounded-full" alt="user" />
        <div>
          <h4 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{rev.author}</h4>
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>{rev.model}</span>
        </div>
      </div>
      
      <p className={`text-base ${isDark ? 'text-[#64748b]' : 'text-slate-600'}`}>
        {rev.contentEn || rev.content}
      </p>
      
      <div className="flex items-center gap-4 mt-4">
        <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isDark ? 'text-white hover:text-gray-300' : 'text-blue-500'
        }`}>
          <FavoriteBorder fontSize="small" /> {rev.likes}
        </button>
        <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isDark ? 'text-white hover:text-gray-300' : 'text-blue-500'
        }`}>
          <ChatBubbleOutline fontSize="small" /> Discuss
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewItem;