import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: '#00D4FF',
              light: '#5CE1FF',
              dark: '#00A8CC',
              contrastText: '#0A1628',
            },
            secondary: {
              main: '#7C3AED',
              light: '#A78BFA',
              dark: '#5B21B6',
            },
            background: {
              default: '#0A1628',
              paper: '#0F2137',
            },
            text: {
              primary: '#FFFFFF',
              secondary: '#94A3B8',
            },
            divider: 'rgba(0, 212, 255, 0.12)',
          }
        : {
            primary: {
              main: '#0891B2',
              light: '#22D3EE',
              dark: '#0E7490',
              contrastText: '#FFFFFF',
            },
            secondary: {
              main: '#7C3AED',
              light: '#A78BFA',
              dark: '#5B21B6',
            },
            background: {
              default: '#F8FAFC',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#0F172A',
              secondary: '#64748B',
            },
            divider: 'rgba(8, 145, 178, 0.12)',
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1rem',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '12px 28px',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          },
          containedPrimary: ({ theme }) => ({
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #00D4FF 0%, #00A8CC 100%)'
                : 'linear-gradient(135deg, #0891B2 0%, #0E7490 100%)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 4px 20px rgba(0, 212, 255, 0.3)'
                : '0 4px 20px rgba(8, 145, 178, 0.3)',
            '&:hover': {
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #5CE1FF 0%, #00D4FF 100%)'
                  : 'linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 6px 30px rgba(0, 212, 255, 0.5)'
                  : '0 6px 30px rgba(8, 145, 178, 0.4)',
              transform: 'translateY(-2px)',
            },
          }),
          outlinedPrimary: ({ theme }) => ({
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(0, 212, 255, 0.1)'
                  : 'rgba(8, 145, 178, 0.1)',
            },
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(145deg, rgba(15, 33, 55, 0.9) 0%, rgba(10, 22, 40, 0.95) 100%)'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
            backdropFilter: 'blur(10px)',
            border:
              theme.palette.mode === 'dark'
                ? '1px solid rgba(0, 212, 255, 0.1)'
                : '1px solid rgba(8, 145, 178, 0.1)',
            transition: 'all 0.3s ease',
            boxShadow:
              theme.palette.mode === 'dark'
                ? 'none'
                : '0 4px 20px rgba(0, 0, 0, 0.05)',
            '&:hover': {
              border:
                theme.palette.mode === 'dark'
                  ? '1px solid rgba(0, 212, 255, 0.3)'
                  : '1px solid rgba(8, 145, 178, 0.3)',
              transform: 'translateY(-4px)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                  : '0 20px 40px rgba(0, 0, 0, 0.1)',
            },
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
          outlined: ({ theme }) => ({
            borderColor:
              theme.palette.mode === 'dark'
                ? 'rgba(0, 212, 255, 0.5)'
                : 'rgba(8, 145, 178, 0.5)',
            color: theme.palette.primary.main,
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            background:
              theme.palette.mode === 'dark'
                ? 'rgba(10, 22, 40, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom:
              theme.palette.mode === 'dark'
                ? '1px solid rgba(0, 212, 255, 0.1)'
                : '1px solid rgba(8, 145, 178, 0.1)',
          }),
        },
      },
    },
  });

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
