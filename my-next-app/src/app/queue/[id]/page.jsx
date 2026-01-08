"use client";
import React from "react";

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CardGuest from "@/app/components/CardGuest";

import getQueueNumberUser from "../../services/status";


const QueueMember = ({params}) => {
  const { id } = React.use(params);
  
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
     <CardGuest></CardGuest>
    </div>
  );
};

export default QueueMember;
