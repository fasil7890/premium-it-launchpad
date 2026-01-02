import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: 4,
        backgroundColor: isDark ? 'rgba(5, 12, 20, 0.95)' : 'rgba(248, 250, 252, 0.98)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(8, 145, 178, 0.5), transparent)',
        }}
      />

      <Container maxWidth="xl">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 8, md: 12 },
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              background: isDark
                ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
              border: `1px solid ${isDark ? 'rgba(0, 212, 255, 0.2)' : 'rgba(8, 145, 178, 0.2)'}`,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              Ready to{' '}
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
                Transform
              </Box>{' '}
              Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Let's discuss how our technology solutions can drive growth and 
              efficiency for your organization.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                sx={{
                  width: { xs: '100%', sm: 300 },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                    '& fieldset': {
                      borderColor: isDark ? 'rgba(0, 212, 255, 0.3)' : 'rgba(8, 145, 178, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& input': {
                    color: 'text.primary',
                  },
                }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  Get Started
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>

        {/* Footer Content */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: isDark
                      ? 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)'
                      : 'linear-gradient(135deg, #0891B2 0%, #0F172A 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '0.05em',
                    mb: 0.5,
                  }}
                >
                  WIZZO
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  TECHNOLOGIES
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Delivering innovative IT solutions for over 14 years. 
                We transform businesses through technology, enabling growth 
                and digital excellence.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon].map(
                  (Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                          '&:hover': {
                            color: 'primary.main',
                            borderColor: 'primary.main',
                            backgroundColor: isDark ? 'rgba(0, 212, 255, 0.1)' : 'rgba(8, 145, 178, 0.1)',
                          },
                        }}
                      >
                        <Icon fontSize="small" />
                      </IconButton>
                    </motion.div>
                  )
                )}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 600, fontSize: '1rem' }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {['Web Development', 'Mobile Apps', 'Enterprise', 'E-Commerce', 'AI Solutions'].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {item}
                    </Typography>
                  </motion.div>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 600, fontSize: '1rem' }}
            >
              Company
            </Typography>
            <Stack spacing={1.5}>
              {['About Us', 'Careers', 'Blog', 'Partners', 'Contact'].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {item}
                    </Typography>
                  </motion.div>
                )
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 600, fontSize: '1rem' }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              {[
                { icon: <EmailOutlinedIcon />, text: 'info@wizzo.tech' },
                { icon: <PhoneOutlinedIcon />, text: '+971 XX XXX XXXX' },
                { icon: <LocationOnOutlinedIcon />, text: 'UAE | Saudi Arabia | India' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ color: 'primary.main', fontSize: 20 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', mb: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2024 WIZZO Technologies. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
              (item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
