import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/roboto/300.css';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export default function UiControl() {
  return (
    <Box sx={{ '& button': {m: 1, fontWeight: 'bold', color: 'white', boxShadow: 16,variant: 'contained', fontSize: 'large', backgroundColor: '#9c27b0', ':hover': {backgroundColor: '#bcf4de', color: 'black'}}, flexGrow: 1, paddingBottom: 4}}>
        <Button startIcon={<ColorLensIcon />}>
            Colour
        </Button>
        <Button startIcon={<RecordVoiceOverIcon />}>
            Audio
        </Button>
        <Button startIcon={<DirectionsWalkIcon />}>
            Movement Trigger
        </Button>
    </Box>
  );
}