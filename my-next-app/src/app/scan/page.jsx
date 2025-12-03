"use client";

import {useState, useEffect} from "react";
import { QRCodeSVG } from "qrcode.react";
import {getLatestQueue} from "../services/queue";

const ScanPage = () => {
  const [idAntrian, setIdAntrian] = useState(0)
  const waktu = new Date();
  const tanggal = waktu.getDate();

  useEffect(() => {
    console.log("tanggal:", tanggal);

    const fetchLatestQueue = async () => {
      try {
        const latest = await getLatestQueue();
        console.log("Latest queue:", latest);
        const date = new Date(latest.createdAt);

        const pad = (num) => String(num).padStart(2, "0");

        const formatted =
          date.getUTCFullYear().toString() +
          pad(date.getUTCMonth() + 1) +
          pad(date.getUTCDate()) +
          pad(date.getUTCHours()) +
          pad(date.getUTCMinutes()) +
          pad(date.getUTCSeconds());

        console.log(formatted); 
        setIdAntrian("localhost:3000/queue/"+formatted)
      } catch (err) {
        console.error("Error fetching latest queue:", err);
      }
    };

    fetchLatestQueue();
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <QRCodeSVG value={`https://google.com`} />
    </div>
  );
};

export default ScanPage;
