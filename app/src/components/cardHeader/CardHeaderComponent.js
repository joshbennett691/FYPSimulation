import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/bide_logo.png'
import '@fontsource/roboto/300.css';

export default function CardHeaderComponent() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 4 }}>
      <AppBar position="static" color='secondary'>
        <Typography sx={{ fontSize: 45, textAlign: 'center', color: 'white', fontFamily: 'tahoma', boxShadow: 24 }}>
          Menu
        </Typography>
      </AppBar>
    </Box>
  );
}