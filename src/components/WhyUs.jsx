import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const reasons = [
  {
    icon: <SavingsOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Cost-effectiveness',
    description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line without compromising on quality.',
  },
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Innovative Technology',
    description: 'We stay up-to-date with the latest technology trends and offer innovative solutions that keep you ahead of the competition.',
  },
  {
    icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Industry Expertise',
    description: 'We specialize in serving specific industries with tailored solutions that meet your unique business needs and challenges.',
  },
  {
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Scalability',
    description: 'Scaling Up for Success: Unleashing your business potential with tailored software solutions that grow with you.',
  },
];

const WhyUs = () => {
  return (
    <Box
      id="whyus"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            What Sets Us{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Apart
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
            Partner with a team that combines technical excellence with business acumen 
            to deliver solutions that truly make a difference.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'primary.main',
                    }}
                  >
                    {reason.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {reason.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    {reason.description}
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

export default WhyUs;
