import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          MyQuran
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Codenesia
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
