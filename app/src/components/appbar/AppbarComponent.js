import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/bide_logo.png'

export default function AppbarComponent() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 4 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
            <img src={logo} alt='logo' height={99} width={99}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}