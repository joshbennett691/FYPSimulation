import { Button } from "@mui/material";
import React from "react";
import { Box, Stack } from "@mui/material";

const sxBox = {
  width: "100%",
  height: 500,
};
const sxBordered = {
  border: 1,
};

const sxDay = {
  backgroundColor: "yellow",
};

const glow = {
  boxShadow: "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff",
};

const notGlow = {
  boxShadow: "",
};

export default function ShadowTest() {
  const [isGlow, setGlow] = React.useState(true);
  return (
    <>
      <Stack className="test" spacing={2}>
        <h1>TEST</h1>
        <div>Click toggle button below</div>
        <Box
          sx={
            // Follow are applied unconditionally
            {
              ...sxBox,
              ...sxBordered,
              ...(isGlow ? glow : notGlow),
              ...sxDay,
            }

            // Follow sx applied when isDay === false
          }
        />
        <Button variant="contained" onClick={() => setGlow(!isGlow)}>
          Toggle
        </Button>
      </Stack>
    </>
  );
}
