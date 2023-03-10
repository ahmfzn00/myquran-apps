import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { Stack } from "@mui/material";

export default function Main() {
  const [data, setData] = useState([]);

  const getDataQuran = async () => {
    const response = await axios("https://equran.id/api/surat");
    setData(response.data);
  };

  useEffect(() => {
    getDataQuran();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
        rel="stylesheet"
      />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 1,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h3"
            fontFamily="comfortaa"
            align="center"
            letterSpacing="1px"
            fontWeight="700"
            color="text.success"
            gutterBottom
          >
            MyQuran Apps
          </Typography>
          <Typography
            variant="p"
            fontSize="20px"
            align="center"
            letterSpacing="1px"
            color="text.secondary"
            paragraph
          >
            Setiap muslim dapat membaca Al-Quran dimanapun dan kapanpun.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data.map((data) => {
            return (
              <Grid item key={data.nomor} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontSize="32px" mb="20px" textAlign="center">
                      {data.nama}
                    </Typography>
                    <Typography
                      textAlign="center"
                      fontSize="15px"
                      gutterBottom
                      variant="p"
                      component="p"
                    >
                      Surah {data.nama_latin}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        color="white"
                        p="5px"
                        bgcolor="green"
                        borderRadius="5px"
                        fontSize="7px"
                        letterSpacing="1px"
                      >
                        {data.tempat_turun.toUpperCase()}
                      </Typography>
                      <Typography
                        marginLeft="5px"
                        p="5px"
                        color="white"
                        bgcolor="teal"
                        borderRadius="5px"
                        fontSize="7px"
                        letterSpacing="1px"
                      >
                        {data.arti.toUpperCase()}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
