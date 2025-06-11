import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BiotechIcon from '@mui/icons-material/Biotech'; 
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HubIcon from '@mui/icons-material/Hub'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SearchIcon from '@mui/icons-material/Search';
import ScaleIcon from '@mui/icons-material/Scale'; 
import PsychologyIcon from '@mui/icons-material/Psychology';
import './../assets/product.css'; 

const Product = () => {
  return (
    <Box>
      
      <Box sx={{
        bgcolor: '#f5f8fa',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        background: 'linear-gradient(135deg, #e0f2f7 0%, #cce7f5 100%)',
      }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#1a237e',
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            NeuraMedix: Your Partner in AI-Powered Biomedical Innovation
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{
              mb: 4,
              color: '#3f51b5',
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
            }}
          >
            We provide a comprehensive suite of AI services designed to accelerate your research, enhance diagnostics, and drive breakthroughs in healthcare.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact" 
            sx={{
              bgcolor: '#3498db',
              '&:hover': { bgcolor: '#2980b9' },
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              borderRadius: '50px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            Discover Our Services
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: '#2c3e50', mb: 6 }}
        >
          Our Core Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: '10px', height: '100%' }}>
              <BiotechIcon sx={{ fontSize: 60, color: '#3498db', mb: 2 }} /> 
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5' }}>
                AI-Driven Disease Prediction
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Harness our advanced AI models to predict disease onset and progression with high accuracy, enabling proactive healthcare.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: '10px', height: '100%' }}>
              <AnalyticsIcon sx={{ fontSize: 60, color: '#3498db', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5' }}>
                Automated Image Analysis
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We provide automated services for precise segmentation, quantification, and analysis of medical imaging data.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: '10px', height: '100%' }}>
              <HubIcon sx={{ fontSize: 60, color: '#3498db', mb: 2 }} /> 
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5' }}>
                Molecular Interaction Analysis
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our services include in-depth analysis of molecular binding and interactions, crucial for drug discovery and development.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: '10px', height: '100%' }}>
              <CloudUploadIcon sx={{ fontSize: 60, color: '#3498db', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5' }}>
                Secure Data Processing
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We offer secure and compliant processing services for your sensitive biomedical datasets, ensuring privacy and integrity.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: '10px', height: '100%' }}>
              <SecurityIcon sx={{ fontSize: 60, color: '#3498db', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5' }}>
                Custom AI Model Development
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Partner with us to develop bespoke AI models tailored to your specific research questions or clinical needs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#e3f2fd', py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, color: '#1a237e', mb: 6 }}
          >
            Benefits for Researchers & Clinicians
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Accelerated Research Cycles</Typography>} secondary="Dramatically reduce the time from hypothesis to discovery with automated analysis." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Enhanced Diagnostic Accuracy</Typography>} secondary="Improve clinical decision-making with AI-powered insights and precise disease detection." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MonetizationOnIcon color="primary" /> 
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Cost Efficiency</Typography>} secondary="Optimize resource allocation and reduce manual labor costs in your research and clinical workflows." />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SearchIcon color="primary" /> {/* Changed icon for deeper insights */}
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Uncover Deeper Insights</Typography>} secondary="Go beyond traditional analysis to reveal hidden patterns and correlations in complex biomedical data." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScaleIcon color="primary" /> {/* Changed icon for scalability */}
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Scalable & Secure Operations</Typography>} secondary="Handle large datasets with confidence, ensuring data integrity and patient privacy." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PsychologyIcon color="primary" /> {/* Changed icon for user-friendly */}
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">Intuitive User Experience</Typography>} secondary="Designed for scientists and clinicians, making powerful AI tools accessible without deep technical expertise." />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{
        bgcolor: '#2c3e50', // Dark background for contrast
        py: 8,
        textAlign: 'center',
        color: 'white',
      }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Ready to Transform Your Research?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Explore how NeuraMedix can elevate your scientific endeavors.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              bgcolor: '#28a745', // Green for a strong call to action
              '&:hover': { bgcolor: '#218838' },
              py: 1.5,
              px: 4,
              fontSize: '1.2rem',
              borderRadius: '50px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Product;