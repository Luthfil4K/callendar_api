import prisma from "../../../lib/prisma";

export async function POST(req, { params }) {
  try {
    const { id } = await params; // 
    const body = await req.json();
    const { jenisLayananId } = body;

    if (!jenisLayananId) {
      return Response.json(
        { error: "Jenis layanan wajib dipilih" },
        { status: 400 }
      );
    }

    
    const isExist = await prisma.tbl_queue.findFirst({
      where: {
        queueNumber: id.toString(),
      },
    });

    if (isExist) {
      return Response.json(isExist, { status: 200 });
    }

    
    const lastQueue = await prisma.tbl_queue.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Waktu sekarang WITA
    const nowWITA = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Makassar",
      })
    );

    let dailyQueueNumber = 1;

    if (lastQueue) {
      const createdAt = new Date(lastQueue.createdAt);

      const isSameDay =
        createdAt.getFullYear() === nowWITA.getFullYear() &&
        createdAt.getMonth() === nowWITA.getMonth() &&
        createdAt.getDate() === nowWITA.getDate();

      dailyQueueNumber = isSameDay
        ? lastQueue.dailyQueueNumber + 1
        : 1;
    }

    const created = new Date(nowWITA);

    const data = await prisma.tbl_queue.create({
      data: {
        queueNumber: id,
        clearStatus: lastQueue?.clearStatus == 1 ? 1 : 2,
        status: "PENDING",
        dailyQueueNumber,
        createdAt: created,
        date: created,
        jenisLayananId,
      },
    });

    return Response.json(data, { status: 200 });

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}