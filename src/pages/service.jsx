import React from 'react';
import {
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import {
  MonitorHeart,
  Favorite,
  CellTower,
  FindInPage,
  Science,
  HealthAndSafety,
  Coronavirus,
  Hub,
} from '@mui/icons-material';
import Header from '../components/header';
import Footer from '../components/footer';

const iconMap = {
  'pi-microchip': <Hub sx={{ fontSize: 22, color: '#3f51b5' }} />,
  'pi-cog': <Science sx={{ fontSize: 22, color: '#9c27b0' }} />,
  'pi-box': <CellTower sx={{ fontSize: 22, color: '#4caf50' }} />,
  'pi-file-pdf': <FindInPage sx={{ fontSize: 22, color: '#ff9800' }} />,
  'pi-heart-fill': <Favorite sx={{ fontSize: 22, color: '#e91e63' }} />,
  'pi-microchip-ai': <MonitorHeart sx={{ fontSize: 22, color: '#3f51b5' }} />,
  'pi-chart-line': <HealthAndSafety sx={{ fontSize: 22, color: '#03a9f4' }} />,
  'pi-map-marker': <Hub sx={{ fontSize: 22, color: '#607d8b' }} />,
  'pi-compass': <Science sx={{ fontSize: 22, color: '#9c27b0' }} />,
  'pi-image': <Coronavirus sx={{ fontSize: 22, color: '#f44336' }} />,
  'pi-chart-bar': <Hub sx={{ fontSize: 22, color: '#607d8b' }} />,
  'pi-sliders-h': <Hub sx={{ fontSize: 22, color: '#607d8b' }} />,
  'pi-send': <Hub sx={{ fontSize: 22, color: '#607d8b' }} />,
};

const services = [
  { name: "Auto-Publish Research Tool", description: "Automatically generate structured drafts and insights for publishing. This tool will soon help researchers create ready-to-publish manuscripts from raw data.", icon: "pi-send", badge: "new" },
  { name: "AI-powered Research Paper Analyzer", description: "Summarize, extract keywords, and visualize figures from scientific PDFs. Upload a research paper and get a concise summary, key concepts, and all figures extracted for quick review.", icon: "pi-file-pdf", link: "/research-analyzer", badge: "new" },
  { name: "Lung Tumor Detection", description: "AI-powered detection of lung tumors from CT scans using deep learning models. Upload CT images to automatically highlight and localize tumor regions, supporting early diagnosis.", icon: "pi-microchip-ai", link: "/lung-cancer-detection", badge: "new" },
  { name: "IHC Insight", description: "Quantify protein markers in biological samples using AI-enhanced image analysis. Analyze histology images to count and visualize stained regions, supporting pathology workflows.", icon: "pi-microchip", link: "/ihc-insight" },
  { name: "Molecule Binding Predictor", description: "Predict chemical interactions using SMILES strings and descriptor analysis. Enter molecular structures to estimate binding affinity and interaction likelihood for drug discovery.", icon: "pi-cog", link: "/molicule-binding" },
  { name: "Cell Detection and Counting", description: "Automated detection and quantification of cells in microscopy images. Upload cell images to receive accurate cell counts and spatial distribution maps for research and diagnostics.", icon: "pi-box", link: "/cell-count" },
  { name: "Heart Disease Detection", description: "Detect potential heart disease based on cardiovascular health metrics. Input patient data to receive a risk assessment and probability of heart disease using machine learning.", icon: "pi-heart-fill", link: "/heart-prediction" },
  { name: "Lung Disease Prediction", description: "Predict respiratory diseases using patient data and diagnostic features. Enter clinical and physiological data to get a probability and risk profile for various lung diseases.", icon: "pi-chart-line", link: "/lung-prediction" },
  { name: "Lung Cancer Localization", description: "Localize lung cancer regions in CT scans using advanced image processing. This tool will soon allow precise mapping of cancerous areas for treatment planning.", icon: "pi-map-marker", comingSoon: true },
  { name: "Molecule Docking Simulator", description: "Simulate molecular docking to predict interaction potential and fit score. This upcoming tool will help visualize and score molecular interactions for drug design.", icon: "pi-compass", comingSoon: true },
  { name: "Biomedical Image Classifier", description: "Classify biomedical images using AI (microscopy, histology, radiology). The classifier will soon support automated labeling and sorting of diverse biomedical images.", icon: "pi-image", comingSoon: true },
  { name: "Genetic Mutation Visualizer", description: "Visualize and explore gene mutation patterns for genomics research. This tool will provide interactive mutation maps and analytics for genetic studies.", icon: "pi-chart-bar", comingSoon: true },
  { name: "Molecule Interaction Simulator", description: "Explore real-time interaction simulation between chemical structures. The simulator will allow dynamic modeling of molecular behavior and interactions.", icon: "pi-sliders-h", comingSoon: true },
];

const ServicePage = () => {
  const theme = useTheme();

  return (
    <>
      <Header />

      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: '#f0f4fa' }}>
        <Typography variant="h3" align="center" fontWeight="bold" mb={2}>
          All Services
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" mb={6}>
          Discover our complete suite of AI-powered tools for research and biology.
        </Typography>

        <Box sx={{ maxWidth: 960, mx: 'auto' }}>
          {services.map((service, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                gap: 2,
                py: 2.5,
                borderBottom: '1px solid #e0e0e0',
                opacity: service.comingSoon ? 0.5 : 1,
              }}
            >
              <Box sx={{ pt: '4px' }}>
                {iconMap[service.icon] || <Hub sx={{ fontSize: 22, color: '#607d8b' }} />}
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {service.name}{' '}
                  {service.badge && (
                    <Typography component="span" sx={{ color: '#38bdf8', fontSize: '0.8em', ml: 1 }}>
                      NEW
                    </Typography>
                  )}
                  {service.comingSoon && (
                    <Typography component="span" sx={{ color: '#888', fontSize: '0.8em', ml: 1 }}>
                      (Coming Soon)
                    </Typography>
                  )}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ServicePage;
