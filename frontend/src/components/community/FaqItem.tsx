import React from 'react';
import { HelpOutline } from '@mui/icons-material';

const FaqItem = ({ faq, isDark }) => {
  return (
    <div className={`p-6 rounded-xl border-l-[5px] ${
      isDark ? 'bg-[#121212] border-white border-y border-r border-white/10' : 'bg-white border-[#1976d2] shadow-md'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        <HelpOutline className={isDark ? 'text-white' : 'text-[#1976d2]'} fontSize="small" />
        <h4 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {faq.questionEn || faq.question}
        </h4>
      </div>
      <p className={`pl-8 text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
        <strong className={isDark ? 'text-white' : ''}>Reply:</strong> {faq.answerEn || faq.answer}
      </p>
    </div>
  );
};

export default FaqItem;