import React from 'react';
import Logo from '../assets/images/gymlogo2.png';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' px='40px' pt='24px' alignItems='center'>
        <img src={Logo} alt='logo' height='100px' width='100px' />
        <Typography variant='h6' pb='40px' mt='20px'>
          Made with ❤️ by David Kim 
        </Typography>
      </Stack>
    </Box>
  )
};

export default Footer;