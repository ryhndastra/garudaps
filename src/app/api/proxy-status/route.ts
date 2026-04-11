import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.api_online_status_url) {
    return NextResponse.json(
      { status: "offline", players: 0 },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(process.env.api_online_status_url, {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Gagal ambil data");

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { status: "offline", players: 0 },
      { status: 500 },
    );
  }
}
