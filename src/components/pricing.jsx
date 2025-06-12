import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Material-UI Imports
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// Material-UI Icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // For included features
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'; // For excluded features (e.g., "No support")
import BusinessIcon from '@mui/icons-material/Business'; // Icon for Enterprise tier
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Icon for Starter tier
import DiamondIcon from '@mui/icons-material/Diamond'; // Icon for Lab Pro tier
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Icon for Researcher tier

const pricingTiers = [
  {
    id: 'starter',
    title: 'Starter',
    price: 'Free or $9/month',
    features: [
      { text: '1–2 tools (limited usage)', included: true },
      { text: 'No support', included: false },
      { text: 'Basic results only', included: true },
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    icon: StarBorderIcon,
  },
  {
    id: 'researcher',
    title: 'Researcher',
    price: '$29/month',
    features: [
      { text: 'Access to all tools', included: true },
      { text: 'Priority computation', included: true },
      { text: 'Save/export reports', included: true },
    ],
    buttonText: 'Start 14-Day Free Trial',
    buttonVariant: 'contained',
    buttonColor: 'primary',
    highlight: true, // To make it stand out
    icon: TrendingUpIcon,
  },
  {
    id: 'lab-pro',
    title: 'Lab Pro',
    price: '$99/month or $999/year',
    features: [
      { text: 'All tools + batch analysis', included: true },
      { text: 'Team accounts (3–5 users)', included: true },
      { text: 'Email support', included: true },
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    icon: DiamondIcon,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Custom Quote',
    features: [
      { text: 'On-prem deployment', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'API access + security SLAs', included: true },
    ],
    buttonText: 'Request a Quote',
    buttonVariant: 'outlined',
    buttonColor: 'secondary', // A different color for custom quote
    icon: BusinessIcon,
  },
];

export default function PricingSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: '#1a237e', mb: 6 }}
          data-aos="fade-up"
        >
          Flexible Plans for Every Research Need
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {pricingTiers.map((tier, i) => (
            <Grid item xs={12} sm={6} md={3} key={tier.id}>
              <Paper
                elevation={tier.highlight ? 8 : 2} // Higher elevation for highlight
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%', // Make cards equal height
                  borderRadius: '15px',
                  border: tier.highlight ? '2px solid #3498db' : '1px solid #e0e0e0', // Highlight border
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  },
                  bgcolor: tier.highlight ? '#e3f2fd' : 'background.paper', // Highlight background
                }}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {tier.icon && <tier.icon sx={{ fontSize: 60, color: tier.highlight ? '#3498db' : '#555', mb: 1.5 }} />}
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        {tier.title}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#3498db' }}>
                        {tier.price}
                    </Typography>
                    {tier.id === 'lab-pro' && (
                        <Typography variant="body2" color="text.secondary">
                            (Save $X/year with annual billing)
                        </Typography>
                    )}
                </Box>

                <List sx={{ flexGrow: 1, mb: 3 }}> {/* flexGrow to push button to bottom */}
                  {tier.features.map((feature, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                        {feature.included ? (
                          <CheckCircleOutlineIcon sx={{ color: '#28a745', fontSize: '1.2rem' }} /> // Green check for included
                        ) : (
                          <CancelOutlinedIcon sx={{ color: '#dc3545', fontSize: '1.2rem' }} /> // Red X for not included
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="body2" color="text.secondary">{feature.text}</Typography>}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant={tier.buttonVariant}
                  color={tier.buttonColor}
                  size="large"
                  fullWidth
                  sx={{
                    mt: 'auto', // Push button to the bottom
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    // Custom styles for specific buttons
                    ...(tier.id === 'researcher' && {
                        bgcolor: '#3498db',
                        color: 'white',
                        '&:hover': { bgcolor: '#2980b9' },
                    }),
                    ...(tier.id === 'enterprise' && {
                        bgcolor: 'transparent',
                        color: '#2c3e50',
                        borderColor: '#2c3e50',
                        '&:hover': { bgcolor: '#f0f0f0', borderColor: '#2c3e50' },
                    }),
                  }}
                  // You might link to a specific signup page or contact form
                  href={tier.id === 'enterprise' ? '/contact' : '/signup'}
                >
                  {tier.buttonText}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}