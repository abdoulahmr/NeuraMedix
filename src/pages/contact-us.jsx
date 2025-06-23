import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Link,
  IconButton
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Header from '../components/header';
import Footer from '../components/footer';

import './../assets/contact-us.css';

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper'>
      <Header />
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Paper elevation={8} sx={{ p: { xs: 3, md: 6 }, borderRadius: '20px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f4f7 60%, #e3f0fa 100%)', boxShadow: '0 8px 32px rgba(52, 152, 219, 0.10)' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2563eb', mb: 4, letterSpacing: 1 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 6, fontWeight: 400, fontSize: '1.15rem' }}>
            We'd love to connect with you! Find our contact details and social media presence below.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Box sx={{ p: { xs: 2, md: 4 }, background: '#fff', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 12px rgba(52, 152, 219, 0.07)' }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: '600', color: '#3498db', mb: 3, letterSpacing: 0.5 }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 4, width: '100%' }}>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5, fontSize: '1.1rem' }}>
                    <EmailIcon sx={{ mr: 1.5, color: '#3498db', fontSize: '2rem' }} />
                    <b>Email:</b>{' '}
                    <Link href="mailto:info@neuramedix.com" color="inherit" underline="hover" sx={{ ml: 1, fontWeight: 500, fontSize: '1.05rem' }}>
                      info@neuramedix.com
                    </Link>
                  </Typography>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5, fontSize: '1.1rem' }}>
                    <PhoneIcon sx={{ mr: 1.5, color: '#3498db', fontSize: '2rem' }} />
                    <b>Phone:</b> <span style={{ marginLeft: 8, fontWeight: 500, fontSize: '1.05rem' }}>+213 553 95 40 59</span>
                  </Typography>
                </Box>

                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: '600', color: '#3498db', mb: 3, letterSpacing: 0.5 }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, justifyContent: 'center', mb: 1 }}>
                  <IconButton aria-label="LinkedIn" component="a" href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#0A66C2', bgcolor: '#eaf4fb', '&:hover': { transform: 'scale(1.1)', bgcolor: '#d0e6f7' }, boxShadow: '0 2px 8px #e3f0fa' }}>
                    <LinkedInIcon sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }} />
                  </IconButton>
                  <IconButton aria-label="Twitter" component="a" href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#1DA1F2', bgcolor: '#eaf4fb', '&:hover': { transform: 'scale(1.1)', bgcolor: '#d0e6f7' }, boxShadow: '0 2px 8px #e3f0fa' }}>
                    <TwitterIcon sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
