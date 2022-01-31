import React, { useEffect, useState } from "react";
import "../simulation/Simulation.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { height, textAlign } from "@mui/system";
import DisplayImage from "../images/bide_display.png";
import DisplayImageLight from "../images/bide_display_lights.png";
import Image from "mui-image";
import Container from "@mui/material/Container";
import { Avatar, dividerClasses } from "@mui/material";
import ForceUpdate from "use-force-update";
import useForceUpdate from "use-force-update";
import testAudio from "../audio/001.mp3";
import { Howl, Howler } from "howler";
import ReactHowler from "react-howler";

// const glow = {
//   boxShadow: "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff",
// };

// const notGlow = {
//   boxShadow: "",
// };

const glow = {
  display: "",
};

const notGlow = {
  display: "none",
};

export default function Simulation() {
  const [isGlow, setGlow] = React.useState("false");
  const [isPlaying, setPlaying] = React.useState("false");

  return (
    <>
      {/* <Card
      sx={{
        minWidth: 275,
        maxWidth: 400,
        minHeight: 250,
        maxHeight: 250,
        marginLeft: 10,
        position: "absolute",
        top: "300px",
        right: "600px",
        ...(!isGlow ? glow : notGlow),
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        className="image"
        component="img"
        height="210"
        style={{ transform: "scaleX(-1)", pointerEvents: "none" }}
        image={DisplayImage}
        alt="bide"
      />
      <Button onClick={() => setGlow("false")}>Test</Button>
    </Card> */}
      <Box
        sx={{
          // minWidth: 150,
          // maxWidth: 500,
          // minHeight: 100,
          // maxHeight: 500,
          // marginLeft: 10,
          position: "absolute",
          top: "200px",
          right: "800px",
          // ...(!isGlow ? glow : notGlow),
          backgroundColor: "transparent",
        }}
      >
        <img
          src={DisplayImage}
          height={"500px"}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
          }}
        />
        <img
          src={DisplayImageLight}
          height={"500px"}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            ...(!isGlow ? glow : notGlow),
          }}
        />
      </Box>
      <Button variant="contained" onClick={() => setGlow(!isGlow)}>
        TEST Light
      </Button>
      {/* <audio id="test" src={testAudio} type="audio/mp3"></audio> */}
      <ReactHowler
        src={testAudio}
        playing={!isPlaying}
        loop={false}
        onEnd={() => setPlaying(isPlaying)}
      />
      <Button variant="contained" onClick={() => setPlaying(!isPlaying)}>
        TEST audio
      </Button>
    </>

    // <Box
    //   component="img"
    //   sx={{
    //     minWidth: 275,
    //     maxWidth: 400,
    //     minHeight: 250,
    //     maxHeight: 250,
    //     marginLeft: 10,
    //     position: "absolute",
    //     top: "300px",
    //     right: "600px",
    //     boxShadow:
    //       "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff",
    //   }}
    //   alt="Simulation"
    //   src={Image}
    // />
  );
}
