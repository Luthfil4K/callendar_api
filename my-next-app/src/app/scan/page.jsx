"use client";

import {useState, useEffect} from "react";
import { QRCodeSVG } from "qrcode.react";
import {getLatestQueue} from "../services/queue";

const ScanPage = () => {
  const waktu = new Date();
  const tanggal = waktu.getDate();

  useEffect(() => {
    console.log("tanggal:", tanggal);

    const fetchLatestQueue = async () => {
      try {
        const latest = await getLatestQueue();
        console.log("Latest queue:", latest);
      } catch (err) {
        console.error("Error fetching latest queue:", err);
      }
    };

    fetchLatestQueue();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <QRCodeSVG value="localhost:3000/queue/6" />
    </div>
  );
};

export default ScanPage;
