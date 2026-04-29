import React, { useContext } from 'react';
import { Container, Stack, Typography, Button, Divider } from '@mui/material';
import { Email } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion'; 
import Loading from './Loading';
import Error from './Error';
import { ErrorType } from '../enums/ErrorType';

import CommunityHeader from '../components/community/CommunityHeader'; 
import ReviewItem from '../components/community/ReviewItem';
import FaqItem from '../components/community/FaqItem';

const fetchCommunityData = async () => {
  return {
    reviews: [
      { id: 1, author: "Mai Linh", content: "The iPhone 15 Pro Max night mode is absolutely stunning!", model: "iPhone 15 Pro Max", likes: 124 },
      { id: 2, author: "Quoc Viet", content: "S24 Ultra S-Pen experience is incredibly smooth for drawing.", model: "S24 Ultra", likes: 87 },
      { id: 3, author: "Dong Khanh", content: "The 120W charging on Xiaomi 16 Pro is a real life-saver.", model: "Xiaomi 16 Pro", likes: 203 },
      { id: 4, author: "Minh Tam", content: "The pure Android experience on Pixel is butter smooth.", model: "Google Pixel 8 Pro", likes: 56 },
      { id: 5, author: "Thu Thao", content: "The Pink color on iPhone 15 is actually very pretty.", model: "iPhone 15 Plus", likes: 112 }
    ],
    faqs: [
      { id: 1, question: "How to connect the phone to a computer?", answer: "Use a Type-C cable or Link to Windows/AirDrop apps." },
      { id: 2, question: "What is the warranty for online purchases?", answer: "12-month official warranty at authorized service centers." },
      { id: 3, question: "Is there a trade-in program available?", answer: "Yes, we support trade-ins with additional subsidies up to $100." }
    ]
  };
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Community() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === 'dark';
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const boxContentColor = isDark ? "#64748b" : "#475569";

  const { data, isLoading, isError } = useQuery({
    queryKey: ['communityData'],
    queryFn: fetchCommunityData,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error code={ErrorType.BadRequest} message="Error loading data" />;

  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <CommunityHeader 
        isDark={isDark}
        textColor={textColor}
        subColor={boxContentColor}
      />
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <motion.div variants={fadeInUp}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            mb={3} 
            sx={{ color: textColor }} 
          >
            User Experiences
          </Typography>
        </motion.div>
        
        <Stack spacing={3} mb={8}>
          {data?.reviews.map((rev) => (
            <motion.div key={rev.id} variants={fadeInUp}>
              <ReviewItem rev={rev} isDark={isDark} />
            </motion.div>
          ))}
        </Stack>
      </motion.div>

      <Divider sx={{ my: 6, borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
        <motion.div variants={fadeInUp}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={4} gap={2}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ color: textColor }}
            >
              Q&A & Support
            </Typography>
            
            <Button 
              variant="contained" 
              startIcon={<Email />} 
              href="mailto:support@vphone.com"
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                backgroundColor: isDark ? "#ffffff" : "#1976d2", 
                color: isDark ? "#475569" : "#ffffff",
                boxShadow: isDark ? 'none' : '0 4px 12px rgba(25, 118, 210, 0.2)',
                '&:hover': {
                  backgroundColor: isDark ? "#e2e8f0" : "#1565c0", 
                },
                '& .MuiButton-startIcon': {
                  color: isDark ? "#475569" : "#ffffff"
                }
              }}
            >
              Send questions via Email
            </Button>
          </Stack>
        </motion.div>

        <Stack spacing={2}>
          {data?.faqs.map((faq) => (
            <motion.div key={faq.id} variants={fadeInUp}>
              <FaqItem faq={faq} isDark={isDark} />
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Container>
  );
}

export default Community;