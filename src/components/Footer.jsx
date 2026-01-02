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
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: 4,
        backgroundColor: 'rgba(5, 12, 20, 0.95)',
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
          background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)',
        }}
      />

      <Container maxWidth="xl">
        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 8, md: 12 },
            p: { xs: 4, md: 8 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
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
                background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '& fieldset': {
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& input': {
                  color: 'white',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
          </Stack>
        </Box>

        {/* Footer Content */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)',
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
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Stack>
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
                (item) => (
                  <Typography
                    key={item}
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
                  <Typography
                    key={item}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  info@wizzo.tech
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +971 XX XXX XXXX
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  UAE | Saudi Arabia | India
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

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
                <Typography
                  key={item}
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
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
