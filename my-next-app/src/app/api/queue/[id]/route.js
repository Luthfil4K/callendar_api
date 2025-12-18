import prisma from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const lastPending = await prisma.tbl_queue.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(lastPending)

    const nowWITA = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Makassar"
    });

    const created = new Date(nowWITA);
   
    console.log(id)
    console.log(Number(id))
    const data = await prisma.tbl_queue.create({
      data: {
        queueNumber:id,
        clearStatus: lastPending.clearStatus == 1 ? 1 : 2,
        status: "PENDING",
        createdAt: created,
        date: created,
      },
    });
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({error: "Gagal mengambil data" }, { status: 500 });
  }
}
