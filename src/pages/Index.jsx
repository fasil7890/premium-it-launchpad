import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from '../theme/theme';
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
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
