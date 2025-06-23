import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import Header from '../components/header';
import Footer from '../components/footer';

const Privacy = () => {
  return (
    <>
      <Header />
      <Box sx={{ py: 8, px: 2, backgroundColor: '#f9fbfd', minHeight: '100vh' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
            Last updated: June 23, 2025
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            NeuraMedix respects your privacy. This Privacy Policy explains how we collect, use, and protect your
            personal data when you use our services or visit our website.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            2. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect the following types of information:
          </Typography>
          <ul>
            <li><strong>Account Information:</strong> email address, username, password (hashed)</li>
            <li><strong>Usage Data:</strong> services used, timestamps, interactions</li>
            <li><strong>Device Info:</strong> browser, IP address, OS type</li>
            <li><strong>Optional Data:</strong> feedback, support messages</li>
          </ul>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            3. How We Use Your Data
          </Typography>
          <Typography variant="body1" paragraph>
            We use your data to:
          </Typography>
          <ul>
            <li>Provide access to our AI tools</li>
            <li>Improve user experience and platform performance</li>
            <li>Send updates and technical notices (opt-in only)</li>
            <li>Respond to support inquiries</li>
          </ul>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            4. Data Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do <strong>not</strong> sell your data. We may share minimal data with trusted service providers
            (e.g., hosting, analytics) who comply with strict data protection standards.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            5. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We use encryption, access control, and secure servers to protect your information. However, no system is
            100% secure. You are responsible for keeping your credentials confidential.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            6. Cookies & Analytics
          </Typography>
          <Typography variant="body1" paragraph>
            NeuraMedix uses cookies and third-party analytics (e.g., Google Analytics) to monitor usage and improve
            services. You can disable cookies via browser settings.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            7. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You may request access, correction, or deletion of your personal data at any time by emailing
            us. If you’re located in the EU, you have additional rights under GDPR.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            8. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            NeuraMedix is not intended for users under the age of 16. We do not knowingly collect personal data from
            minors.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            9. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this policy as needed. Significant changes will be announced via email or site notice.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            10. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this policy, please contact us at:{' '}
            <strong>privacy@neuramedix.com</strong>.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Privacy;
