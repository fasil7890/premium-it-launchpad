import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion } from 'framer-motion';

const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '6+', label: 'Countries Served' },
];

const Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? `
              linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
            `
            : `
              linear-gradient(rgba(8, 145, 178, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8, 145, 178, 0.03) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  component={motion.span}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
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
                  }}
                >
                  🚀 Transforming Businesses Since 2010
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Innovative IT Solutions for{' '}
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
                  Digital Excellence
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  mb: 4,
                  maxWidth: 600,
                  lineHeight: 1.8,
                }}
              >
                We deliver cutting-edge technology solutions that drive growth, 
                enhance efficiency, and transform your business for the digital age. 
                From enterprise software to AI-powered applications.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: '2rem', md: '3rem' },
                          fontWeight: 800,
                          background: isDark
                            ? 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)'
                            : 'linear-gradient(135deg, #0891B2 0%, #0F172A 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Floating Elements */}
              <Box
                component={motion.div}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                sx={{
                  position: 'absolute',
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  border: `2px solid ${isDark ? 'rgba(0, 212, 255, 0.2)' : 'rgba(8, 145, 178, 0.2)'}`,
                }}
              />
              <Box
                component={motion.div}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                sx={{
                  position: 'absolute',
                  width: 400,
                  height: 400,
                  borderRadius: '50%',
                  border: `1px solid ${isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(8, 145, 178, 0.1)'}`,
                }}
              />
              <Box
                component={motion.div}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 4,
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(124, 58, 237, 0.3) 100%)'
                    : 'linear-gradient(135deg, rgba(8, 145, 178, 0.3) 0%, rgba(124, 58, 237, 0.3) 100%)',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isDark
                    ? '0 20px 60px rgba(0, 212, 255, 0.2)'
                    : '0 20px 60px rgba(8, 145, 178, 0.2)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '4rem',
                    fontWeight: 800,
                    background: isDark
                      ? 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)'
                      : 'linear-gradient(135deg, #0891B2 0%, #0F172A 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  W
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
