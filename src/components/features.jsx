import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
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

// Map pi icons to MUI icons for visual consistency
const iconMap = {
  'pi-microchip': <HubIcon sx={{ fontSize: 28, color: '#3f51b5' }} />,
  'pi-cog': <ScienceIcon sx={{ fontSize: 28, color: '#9c27b0' }} />,
  'pi-box': <CellTowerIcon sx={{ fontSize: 28, color: '#4caf50' }} />,
  'pi-file-pdf': <FindInPageIcon sx={{ fontSize: 28, color: '#ff9800' }} />,
  'pi-heart-fill': <FavoriteIcon sx={{ fontSize: 28, color: '#e91e63' }} />,
  'pi-microchip-ai': <MonitorHeartIcon sx={{ fontSize: 28, color: '#3f51b5' }} />,
  'pi-chart-line': <HealthAndSafetyIcon sx={{ fontSize: 28, color: '#03a9f4' }} />,
  'pi-map-marker': <HubIcon sx={{ fontSize: 28, color: '#607d8b' }} />,
  'pi-compass': <ScienceIcon sx={{ fontSize: 28, color: '#9c27b0' }} />,
  'pi-image': <CoronavirusIcon sx={{ fontSize: 28, color: '#f44336' }} />,
  'pi-chart-bar': <HubIcon sx={{ fontSize: 28, color: '#607d8b' }} />,
  'pi-sliders-h': <HubIcon sx={{ fontSize: 28, color: '#607d8b' }} />,
  'pi-send': <HubIcon sx={{ fontSize: 28, color: '#607d8b' }} />,
};

const features = [
  // New tools first
  { name: "AI-powered Research Paper Analyzer", description: "Summarize, extract keywords, and visualize figures from scientific PDFs.", icon: "pi-file-pdf", link: "/research-analyzer", badge: "new" },
  { name: "Lung Tumor Detection", description: "AI-powered detection of lung tumors from CT scans using deep learning models.", icon: "pi-microchip-ai", link: "/lung-cancer-detection", badge: "new" },
  // Regular tools
  { name: "IHC Insight", description: "Quantify protein markers in biological samples using AI-enhanced image analysis.", icon: "pi-microchip", link: "/ihc-insight" },
  { name: "Molecule Binding Predictor", description: "Predict chemical interactions using SMILES strings and descriptor analysis.", icon: "pi-cog", link: "/molicule-binding" },
  { name: "Cell Detection and Counting", description: "Automated detection and quantification of cells in microscopy images.", icon: "pi-box", link: "/cell-count" },
  { name: "Heart Disease Detection", description: "Detect potential heart disease based on cardiovascular health metrics.", icon: "pi-heart-fill", link: "/heart-prediction" },
  { name: "Lung Disease Prediction", description: "Predict respiratory diseases using patient data and diagnostic features.", icon: "pi-chart-line", link: "/lung-prediction" },
  // Coming soon last
  { name: "Lung Cancer Localization", description: "Localize lung cancer regions in CT scans using advanced image processing.", icon: "pi-map-marker", comingSoon: true },
  { name: "Molecule Docking Simulator", description: "Simulate molecular docking to predict interaction potential and fit score.", icon: "pi-compass", comingSoon: true },
  { name: "Biomedical Image Classifier", description: "Classify biomedical images using AI (microscopy, histology, radiology).", icon: "pi-image", comingSoon: true },
  { name: "Genetic Mutation Visualizer", description: "Visualize and explore gene mutation patterns for genomics research.", icon: "pi-chart-bar", comingSoon: true },
  { name: "Molecule Interaction Simulator", description: "Explore real-time interaction simulation between chemical structures.", icon: "pi-sliders-h", comingSoon: true },
  { name: "Auto-Publish Research Tool", description: "Automatically generate structured drafts and insights for publishing.", icon: "pi-send", comingSoon: true },
];

const MAX_VISIBLE = 6;
const FeaturesSection = () => {
  // Only show the first 6 items
  const visibleFeatures = features.slice(0, MAX_VISIBLE);
  return (
    <Box sx={{ py: 8, px: { xs: 1, md: 8 }, backgroundColor: '#fafafa' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Explore Our Research Tools
      </Typography>
      <Timeline position="alternate">
        {visibleFeatures.map((feature, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent sx={{ flex: 0.15, display: { xs: 'none', sm: 'block' } }} />
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#e3f2fd', boxShadow: '0 2px 8px #b3e5fc' }}>
                {iconMap[feature.icon] || <HubIcon sx={{ fontSize: 28, color: '#607d8b' }} />}
              </TimelineDot>
              {idx < visibleFeatures.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {feature.name}
                  {feature.badge && (
                    <span style={{ marginLeft: 8, color: '#38bdf8', fontSize: '0.8em', fontWeight: 500, verticalAlign: 'middle' }}>NEW</span>
                  )}
                  {feature.comingSoon && (
                    <span style={{ marginLeft: 8, color: '#aaa', fontSize: '0.8em', fontWeight: 500, verticalAlign: 'middle' }}>Coming Soon</span>
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
                {!feature.comingSoon && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={feature.link}
                    sx={{
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
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/services"
          sx={{
            borderRadius: '25px',
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
