import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { textAlign } from '@mui/system';
import CardHeader from '../cardHeader/CardHeaderComponent';
import UiControl from '../uiControl/UiControl';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function CardComponent() {
  return (
    <Grid >
      <Card sx={{ minWidth: 275, maxWidth: 400, minHeight: 700, maxHeight: 700, marginLeft: 10, backgroundColor: '#826df7', boxShadow: 24 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25, textAlign: 'center', color: 'white' }} gutterBottom>
      <CardHeader />
      <UiControl />
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}