import prisma from "../../../lib/prisma";


export async function GET(req, { params }) {
  try {
    const { id } = await params;   

    const data = await prisma.tbl_queue.findMany({
      where: { id: Number(id) },
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

