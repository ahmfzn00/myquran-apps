import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <>
      <AppBar color="success" position="relative">
        <Toolbar>
          <Typography
            sx={{ fontStyle: "italic" }}
            variant="p"
            fontSize="12px"
            letterSpacing="1.5px"
            color="inherit"
            noWrap
          >
            Membaca Quran secara mudah
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
