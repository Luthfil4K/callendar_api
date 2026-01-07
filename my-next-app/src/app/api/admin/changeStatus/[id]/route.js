import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const { type } = await req.json();

 
    const result = await prisma.tbl_queue.update({
      where: { id: Number(id) },
      data: { status: type },
    });

   

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}