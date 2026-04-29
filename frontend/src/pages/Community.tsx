import React from 'react';
import { Avatar, Chip, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import Loading from './Loading';
import Error from './Error';
import { ErrorType } from '../enums/ErrorType';
import type { Post } from '../interfaces/Post';

const fetchCommunityPosts = async (): Promise<Post[]> => {
  return [
    {
      id: 1,
      author: "Nguyễn Mai Lĩnh",
      avatar: "./src/assets/images/user.png",
      phoneModel: "iPhone 15 Pro Max",
      content: "Camera đêm cực kỳ ấn tượng, chụp thiếu sáng vẫn giữ được chi tiết tốt. Pin cũng trụ rất bền.",
      image: "./src/assets/images/ip15pro.png",
      tags: ["iPhone", "Camera", "Apple"]
    },
    {
      id: 2,
      author: "Hoàng Quốc Việt",
      avatar: "./src/assets/images/user.png",
      phoneModel: "Samsung Galaxy S24 Ultra",
      content: "Bút S-Pen cực kỳ tiện lợi khi ghi chú và chỉnh sửa ảnh. Màn hình sáng đẹp, hiệu năng mạnh.",
      image: "./src/assets/images/s25ultra.png",
      tags: ["Samsung", "S-Pen", "AI"]
    },
    {
      id: 3,
      author: "Trần Diệp Đồng Khánh",
      avatar: "./src/assets/images/user.png",
      phoneModel: "Xiaomi 16 Pro",
      content: "Giá trị tiền bạc rất tốt. Sạc nhanh 120W chỉ mất hơn 20 phút là đầy pin. Hiệu năng ổn định.",
      image: "./src/assets/images/xiaomi16pro.png",
      tags: ["Xiaomi", "Sạc nhanh", "Flagship"]
    }
  ];
};

function Community() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['communityPosts'],
    queryFn: fetchCommunityPosts,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error code={ErrorType.BadRequest} message="Không thể tải dữ liệu cộng đồng" />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          CỘNG ĐỒNG REVIEW
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Chia sẻ kinh nghiệm sử dụng điện thoại từ người dùng thật
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((post) => (
          <div 
            key={post.id}
            className="bg-white rounded-4xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300">
           
            <div className="relative">
              <img src={post.image} alt={post.phoneModel} className="w-full h-100 md:h-100 object-cover"/>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-5">
                <Avatar src={post.avatar} sx={{ width: 52, height: 52 }} />
                <div>
                  <p className="font-semibold text-lg text-gray-800">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.phoneModel}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                "{post.content}"
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    size="small" 
                    variant="outlined" 
                    color="primary" 
                  />
                ))}
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="contained" 
                size="large"
                className="bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-medium rounded-2xl shadow-md"> ĐỌC THÊM
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;