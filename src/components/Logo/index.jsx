import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const IndexNavbar = () => {

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          height: 64,
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" color="error"
          sx={{
            height: '50%',
            borderRadius: '50px',
            mt: '1.35%'
          }}
        >
          Announcement
        </Button>
        <Typography
          sx={{
            color: '#fff',
            fontFamily: 'Arial',
            mt: '2%',
            ml: '1%'
          }}
        >
          How we're responding to COVID-19
        </Typography>
      </Box>
    </Box>
  );
};

export default IndexNavbar;