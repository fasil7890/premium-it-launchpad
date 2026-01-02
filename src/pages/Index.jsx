import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import ThemeProvider from '../theme/ThemeProvider';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import WizzoERP from '../components/WizzoERP';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Navbar />
        <Hero />
        <WhyUs />
        <Services />
        <Industries />
        <Technologies />
        <WizzoERP />
        <Partners />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
