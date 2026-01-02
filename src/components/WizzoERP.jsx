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
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import { motion } from 'framer-motion';

const erpFeatures = [
  { icon: <InventoryOutlinedIcon />, name: 'Inventory' },
  { icon: <AccountBalanceWalletOutlinedIcon />, name: 'Accounts' },
  { icon: <FactoryOutlinedIcon />, name: 'Production' },
  { icon: <PointOfSaleOutlinedIcon />, name: 'Retail Sales' },
  { icon: <LocalShippingOutlinedIcon />, name: 'Distribution' },
  { icon: <GroupsOutlinedIcon />, name: 'HR Management' },
  { icon: <IntegrationInstructionsOutlinedIcon />, name: 'Integration' },
  { icon: <AnalyticsOutlinedIcon />, name: 'Analytics' },
];

const highlights = [
  'Real-Time ERP Integration',
  'Work Online/Offline',
  'Invoice Printing on the Go',
  'Sales Performance Tracking',
  'Customer History Access',
  'Simplified Admin Tasks',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const WizzoERP = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="erp"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(180deg, rgba(0, 212, 255, 0.02) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(8, 145, 178, 0.02) 0%, transparent 100%)',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
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
                Featured Product
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                WIZZO{' '}
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
                  EasyEnterprise
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontWeight: 400,
                }}
              >
                Base ERP V13.1
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                A comprehensive enterprise resource planning solution designed to 
                streamline your business operations. From inventory management to 
                HR, our ERP covers all aspects of your enterprise.
              </Typography>

              <Grid container spacing={2}>
                {highlights.map((highlight, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          component={motion.div}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.2,
                          }}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: isDark
                              ? 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)'
                              : 'linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)',
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Grid container spacing={2}>
                {erpFeatures.map((feature, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <motion.div variants={itemVariants}>
                      <Card
                        component={motion.div}
                        whileHover={{ 
                          scale: 1.05,
                          rotate: 2,
                        }}
                        sx={{
                          textAlign: 'center',
                          py: 3,
                          cursor: 'pointer',
                        }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Box
                            component={motion.div}
                            whileHover={{ scale: 1.2 }}
                            sx={{
                              color: 'primary.main',
                              mb: 1.5,
                              '& svg': {
                                fontSize: 32,
                              },
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              fontSize: '0.85rem',
                            }}
                          >
                            {feature.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WizzoERP;
