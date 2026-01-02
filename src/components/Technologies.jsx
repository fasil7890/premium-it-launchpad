import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Java', category: 'Backend' },
  { name: 'Android', category: 'Mobile' },
  { name: 'React JS', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Python', category: 'AI/ML' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Firestore', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
];

const categoryColors = {
  Backend: { bg: 'rgba(0, 212, 255, 0.1)', border: 'rgba(0, 212, 255, 0.3)', text: '#00D4FF' },
  Mobile: { bg: 'rgba(124, 58, 237, 0.1)', border: 'rgba(124, 58, 237, 0.3)', text: '#A78BFA' },
  Frontend: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', text: '#10B981' },
  'AI/ML': { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)', text: '#F59E0B' },
  Database: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', text: '#EF4444' },
};

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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Technologies = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="technologies"
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: isDark ? 'rgba(15, 33, 55, 0.3)' : 'rgba(248, 250, 252, 0.8)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? `
              radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)
            `
            : `
              radial-gradient(circle at 25% 25%, rgba(8, 145, 178, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)
            `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
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
                Our Tech Stack
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Core{' '}
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
                  Technologies
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                We leverage cutting-edge technologies to build robust, scalable, 
                and future-proof solutions. Our team stays current with industry 
                best practices and emerging technologies.
              </Typography>
              
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {['Backend', 'Mobile', 'Frontend', 'AI/ML', 'Database'].map((cat) => (
                  <motion.div
                    key={cat}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip
                      label={cat}
                      size="small"
                      sx={{
                        backgroundColor: categoryColors[cat].bg,
                        borderColor: categoryColors[cat].border,
                        color: categoryColors[cat].text,
                        border: '1px solid',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Grid container spacing={2}>
                {technologies.map((tech, index) => {
                  const colors = categoryColors[tech.category];
                  return (
                    <Grid item xs={6} sm={4} key={index}>
                      <motion.div variants={itemVariants}>
                        <Box
                          component={motion.div}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 10px 30px ${colors.bg}`,
                          }}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            background: isDark
                              ? 'linear-gradient(145deg, rgba(15, 33, 55, 0.9) 0%, rgba(10, 22, 40, 0.95) 100%)'
                              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
                            border: `1px solid ${isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(8, 145, 178, 0.1)'}`,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            textAlign: 'center',
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 0.5,
                              color: colors.text,
                            }}
                          >
                            {tech.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.7rem',
                            }}
                          >
                            {tech.category}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
