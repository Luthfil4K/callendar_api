import React from "react";
import { Card, Typography, Grid, Button, Chip } from "@mui/material";

const CardGuest = () => {
  return (
    <>
      <Card
        sx={{
          minWidth: 200,
          height: 485,
          p: 2,
          borderRadius: 4,
          border: "1px solid #e0e0e0", // abu-abu border
          boxShadow: "none", // default tanpa shadow
          transition: "all 0.2s ease", // animasi halus
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography sx={{ textAlign: "center", fontWeight: 100 }}>
              NOMOR ANTRIAN ANDA
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography
              sx={{ textAlign: "center", fontSize: 32, fontWeight: 700 }}
            >
              A-012
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{
              marginTop: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Chip label={"this is Chip"}></Chip>
          </Grid>
          <Grid sx={{ marginTop: 4 }} size={{ xs: 6, md: 6 }}>
            <Card
              sx={{
                minWidth: 50,
                height: 85,
                p: 2,
                borderRadius: 4,
                border: "1px solid #e0e0e0", // abu-abu border
              }}
            >
              <Typography sx={{ fontWeight: 600 }} variant="h5">
                3
              </Typography>
              <Typography variant="body2">people</Typography>
            </Card>
          </Grid>
          <Grid sx={{ marginTop: 4 }} size={{ xs: 6, md: 6 }}>
            <Card
              sx={{
                minWidth: 30,
                height: 85,
                p: 2,
                borderRadius: 4,
                border: "1px solid #e0e0e0", // abu-abu border
                boxShadow: "none", // default tanpa shadow
              }}
            >
              <Typography sx={{ fontWeight: 600 }} variant="h5">
                15 Minutes
              </Typography>
              <Typography variant="body2">people</Typography>
            </Card>
          </Grid>
          <Grid xs={{ md: 12, xs: 12 }}></Grid>
          <Grid xs={{ md: 12, xs: 12 }}>
            <Button
              fullWidth
              variant="contained"
              color="white"
              sx={{ fontColor: "gray" }}
            >
              {" "}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CardGuest;
