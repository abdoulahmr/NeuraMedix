import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// Remove this import if styling is fully managed by MUI or global CSS
// import "./../assets/benefits.css";

import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// Material-UI Icons - choose the most fitting ones for each benefit
import TimerIcon from '@mui/icons-material/Timer'; // For 'Save Hours'
import VerifiedIcon from '@mui/icons-material/Verified'; // For 'High Accuracy'
import WidgetsIcon from '@mui/icons-material/Widgets'; // For 'All-in-One'
import LockIcon from '@mui/icons-material/Lock'; // For 'Privacy First'
import BarChartIcon from '@mui/icons-material/BarChart'; // For 'Visual + Quantitative'
import LinkIcon from '@mui/icons-material/Link'; // For 'Lab Integration'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Used for the default check icon

const benefitsData = [
  {
    icon: TimerIcon, // Replaced emoji with MUI Icon component
    title: "Save Hours",
    description: "Dramatically reduce the time spent on manual analysis with automation, freeing up valuable research time.",
  },
  {
    icon: VerifiedIcon, // Replaced emoji
    title: "High Accuracy",
    description: "Improve diagnostic confidence and research outcomes with reliable, AI-driven predictions and analyses.",
  },
  {
    icon: WidgetsIcon, // Replaced emoji
    title: "All-in-One Platform",
    description: "Access all your essential biomedical research and analysis tools conveniently from a single, integrated interface.",
  },
  {
    icon: LockIcon, // Replaced emoji
    title: "Privacy First Security",
    description: "Your sensitive data remains secure and compliant with the highest lab and industry privacy standards.",
  },
  {
    icon: BarChartIcon, // Replaced emoji
    title: "Visual & Quantitative Insights",
    description: "Gain deeper understanding with rich visual outputs like charts and heatmaps, alongside precise quantitative data.",
  },
  {
    icon: LinkIcon, // Replaced emoji
    title: "Seamless Lab Integration",
    description: "Integrate NeuraMedix easily into your existing laboratory workflows and data pipelines for a smooth transition.",
  },
];

export default function BenefitsSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Box sx={{ bgcolor: '#e3f2fd', py: 8 }} data-aos="fade-up"> {/* Apply AOS to the Box itself */}
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: '#1a237e', mb: 6 }}
        >
          Why Researchers Love NeuraMedix
        </Typography>
        <Grid container spacing={4}>
          {/* First column for benefits */}
          <Grid item xs={12} md={6}>
            <List>
              {benefitsData.slice(0, 3).map((benefit, i) => (
                <ListItem key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <ListItemIcon>
                    {/* Render the MUI Icon component */}
                    <benefit.icon color="primary" sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h6">{benefit.title}</Typography>}
                    secondary={benefit.description}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          {/* Second column for benefits */}
          <Grid item xs={12} md={6}>
            <List>
              {benefitsData.slice(3, 6).map((benefit, i) => (
                <ListItem key={i} data-aos="fade-up" data-aos-delay={(i + 3) * 100}> {/* Adjust delay for second column */}
                  <ListItemIcon>
                    {/* Render the MUI Icon component */}
                    <benefit.icon color="primary" sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h6">{benefit.title}</Typography>}
                    secondary={benefit.description}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}