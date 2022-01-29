import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import '@fontsource/roboto/300.css';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const DisplayTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

export default function UiControl() {
  return (
    <Box sx={{ '& button': {m: 1, fontWeight: 'bold', color: 'white', boxShadow: 16,variant: 'contained', fontSize: 'large', backgroundColor: '#9c27b0', ':hover': {backgroundColor: '#bcf4de', color: 'black'}}, flexGrow: 1, paddingBottom: 4}}>
        <DisplayTip title={
            <React.Fragment>
                <Typography color="inherit">Colour Selector</Typography>
                {'Change the colour output for when a trigger occurs.'}
            </React.Fragment>
        }>
            <Button startIcon={<ColorLensIcon />}>
            Colour
        </Button>
        </DisplayTip>
        
        <Button startIcon={<RecordVoiceOverIcon />}>
            Audio
        </Button>
        <Button startIcon={<DirectionsWalkIcon />}>
            Movement Trigger
        </Button>
    </Box>
  );
}