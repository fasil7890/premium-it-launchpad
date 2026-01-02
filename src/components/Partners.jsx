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
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { motion } from 'framer-motion';

const partners = [
  { name: 'WIZZO Saudi', location: 'Saudi Arabia' },
  { name: 'WIZZO Dubai', location: 'UAE' },
  { name: 'Febno Technologies', location: 'Global' },
  { name: 'TSS Smart UAE', location: 'UAE' },
  { name: 'Coderythm Calicut', location: 'India' },
  { name: '3AnT Media Creation', location: 'Global' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Partners = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="partners"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.03) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at center, rgba(8, 145, 178, 0.03) 0%, transparent 60%)',
        }}
      />

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
              Our Network
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Partner{' '}
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
                With Us
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
              We collaborate with leading technology partners across the globe 
              to deliver comprehensive solutions.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={3} justifyContent="center">
            {partners.map((partner, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={motion.div}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                    }}
                    sx={{
                      textAlign: 'center',
                      py: 4,
                      px: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        component={motion.div}
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: isDark
                            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)'
                            : 'linear-gradient(135deg, rgba(8, 145, 178, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <PublicOutlinedIcon sx={{ color: 'primary.main' }} />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: '0.9rem',
                        }}
                      >
                        {partner.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {partner.location}
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

export default Partners;
