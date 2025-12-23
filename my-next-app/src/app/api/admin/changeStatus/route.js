import prisma from "../../../lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id, type } = params;
    
    const queueToday = await prisma.tbl_queue.update({
      where: {
        status: "PENDING",
        createdAt: {
          gte: awalUTC,
          lt: akhirUTC,
        }
      },
    });

    return Response.json(queueToday, { status: 200 });
  } catch (error) {
    console.error(error);
    console.log(error);
    return Response.json({ error: "Gagal mengambil data: ",error }, { status: 500 });
  }
}
