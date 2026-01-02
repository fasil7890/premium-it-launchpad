import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const services = [
  {
    icon: <WebOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Web Application',
    description: 'Custom web applications built with modern frameworks for optimal performance and user experience.',
    popular: true,
  },
  {
    icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage your users.',
  },
  {
    icon: <DesktopWindowsOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Desktop Application',
    description: 'Powerful desktop solutions for Windows, macOS, and Linux tailored to your workflow.',
  },
  {
    icon: <BusinessOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Enterprise Solution',
    description: 'Comprehensive enterprise software that streamlines operations and boosts productivity.',
    popular: true,
  },
  {
    icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'E-Commerce',
    description: 'Empowering businesses through seamless e-commerce solutions with secure payment integration.',
  },
  {
    icon: <CodeOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Software Outsourcing',
    description: 'Dedicated development teams and staff augmentation to accelerate your projects.',
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Technical Support',
    description: '24/7 technical support and maintenance to keep your systems running smoothly.',
  },
  {
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align IT initiatives with business objectives.',
  },
  {
    icon: <CloudOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Cloud Solutions',
    description: 'Cloud migration, infrastructure management, and optimization services.',
  },
  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    popular: true,
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: 'rgba(15, 33, 55, 0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at right, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            component="span"
            sx={{
              display: 'inline-block',
              px: 2,
              py: 0.75,
              borderRadius: 2,
              border: '1px solid rgba(0, 212, 255, 0.3)',
              backgroundColor: 'rgba(0, 212, 255, 0.05)',
              color: 'primary.main',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Comprehensive{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              IT Solutions
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
            From concept to deployment, we offer end-to-end technology services 
            that empower your business to thrive in the digital landscape.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  position: 'relative',
                }}
              >
                {service.popular && (
                  <Chip
                    label="Popular"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
                      color: 'white',
                      fontSize: '0.65rem',
                      height: 20,
                    }}
                  />
                )}
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1.5,
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.8rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
