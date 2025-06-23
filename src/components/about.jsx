import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        textAlign: 'center',
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#1a237e',
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Pioneering AI for Biomedical Discovery
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          At NeuraMedix, we are at the forefront of integrating cutting-edge Artificial Intelligence with biomedical research. Our mission is to empower scientists, researchers, and healthcare professionals with intelligent tools that accelerate breakthroughs, enhance diagnostic precision, and drive innovation in medicine. We envision a future where complex biological data yields actionable insights, faster than ever before.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          href="/about"
          sx={{
            mt: 2,
            borderColor: '#3498db',
            color: '#3498db',
            '&:hover': {
              bgcolor: '#e3f2fd',
              borderColor: '#2980b9',
            },
            borderRadius: '50px',
            px: 4,
          }}
        >
          Learn More About Us
        </Button>
      </Container>
    </Box>
  );
};

export default AboutSection;
