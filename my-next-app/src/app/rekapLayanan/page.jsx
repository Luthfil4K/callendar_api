"use client";

import { useState, useEffect } from "react";
import { getAllQueueMonth } from "../services/queue";

import { Card, Grid, Box, Typography } from "@mui/material";
import { DataGrid, GridToolBar } from "@mui/x-data-grid";


import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const RekapLayanan = () => {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queue = await getAllQueueMonth();

        // Tambahkan nomor urut
        const dataWithNumber = queue.map((item, index) => ({
          ...item,
          id_no: index + 1,
        }));

        setMonthlyData(dataWithNumber);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    };

    fetchData();
  }, []);

  const totalBerbayar = monthlyData.filter(
    (item) => item.jenisLayananId === 1,
  ).length;

  const totalKonsultasi = monthlyData.filter(
    (item) => item.jenisLayananId === 2,
  ).length;

  const totalRekomendasi = monthlyData.filter(
    (item) => item.jenisLayananId === 3,
  ).length;

  const totalPerpustakaan = monthlyData.filter(
    (item) => item.jenisLayananId === 4,
  ).length;

  console.log("monthlyData");
  console.log(monthlyData);
  console.log(monthlyData);
  console.log(monthlyData);
  console.log("monthlyData");

  const columns = [
    {
      field: "id_no",
      headerName: "No",
      width: 80,
    },
    {
      field: "queueNumber",
      headerName: "ID Antrian",
      width: 180,
    },

    // {
    //   field: "dailyQueueNumber",
    //   headerName: "Antrian Harian",
    //   width: 140,
    // },
    {
      field: "jenisLayanan",
      headerName: "Jenis Layanan",
      width: 220,
      valueGetter: (value, row) => row.jenisLayanan?.jenisLayanan,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },

    {
      field: "createdAt",
      headerName: "Tanggal",
      width: 200,
      valueFormatter: (params) => {
        if (!params.value) return "";
        const date = new Date(params.value);

        // Gunakan nilai manual agar hasilnya konsisten di server & client
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}/${month}/${year} ${hours}:${minutes}`;
      },
    },
  ];

  return (
    <>
      <Grid container justifyContent="center" sx={{ mx: 8,height:800}} mt={4}>
        <Grid
          size={{ md: 12, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Grid>
        <Grid
          size={{ md: 12, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            mb={2}
            sx={{ color:"#3c495c", fontWeight: 600 }}
          >
            Rekap Layanan Bulan Ini
          </Typography>
        </Grid>

        <Grid container spacing={3} sx={{ px: 8, mb: 4 }}>
          {/* Produk Statistik Berbayar */}
          <Grid size={{ md: 3, xs: 12 }}>
            <Card sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, borderRadius:'12px', boxShadow:"0 4px 12px rgba(0,0,0,0.15)", minHeight:120, maxHeight:170 }}>
              <PaidIcon sx={{ fontSize: 40, color: "#2e7d32" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Produk Statistik Berbayar
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {totalBerbayar}
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Konsultasi Statistik */}
          <Grid size={{ md: 3, xs: 12 }}>
            <Card sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, borderRadius:'12px', boxShadow:"0 4px 12px rgba(0,0,0,0.15)", minHeight:120, maxHeight:170 }}>
              <SupportAgentIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Konsultasi Statistik
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {totalKonsultasi}
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Rekomendasi Statistik */}
          <Grid size={{ md: 3, xs: 12 }}>
            <Card sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, borderRadius:'12px', boxShadow:"0 4px 12px rgba(0,0,0,0.15)", minHeight:120, maxHeight:170 }}>
              <AssignmentTurnedInIcon sx={{ fontSize: 40, color: "#ed6c02" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Rekomendasi Statistik
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {totalRekomendasi}
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Perpustakaan */}
          <Grid size={{ md: 3, xs: 12 }}>
            <Card sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, borderRadius:'12px', boxShadow:"0 4px 12px rgba(0,0,0,0.15)", minHeight:120, maxHeight:170 }}>
              <MenuBookIcon sx={{ fontSize: 40, color: "#9c27b0" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Layanan Perpustakaan
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {totalPerpustakaan}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid size={{ md: 12, xs: 12 }} sx={{ px: 8 }}>
          <Card sx={{ boxShadow: "0 6px 20px rgba(0,0,0,0.15)", p: 3 }}>
            <Box sx={{ height: 600, width: "100%" }}>
              <DataGrid
                rows={monthlyData}
                columns={columns}
                pageSizeOptions={[10, 20, 30]}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 10, page: 0 },
                  },
                }}
                disableRowSelectionOnClick
                showToolbar 
              />
            </Box>
          </Card>
        </Grid>
        <Grid size={{ md: 12, xs: 12 }}>
            <Box sx={{ height: 100, width: "100%" }}>
            
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RekapLayanan;
