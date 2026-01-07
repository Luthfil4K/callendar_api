import React from "react";
import { useState, useEffect } from "react";
import { updateStatusByAdmin } from "../services/status";

import { Card, Typography, Grid, Button, Chip } from "@mui/material";

const CardDashboard = (data) => {
  return (
    <Card
      sx={{
        height: 175,
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
        <Grid size={{ md: 12, xs: 12 }}>
          <Typography variant="h6">2</Typography>
        </Grid>
        <Grid size={{ md: 12, xs: 12 }}>
          <Typography>Waiting</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardDashboard;
