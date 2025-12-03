import prisma from "../../../lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const nowWITA = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Makassar"
    });

    const created = new Date(nowWITA);
   
    const data = await prisma.tbl_queue.create({
      data: {
        queueNumber: Number(id),
        status: "PENDING",
        createdAt: created,
        date: created,
      },
    });

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}
