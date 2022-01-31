import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "@fontsource/roboto/300.css";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NewCondition from "../NewCondition/NewCondition";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { textAlign } from "@mui/system";
import CardHeader from "../cardHeader/CardHeaderComponent";
import UiControl from "../uiControl/UiControl";
import AlarmIcon from "@mui/icons-material/Alarm";
import SnoozeIcon from "@mui/icons-material/Snooze";
import TextField from "@mui/material/TextField";
import ClockIcon from "@mui/icons-material/AccessTime";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
import PublishIcon from "@mui/icons-material/Publish";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import TimePicker from "@mui/lab/TimePicker";

const DisplayTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Input = styled("input")({
  display: "none",
  backgroundColor: "#9b27af",
  color: "#9b27af",
  m: 1,
  fontWeight: "bold",
  color: "#e7e7f7",
  boxShadow: 16,
  variant: "contained",
  fontSize: "large",
  backgroundColor: "#9c27b0",
  ":hover": { backgroundColor: "#bcf4de", color: "black" },
});

export default function NewConditionControl() {
  const [startValue, setStartValue] = React.useState(new Date());
  const [endValue, setEndValue] = React.useState(new Date());

  const conditionObj = {
    audio: "001.mp3",
    startTime: startValue,
    endTime: endValue,
  };

  function whenClicked() {
    console.log(conditionObj);
  }

  return (
    <Box
      sx={{
        "& button": {
          m: 1,
          fontWeight: "bold",
          color: "#e7e7f7",
          boxShadow: 16,
          variant: "contained",
          fontSize: "large",
          backgroundColor: "#9c27b0",
          ":hover": { backgroundColor: "#bcf4de", color: "black" },
        },
        flexGrow: 1,
        paddingBottom: 4,
      }}
    >
      <DisplayTip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={
          <React.Fragment>
            <Typography color="inherit">Upload Audio File</Typography>
            {"Upload a custom made audio for the audio output."}
          </React.Fragment>
        }
        followCursor
      >
        {/* <Button startIcon={<AudioFileIcon />}>
          <Input accept="image/*" multiple type="file" />
          Upload Audio File
        </Button> */}

        <label htmlFor="contained-button-file">
          <Input
            accept="audio/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            startIcon={<AudioFileIcon />}
            variant="contained"
            component="span"
            sx={{
              m: 1,
              fontWeight: "bold",
              color: "#e7e7f7",
              boxShadow: 16,
              variant: "contained",
              fontSize: "large",
              backgroundColor: "#9c27b0",
              ":hover": { backgroundColor: "#bcf4de", color: "black" },
            }}
          >
            Upload Audio
          </Button>
        </label>
      </DisplayTip>

      <div style={{ whiteSpace: "pre-wrap" }}>
        <p></p>
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Start Range"
          value={startValue}
          onChange={(newStartValue) => {
            setStartValue(newStartValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <div style={{ whiteSpace: "pre-wrap" }}>
          <p></p>
        </div>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="End Range"
          value={endValue}
          onChange={(newEndValue) => {
            setEndValue(newEndValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <DisplayTip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={
          <React.Fragment>
            <Typography color="inherit">Submit</Typography>
            {"Submit the new condition."}
          </React.Fragment>
        }
        followCursor
      >
        <Button startIcon={<PublishIcon />} onClick={whenClicked()}>
          Submit
        </Button>
      </DisplayTip>
    </Box>
  );
}
