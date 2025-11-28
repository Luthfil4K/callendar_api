"use client";

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import getQueueNumberUser from "../services/status";

const ScanPage = () => {
  const [tanggal, setTanggal] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const damn = await getQueueNumberUser(4);
        console.log("damn")
      
        setNumber(damn)
      } catch(error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {}, []);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Tanggal Hari Ini
          </Typography>

          <Typography variant="h5" component="div">
            {"ssd"}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ScanPage;
