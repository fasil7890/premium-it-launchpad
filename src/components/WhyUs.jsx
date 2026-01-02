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
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WhyUs = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
          background: isDark
            ? 'radial-gradient(ellipse, rgba(0, 212, 255, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(8, 145, 178, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
                  background: isDark
                    ? 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)'
                    : 'linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)',
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <CardContent>
                      <Box
                        component={motion.div}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 3,
                          background: isDark
                            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)'
                            : 'linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyUs;
