import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material'; // Import Button if you uncomment the CTA

// Optional: Import AOS if you want this section to animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    // Initialize AOS for this section if needed
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 }, // Vertical padding for responsive design
        bgcolor: 'background.paper', // A clean white background
        textAlign: 'center', // Center align text content
      }}
      data-aos="fade-up" // Apply AOS animation to the whole section
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#1a237e', // Dark blue heading for impact
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
          }}
        >
          Pioneering AI for Biomedical Discovery
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary" // A softer color for the main text
          paragraph
          sx={{
            mb: 4,
            lineHeight: 1.6, // Improve readability
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }, // Responsive font size
            maxWidth: '800px', // Max width for paragraph for better readability on large screens
            mx: 'auto', // Center the paragraph block
          }}
        >
          At NeuraMedix, we are at the forefront of integrating cutting-edge Artificial Intelligence with biomedical research. Our mission is to empower scientists, researchers, and healthcare professionals with intelligent tools that accelerate breakthroughs, enhance diagnostic precision, and drive innovation in medicine. We envision a future where complex biological data yields actionable insights, faster than ever before.
        </Typography>

        {/* Optional: Add a call to action button to lead to the full About Us page */}
        <Button
          variant="outlined"
          size="large"
          href="/about" // Link to your dedicated /about-us page
          sx={{
            mt: 2,
            borderColor: '#3498db', // Primary blue border
            color: '#3498db',      // Primary blue text
            '&:hover': {
              bgcolor: '#e3f2fd', // Light blue background on hover
              borderColor: '#2980b9', // Darker blue border on hover
            },
            borderRadius: '50px', // Rounded corners for the button
            px: 4, // Horizontal padding
          }}
        >
          Learn More About Us
        </Button>
      </Container>
    </Box>
  );
};

export default AboutSection;