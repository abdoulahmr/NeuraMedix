import React from 'react'; // useState is no longer needed without the form
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
// Add more social media icons if you plan to use them, e.g.,
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';

import './../assets/contact-us.css'; // Assuming you have relevant styles here

const ContactUs = () => {
  // formData state, handleChange, and handleSubmit are no longer needed as the form is removed.

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}> {/* Changed to 'md' as it's a single column now */}
      <Paper elevation={6} sx={{ p: { xs: 3, md: 6 }, borderRadius: '15px', textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 4 }}>
          Get in Touch
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 6 }}>
          We'd love to connect with you! Find our contact details and social media presence below.
        </Typography>

        <Grid container spacing={4} justifyContent="center"> {/* Center content */}
          {/* Main Contact Information & Social Media Section */}
          <Grid item xs={12}> {/* This grid item now takes full width */}
            <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f0f4f7', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: '600', color: '#3498db', mb: 3 }}>
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}> {/* Group contact details */}
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <EmailIcon sx={{ mr: 1.5, color: '#3498db', fontSize: '2rem' }} />
                  <b>Email:</b>{' '}
                  <Link href="mailto:info@neuramedix.com" color="inherit" underline="hover" sx={{ ml: 1 }}>
                    info@neuramedix.com
                  </Link>
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <PhoneIcon sx={{ mr: 1.5, color: '#3498db', fontSize: '2rem' }} />
                  <b>Phone:</b> +1 (555) 123-4567
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <LocationOnIcon sx={{ mr: 1.5, color: '#3498db', fontSize: '2rem', mt: 0.5 }} />
                  <Box>
                    <b>Address:</b><br />
                    123 AI Innovations Drive,<br />
                    Science City, Global
                  </Box>
                </Typography>
              </Box>

              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: '600', color: '#3498db', mb: 3 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, justifyContent: 'center' }}>
                <IconButton aria-label="LinkedIn" component="a" href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#0A66C2', '&:hover': { transform: 'scale(1.1)' } }}>
                  <LinkedInIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem' } }} /> {/* Larger icons */}
                </IconButton>
                <IconButton aria-label="GitHub" component="a" href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#333', '&:hover': { transform: 'scale(1.1)' } }}>
                  <GitHubIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem' } }} />
                </IconButton>
                <IconButton aria-label="Twitter" component="a" href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#1DA1F2', '&:hover': { transform: 'scale(1.1)' } }}>
                  <TwitterIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem' } }} />
                </IconButton>
                {/*
                <IconButton aria-label="Instagram" component="a" href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#C13584', '&:hover': { transform: 'scale(1.1)' } }}>
                  <InstagramIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem' } }} />
                </IconButton>
                <IconButton aria-label="Facebook" component="a" href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" sx={{ color: '#1877F2', '&:hover': { transform: 'scale(1.1)' } }}>
                  <FacebookIcon sx={{ fontSize: { xs: '3rem', sm: '3.5rem' } }} />
                </IconButton>
                */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactUs;