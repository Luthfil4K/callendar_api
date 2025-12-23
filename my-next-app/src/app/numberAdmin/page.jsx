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
import { updateStatusByAdmin } from "../services/queue";

const ScanPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allQueue, setAllQueue] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);
  const [tanggal, setTanggal] = useState(null);
  const [number, setNumber] = useState(null);

  const handleStatusByAdmin = async (id, typeOfChange) => {
    await updateStatusByAdmin({
      id,
      type: typeOfChange,
    });
  };



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const damn = await getQueueNumberUser(4);
  //       console.log("damn");
  //       setNumber(damn);
  //     } catch (error) {
  //       console.error("Gagal mengambil data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
    <Box
      sx={{
        width: "100%",
        height: 1000,
        display: "flex",
        padding: 5,
        gap: 2,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container display={"flex"} sx={{ width: "100%" }} spacing={2}>
        {allQueue ? (
          allQueue.map((card, index) => (
            <Grid key={card.id} size={{ md: 4, sm: 6, xs: 12 }}>
              <Card key={card.id} sx={{ minHeight: 110, p: 2 }}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? "" : undefined}
                  sx={{
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h5" component="div">
                      {card.queueNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.status}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Grid container spacing={4}>
                  <Button variant="outlined" color="success">
                    Process
                  </Button>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </Grid>
              </Card>
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};

export default ScanPage;
