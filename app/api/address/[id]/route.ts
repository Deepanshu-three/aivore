import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const addressId = body.id;

    if (!addressId) {
      return NextResponse.json({ message: "Address ID is required" }, { status: 400 });
    }

    await db.shipping.delete({
      where: { id: addressId },
    });

    return NextResponse.json({ message: "Address deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting address:", error);
    return NextResponse.json({ message: "Failed to delete address" }, { status: 500 });
  }
}
