import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import {
  MonitorHeart as MonitorHeartIcon,
  Favorite as FavoriteIcon,
  CellTower as CellTowerIcon,
  FindInPage as FindInPageIcon,
  Science as ScienceIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  Coronavirus as CoronavirusIcon,
  Hub as HubIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 36, color: '#3f51b5' }} />,
    title: 'Lung Tumor Detection',
    description: 'Automatically detect tumor locations on CT scans using advanced AI.',
    link: '/product#lung-tumor-detection',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 36, color: '#e91e63' }} />,
    title: 'Heart Disease Prediction',
    description: 'Predict heart disease risk based on patient data using ML models.',
    link: '/product#heart-disease-prediction',
  },
  {
    icon: <CellTowerIcon sx={{ fontSize: 36, color: '#4caf50' }} />,
    title: 'Cell Detection and Counting',
    description: 'Detect and count cells in microscopy images accurately.',
    link: '/product#cell-detection',
  },
  {
    icon: <FindInPageIcon sx={{ fontSize: 36, color: '#ff9800' }} />,
    title: 'Histology Brown Pixel Counter',
    description: 'Measure stained brown pixels in histology images for analysis.',
    link: '/product#brown-pixel-counter',
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 36, color: '#9c27b0' }} />,
    title: 'Molecule Binding Prediction',
    description: 'Predict molecule binding affinity using deep learning models.',
    link: '/product#molecule-binding',
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 36, color: '#03a9f4' }} />,
    title: 'Lung Disease Prediction',
    description: 'Predict lung diseases from symptoms and patient history.',
    link: '/product#lung-disease-prediction',
  },
  {
    icon: <CoronavirusIcon sx={{ fontSize: 36, color: '#f44336' }} />,
    title: 'Histology Abnormality Classifier',
    description: 'Detect abnormal histology images and classify by pathology.',
    link: '/product#histology-classifier',
  },
  {
    icon: <HubIcon sx={{ fontSize: 36, color: '#607d8b' }} />,
    title: 'Biology Tool Suite',
    description: 'Central hub for all AI-powered biology and medical tools.',
    link: '/product#biology-suite',
  },
];

const FeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 8); // Show all or just first 8 (2 rows)

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#fafafa' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Explore Our AI Tools
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {visibleFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                textAlign: 'center',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #e0e0e0',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: '#f0f4ff',
                  borderRadius: '50%',
                  width: 64,
                  height: 64,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                href={feature.link}
                sx={{
                  mt: 'auto',
                  borderColor: '#1976d2',
                  color: '#1976d2',
                  '&:hover': {
                    bgcolor: '#e3f2fd',
                    borderColor: '#1565c0',
                  },
                  borderRadius: '20px',
                  px: 2,
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setShowAll(!showAll)}
          sx={{
            borderRadius: '25px',
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {showAll ? 'Show Less' : 'Explore More'}
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
