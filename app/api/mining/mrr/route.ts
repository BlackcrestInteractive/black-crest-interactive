import { auth } from "@/auth";
import crypto from "crypto";
import { NextResponse } from "next/server";

const API_BASE = "https://www.miningrigrentals.com/api/v2";

function makeNonce() {
  return Date.now().toString();
}

function makeSignature(
  apiKey: string,
  apiSecret: string,
  nonce: string,
  endpoint: string
) {
  const signString = `${apiKey}${nonce}${endpoint}`;

  return crypto
    .createHmac("sha1", apiSecret)
    .update(signString)
    .digest("hex");
}

export async function GET() {
  const session = await auth();

  if (
    !session?.user ||
    session.user.id !== "blackcrest-owner" ||
    session.user.email !== process.env.OWNER_EMAIL
  ) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const apiKey = process.env.MRR_API_KEY;
  const apiSecret = process.env.MRR_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json(
      {
        connected: false,
        provider: "Mining Rig Rentals",
        mode: "missing-api-credentials",
        message:
          "MRR_API_KEY and MRR_API_SECRET are not configured on the server.",
      },
      { status: 503 }
    );
  }

  const endpoint = "/rental";
  const nonce = makeNonce();
  const signature = makeSignature(
    apiKey,
    apiSecret,
    nonce,
    endpoint
  );

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        "x-api-nonce": nonce,
        "x-api-sign": signature,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const text = await response.text();

    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          connected: false,
          provider: "Mining Rig Rentals",
          mode: "provider-error",
          status: response.status,
          message: "Mining Rig Rentals rejected the API request.",
          response: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      connected: true,
      provider: "Mining Rig Rentals",
      mode: "authenticated",
      data,
    });
  } catch {
    return NextResponse.json(
      {
        connected: false,
        provider: "Mining Rig Rentals",
        mode: "network-error",
        message: "Unable to reach Mining Rig Rentals.",
      },
      { status: 502 }
    );
  }
}
