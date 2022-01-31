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
import AddIcon from "@mui/icons-material/Add";
import NewCondition from "../NewCondition/NewCondition";

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

export default function UiControl() {
  const [visible, setVisible] = React.useState(false);

  function click(e) {
    e.preventDefault();
    setVisible(true);
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
            <Typography color="inherit">Create Condition</Typography>
            {"Create a set of conditions to trigger output."}
          </React.Fragment>
        }
        followCursor
      >
        <Button
          onClick={(event) => {
            click(event);
          }}
          startIcon={<AddIcon />}
        >
          Create Condition
        </Button>
      </DisplayTip>

      <DisplayTip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={
          <React.Fragment>
            <Typography color="inherit">List Existing Conditions</Typography>
            {"Display all active conditions"}
          </React.Fragment>
        }
        followCursor
      >
        <Button
          onClick={(event) => {
            click(event);
          }}
          startIcon={<AddIcon />}
        >
          List Existing Conditions
        </Button>
      </DisplayTip>

      <DisplayTip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title={
          <React.Fragment>
            <Typography color="inherit">Trigger Movement Detector</Typography>
            {"Simulate the output from movement being detected."}
          </React.Fragment>
        }
        followCursor
      >
        <Button startIcon={<DirectionsWalkIcon />}>Movement Trigger</Button>
      </DisplayTip>

      {visible && <NewCondition />}
    </Box>
  );
}
