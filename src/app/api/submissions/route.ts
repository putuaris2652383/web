import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";
import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { carbonSubmissions } from "@/lib/db/schema";

// Clamp a value into a safe numeric range; returns fallback for invalid input.
function num(value: unknown, { min = 0, max = 1_000_000, fallback = 0 } = {}): number {
  const n = typeof value === "string" ? Number(value) : (value as number);
  if (typeof n !== "number" || !Number.isFinite(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

function str(value: unknown, maxLen: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, maxLen);
  return trimmed.length ? trimmed : null;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const agentName = str(body.agentName, 120);
  if (!agentName) {
    return NextResponse.json({ message: "agentName is required" }, { status: 400 });
  }

  try {
    const [row] = await db
      .insert(carbonSubmissions)
      .values({
        agentName,
        agentGroup: str(body.agentGroup, 120),
        agentDate: str(body.agentDate, 40),
        totalScore: Math.round(num(body.totalScore, { max: 1000 })),
        totalAvoidedCo2e: num(body.totalAvoidedCO2e).toFixed(3),
        totalEmittedCo2e: num(body.totalEmittedCO2e).toFixed(3),
        favoriteTkp: str(body.favoriteTKP, 200),
        commitment: str(body.commitment, 500),
        tkp1Grams: num(body.tkp1_grams).toFixed(2),
        tkp2Grams: num(body.tkp2_grams).toFixed(2),
        tkp3Sheets: num(body.tkp3_sheets).toFixed(2),
        tkp4Km: num(body.tkp4_km).toFixed(2),
      })
      .returning({ id: carbonSubmissions.id });

    return NextResponse.json({ success: true, id: row.id }, { status: 201 });
  } catch (error) {
    console.error("[v0] Failed to save carbon submission:", error);
    return NextResponse.json({ message: "Failed to save submission" }, { status: 500 });
  }
}

// Listing is gated behind the existing password cookie so results aren't public.
export async function GET(request: NextRequest) {
  const cookies = cookie.parse(request.headers.get("cookie") || "");
  if (cookies.authToken !== "authenticated") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const rows = await db
      .select()
      .from(carbonSubmissions)
      .orderBy(desc(carbonSubmissions.createdAt))
      .limit(500);
    return NextResponse.json({ submissions: rows }, { status: 200 });
  } catch (error) {
    console.error("[v0] Failed to list carbon submissions:", error);
    return NextResponse.json({ message: "Failed to load submissions" }, { status: 500 });
  }
}
