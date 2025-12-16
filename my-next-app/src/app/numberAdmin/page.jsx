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

const ScanPage = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [tanggal, setTanggal] = useState(null);
  const [number, setNumber] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const damn = await getQueueNumberUser(4);
        console.log("damn");

        setNumber(damn);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        width: "100%",
        height:1000,
        display: "flex",
        padding:5,
        gap: 2,
        backgroundColor:'gray',
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <Grid container sx={{width:"100%"}} spacing={2}>
        {cards.map((card, index) => (
          <Grid key={card.id} size={3}>
            <Card key={card.id} sx={{minHeight:110}}> 
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScanPage;
