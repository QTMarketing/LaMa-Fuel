import { NextResponse } from "next/server";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL || "http://localhost:8080";

export async function GET() {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=9`, {
      // Ensure server-side fetch doesn't get cached unnecessarily during dev
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${res.status}` },
        { status: 502 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        // Allow browser to cache briefly if needed
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to reach WordPress" },
      { status: 500 }
    );
  }
}




