import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { motion } from 'framer-motion';
import { useThemeMode } from '../theme/ThemeProvider';

const navItems = ['Services', 'Industries', 'Technologies', 'Partners', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleTheme } = useThemeMode();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: mode === 'dark' 
                      ? 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)'
                      : 'linear-gradient(135deg, #0891B2 0%, #0F172A 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '0.05em',
                  }}
                >
                  WIZZO
                </Typography>
              </motion.div>
              <Typography
                variant="caption"
                sx={{
                  ml: 1,
                  color: 'text.secondary',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                TECHNOLOGIES
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item)}
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        px: 2,
                        position: 'relative',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, #00D4FF, #7C3AED)',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover::after': {
                          width: '80%',
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
                
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    ml: 1,
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'rotate(180deg)',
                    },
                  }}
                >
                  {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                </IconButton>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 1 }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            )}

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={toggleTheme}
                  sx={{ color: 'text.secondary' }}
                >
                  {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            background: mode === 'dark'
              ? 'linear-gradient(180deg, #0A1628 0%, #0F2137 100%)'
              : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem
                onClick={() => scrollToSection(item)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: mode === 'dark' 
                      ? 'rgba(0, 212, 255, 0.1)'
                      : 'rgba(8, 145, 178, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: { color: 'text.secondary', fontWeight: 500 },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
