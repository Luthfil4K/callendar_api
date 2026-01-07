"use client";

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import { GetAllQueueTodayAdmin } from "../services/queue";

import CardQueue from "../components/CardQueue";
import CardDashboard from "../components/CardDashboard";

const ScanPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allQueue, setAllQueue] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);
  const [tanggal, setTanggal] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const queue = await GetAllQueueTodayAdmin();
        setAllQueue(queue);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <Box
        sx={{
          backgroundColor:'red',
          width: "100%",
          display: "flex",
          backgroundColor:'red',
          padding: 5,
          gap: 2,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid size={{ md: 12, sm: 12, xs: 12 }}>
            <CardDashboard></CardDashboard>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 1000,
          display: "flex",
       
          padding: 5,
          gap: 2,
          backgroundColor: "white",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid size={{ md: 12, sm: 12, xs: 12 }}>
            <Grid container display={"flex"} sx={{ width: "100%" }} spacing={2}>
              {allQueue ? (
                allQueue.map((card, index) => (
                  <Grid key={card.id} size={{ md: 4, sm: 12, xs: 12 }}>
                    <CardQueue data={card}></CardQueue>
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ScanPage;
