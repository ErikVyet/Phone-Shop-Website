import React, { useContext } from 'react';
import { Container, Stack, Typography, Button, Divider } from '@mui/material';
import { Email } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { ThemeContext } from '../contexts/ThemeContext';
import Loading from './Loading';
import Error from './Error';
import { ErrorType } from '../enums/ErrorType';

import CommunityHeader from '../components/community/CommunityHeader'; 
import ReviewItem from '../components/community/ReviewItem';
import FaqItem from '../components/community/FaqItem';

const fetchCommunityData = async () => {
  return {
    reviews: [
      { id: 1, author: "Mai Lĩnh", content: "Camera iPhone 15 Pro Max chụp đêm quá đỉnh!", model: "iPhone 15 Pro Max", likes: 124 },
      { id: 2, author: "Quốc Việt", content: "S24 Ultra dùng S-Pen vẽ vời rất mượt.", model: "S24 Ultra", likes: 87 },
      { id: 3, author: "Đồng Khánh", content: "Sạc 120W trên Xiaomi 16 Pro đúng là cứu cánh.", model: "Xiaomi 16 Pro", likes: 203 },
      { id: 4, author: "Minh Tâm", content: "Trải nghiệm Android thuần trên Pixel cực kỳ mượt.", model: "Google Pixel 8 Pro", likes: 56 },
      { id: 5, author: "Thu Thảo", content: "Màu Pink trên iPhone 15 thực sự rất xinh.", model: "iPhone 15 Plus", likes: 112 }
    ],
    faqs: [
      { id: 1, question: "Làm sao để kết nối điện thoại với máy tính?", answer: "Dùng cáp Type-C hoặc ứng dụng Link to Windows/AirDrop." },
      { id: 2, question: "Chế độ bảo hành khi mua online?", answer: "Bảo hành chính hãng 12 tháng tại các trung tâm uỷ quyền." },
      { id: 3, question: "Có hỗ trợ thu cũ đổi mới không?", answer: "Có, hỗ trợ thu cũ và trợ giá thêm lên tới 2 triệu đồng." }
    ]
  };
};

function Community() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === 'dark';
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const subColor = isDark ? "#cbd5e1" : "#475569";

  const { data, isLoading, isError } = useQuery({
    queryKey: ['communityData'],
    queryFn: fetchCommunityData,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error code={ErrorType.BadRequest} message="Lỗi tải dữ liệu" />;

  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      
      <CommunityHeader 
        isDark={isDark}
        textColor={textColor}
        subColor={subColor}
      />

      <Typography variant="h5" fontWeight="bold" mb={3} color={textColor}>
        Trải nghiệm người dùng
      </Typography>
      
      <Stack spacing={3} mb={8}>
        {data?.reviews.map((rev) => (
          <ReviewItem key={rev.id} rev={rev} isDark={isDark} />
        ))}
      </Stack>

      <Divider sx={{ my: 6 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={4} gap={2}>
        <Typography variant="h5" fontWeight="bold" color={textColor}>
          Q&A & Support
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<Email />} 
          href="mailto:support@vphone.com"
          sx={{ borderRadius: 2 }}
        >
          Send questions via Email
        </Button>
      </Stack>

      <Stack spacing={2}>
        {data?.faqs.map((faq) => (
          <FaqItem key={faq.id} faq={faq} isDark={isDark} />
        ))}
      </Stack>
    </Container>
  );
}

export default Community;