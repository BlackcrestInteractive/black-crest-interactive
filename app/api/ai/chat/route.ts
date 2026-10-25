import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = String(body?.message || "").trim();

    if (!message) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    const response = await fetch("http://127.0.0.1:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen3:14b",
        stream: false,
        messages: [
          {
            role: "system",
            content:
              "You are Blackcrest Private AI, the private AI assistant inside the Blackcrest Interactive Owner Dashboard. Be accurate, capable and helpful.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`Ollama returned ${response.status}: ${details}`);
    }

    const data = await response.json();

    return NextResponse.json({
      reply: data?.message?.content || "No response was returned.",
    });
  } catch (error) {
    console.error("Blackcrest AI error:", error);

    return NextResponse.json(
      {
        error:
          "Blackcrest Private AI could not reach the local AI engine.",
      },
      { status: 500 }
    );
  }
}
