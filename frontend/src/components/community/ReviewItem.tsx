import React from 'react';
import { FavoriteBorder, ChatBubbleOutline } from '@mui/icons-material';

const ReviewItem = ({ rev, isDark }) => {
  const textColor = isDark ? 'text-white' : 'text-[#1a1a1a]';
  const subColor = isDark ? 'text-gray-400' : 'text-gray-500';
  const contentColor = isDark ? 'text-[#e0e0e0]' : 'text-[#424242]';
  const bgColor = isDark ? 'bg-[#1e1e1e]' : 'bg-white';
  const borderColor = isDark ? 'border-[#333]' : 'border-[#eee]';
  const shadow = isDark ? 'shadow-none' : 'shadow-sm';

  return (
    <div className={`p-6 rounded-xl border ${borderColor} ${bgColor} ${shadow} flex flex-col`}>
      <div className="flex items-center gap-4 mb-4">
        <img 
          src="./src/assets/images/user.png" 
          alt={rev.author} 
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div>
          <h4 className={`font-bold leading-tight ${textColor}`}>
            {rev.author}
          </h4>
          <span className={`text-xs ${subColor}`}>
            {rev.model}
          </span>
        </div>
      </div>
      <p className={`text-base leading-relaxed ${contentColor}`}>
        {rev.content}
      </p>
      <div className="flex items-center gap-4 mt-4">
        <button className="flex items-center gap-1 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-2 py-1 rounded transition-colors text-sm font-medium">
          <FavoriteBorder fontSize="small" />
          {rev.likes}
        </button>
        <button className="flex items-center gap-1 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-2 py-1 rounded transition-colors text-sm font-medium">
          <ChatBubbleOutline fontSize="small" />
          Thảo luận
        </button>
      </div>
    </div>
  );
};
export default ReviewItem;