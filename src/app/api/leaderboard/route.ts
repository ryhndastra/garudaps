import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.api_leaderboard_url) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(process.env.api_leaderboard_url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Leaderboard Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 },
    );
  }
}
