"use client";

import { useEffect, useState } from "react";
import { Box, Card, Typography, Grid, Button, Chip } from "@mui/material";

export default function CardScanQueue({ dataQueue, selectedService }) {
  const [toView, setToView] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [currentQueue, setCurrentQueue] = useState("A012");

  useEffect(() => {
    // Simulate queue number updates
    const interval = setInterval(() => {
      const letters = ["A", "B", "C", "D"];
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      const randomNumber = String(Math.floor(Math.random() * 100)).padStart(
        3,
        "0",
      );

      setCurrentQueue(`${randomLetter}${randomNumber}`);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getServiceDisplay = () => {
    const services = {
      "Produk Statistik Berbayar": "✅ Layanan Produk Statistik Berbayar",
      "Layanan Perpustakaan": "📖 Layanan Perpustakaan",
      "Rekomendasi Statistik": "🔍 Layanan Rekomendasi Statistik",
      "Layanan Konsultasi Statistik": "👥 Layanan Konsultasi Statistik",
    };

    return (
      services[dataQueue?.jenisLayanan?.jenisLayanan] || "👥 Antrian Umum "
    );
  };

  console.log("dataQueue");
  console.log(dataQueue?.jenisLayanan);
  console.log("dataQueue");
  if (!mounted) return null;
  return (
    <Card
      sx={{
        minWidth: 600,
        maxWidth: 601,
        width: 600,
        height: 655,
        boxShadow: "0 5px 10px rgba(0,0,0,0.15)",
        p: 2,
        borderRadius: 4,
        border: "1px solid #e0e0e0",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        },
        position: "relative",
        overflow: "hidden",
        color: "",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-75%",
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
          transform: "skewX(-20deg)",
          animation: "shine 2.5s infinite",
        },

        "@keyframes shine": {
          "0%": { left: "-75%" },
          "100%": { left: "125%" },
        },
      }}
    >
      <div className="bg-white rounded-3xl p-12 pt-12 text-center space-y-8">
        {/* Header */}
        {dataQueue != "kosong" ? (
          <>
            <Box>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Sedang Melayani Nomor Antrian
                </p>

                <div className="my-12 text-9xl font-bold text-orange-400 font-sans tracking-tight">
                  {dataQueue?.jenisLayananId == 1
                    ? "A"
                    : dataQueue?.jenisLayananId == 2
                      ? "B"
                      : dataQueue?.jenisLayananId == 3
                        ? "C"
                        : dataQueue?.jenisLayananId == 4
                          ? "D"
                          : ""}
                  -{String(dataQueue?.dailyQueueNumber).padStart(3, "0")}
                </div>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-orange-600 rounded-full mx-auto"></div>

              {/* Service Info */}
              <div className="my-24 space-y-4">
                <p className="text-xl font-semibold text-gray-800">
                  {getServiceDisplay()}
                </p>

                <p className="my-2 text-gray-600 leading-relaxed">
                  Silahkan tunggu sampai nomor anda dipanggil. Staff kami akan
                  membantu anda pada meja pelayanan.
                </p>
              </div>
            </Box>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <div className="my-2 text-4xl font-bold text-orange-400 font-sans tracking-tight">
                Tidak ada antrian hari ini.
              </div>
              <div className="w-16 h-1 bg-orange-600 rounded-full mx-auto"></div>
              <Box
                sx={{
                  marginTop:10,
                  overflowX: "hidden",
                  minHeight: "300px",
                  height: "300px",
                  width: "280px",
                  maxWidth: "280px",
                  mx: "auto",  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: "url('/bung_itung_hd2-8.png')",
                  backgroundSize: "cover",
                  marginBottom:10
                }}
              ></Box>
            </div>
          </>
        )}

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: "450ms" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>
      </div>
    </Card>
  );
}
