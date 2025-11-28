import prisma from "../../../lib/prisma";

export async function POST() {
  try {
    const data = await prisma.queue.create({
      data: {
        createdAt: new Date(),
      },
    });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
