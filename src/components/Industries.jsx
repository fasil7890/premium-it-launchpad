import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const industries = [
  { icon: <AccountTreeOutlinedIcon />, name: 'ERP Solutions' },
  { icon: <SmartToyOutlinedIcon />, name: 'AI & ML' },
  { icon: <FlightOutlinedIcon />, name: 'Travel' },
  { icon: <HotelOutlinedIcon />, name: 'Hospitality' },
  { icon: <StorefrontOutlinedIcon />, name: 'Retail' },
  { icon: <SchoolOutlinedIcon />, name: 'Education' },
  { icon: <LocalHospitalOutlinedIcon />, name: 'Healthcare' },
  { icon: <AccountBalanceOutlinedIcon />, name: 'Finance' },
  { icon: <DescriptionOutlinedIcon />, name: 'Document Mgmt' },
  { icon: <PrecisionManufacturingOutlinedIcon />, name: 'Manufacturing' },
  { icon: <ShoppingBagOutlinedIcon />, name: 'E-Commerce' },
];

const Industries = () => {
  return (
    <Box
      id="industries"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
            Industries We Serve
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Solving IT Challenges{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Every Day
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
            We bring deep industry expertise to deliver solutions that address 
            sector-specific challenges and unlock new opportunities.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {industries.map((industry, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  py: 3,
                  px: 2,
                  cursor: 'pointer',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 1.5,
                      '& svg': {
                        fontSize: 36,
                      },
                    }}
                  >
                    {industry.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  >
                    {industry.name}
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

export default Industries;
