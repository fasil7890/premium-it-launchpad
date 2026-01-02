import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { motion } from 'framer-motion';

const industries = [
  { icon: <AccountTreeOutlinedIcon />, name: 'ERP Solutions' },
  { icon: <SmartToyOutlinedIcon />, name: 'AI & ML' },
  { icon: <FlightOutlinedIcon />, name: 'Travel' },
  { icon: <HotelOutlinedIcon />, name: 'Hospitality' },
  { icon: <StorefrontOutlinedIcon />, name: 'Retail' },
  { icon: <SchoolOutlinedIcon />, name: 'Education' },
  { icon: <LocalHospitalOutlinedIcon />, name: 'Healthcare' },
  { icon: <AccountBalanceOutlinedIcon />, name: 'Finance' },
  { icon: <DescriptionOutlinedIcon />, name: 'Document Mgmt' },
  { icon: <PrecisionManufacturingOutlinedIcon />, name: 'Manufacturing' },
  { icon: <ShoppingBagOutlinedIcon />, name: 'E-Commerce' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Industries = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="industries"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography
              component="span"
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.75,
                borderRadius: 2,
                border: `1px solid ${isDark ? 'rgba(0, 212, 255, 0.3)' : 'rgba(8, 145, 178, 0.3)'}`,
                backgroundColor: isDark ? 'rgba(0, 212, 255, 0.05)' : 'rgba(8, 145, 178, 0.05)',
                color: 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              Industries We Serve
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Solving IT Challenges{' '}
              <Box
                component="span"
                sx={{
                  background: isDark
                    ? 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)'
                    : 'linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Every Day
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              We bring deep industry expertise to deliver solutions that address 
              sector-specific challenges and unlock new opportunities.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={2} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={motion.div}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isDark 
                        ? '0 10px 40px rgba(0, 212, 255, 0.2)'
                        : '0 10px 40px rgba(8, 145, 178, 0.15)',
                    }}
                    sx={{
                      textAlign: 'center',
                      py: 3,
                      px: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        component={motion.div}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        sx={{
                          color: 'primary.main',
                          mb: 1.5,
                          '& svg': {
                            fontSize: 36,
                          },
                        }}
                      >
                        {industry.icon}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.85rem',
                        }}
                      >
                        {industry.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Industries;
