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
import getQueueNumberUser from "../services/status";
import { GetAllQueueTodayAdmin } from "../services/queue";


const ScanPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [allQueue, setAllQueue] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);
  const [tanggal, setTanggal] = useState(null);
  const [number, setNumber] = useState(null);

  console.log

  const cards = [
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
    },
    {
      id: 3,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
    {
      id: 4,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
    {
      id: 5,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
    {
      id: 6,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
  ];

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


  return (
    isLoading ? <></> :
      <Box
        sx={{
          width: "100%",
          height: 1000,
          display: "flex",
          padding: 5,
          gap: 2,
          backgroundColor: 'gray',
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Grid container sx={{ width: "100%" }} spacing={2}>

          {allQueue ?
            allQueue.map((card, index) => (
              <Grid key={card.id} size={{ md: 2, sm: 2, xs: 1 }}>
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

                    <Button variant="outlined" color="success">Process</Button>
                    <Button variant="outlined" color="error" >Delete</Button>
                  </Grid>
                </Card>
              </Grid>
            ))
            : (<></>)}
        </Grid>
      </Box>

  );
};

export default ScanPage;
