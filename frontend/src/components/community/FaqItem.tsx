import React from 'react';
import { HelpOutline } from '@mui/icons-material';

const FaqItem = ({ faq, isDark }) => {
  const containerBg = isDark ? 'bg-[#1e1e1e]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-[#1a1a1a]';
  const answerColor = isDark ? 'text-[#bdbdbd]' : 'text-[#616161]';
  const shadow = isDark ? 'shadow-none' : 'shadow-md';

  return (
    <div 
      className={`p-6 rounded-xl border-l-[5px] border-[#1976d2] ${containerBg} ${shadow} transition-all`}
    >
      <div className="flex items-center gap-2 mb-2">
        <HelpOutline className="text-[#1976d2] text-sm" />
        <h4 className={`font-bold ${textColor}`}>
          {faq.question}
        </h4>
      </div>
      
      <p className={`pl-8 text-sm leading-relaxed ${answerColor}`}>
        <span className="font-bold">Trả lời:</span> {faq.answer}
      </p>
    </div>
  );
};

export default FaqItem;