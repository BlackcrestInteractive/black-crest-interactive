"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  ["💬", "New Chat"],
  ["🔎", "Search"],
  ["🕘", "Recents"],
  ["📁", "Projects"],
  ["📚", "Library"],
  ["⏱️", "Scheduled"],
  ["🔌", "Plugins"],
  ["🖼️", "Images"],
  ["🌐", "Sites"],
  ["💻", "Coding"],
  ["🤖", "Agents"],
  ["⚙️", "Settings"],
];

export default function PrivateAIPlatformPage() {
  const [active, setActive] = useState("New Chat");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);

  async function sendMessage() {
    const prompt = message.trim();
    if (!prompt || sending) return;

    setSending(true);
    setReply("");

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed.");
      }

      setReply(data.reply || "No response was returned.");
    } catch (error) {
      setReply(error instanceof Error ? error.message : "AI request failed.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070b",
        color: "#f8fafc",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          minHeight: "100vh",
        }}
      >
        <aside
          style={{
            borderRight: "1px solid #1e293b",
            padding: 22,
            background: "#080b11",
          }}
        >
          <Link
            href="/owner"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            ← Owner Dashboard
          </Link>

          <div style={{ marginTop: 30, marginBottom: 28 }}>
            <div
              style={{
                color: "#60a5fa",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.4,
              }}
            >
              BLACKCREST INTERACTIVE
            </div>

            <h2 style={{ margin: "8px 0 0", fontSize: 21 }}>
              Private AI
            </h2>
          </div>

          <nav style={{ display: "grid", gap: 7 }}>
            {tools.map(([icon, label]) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                style={{
                  width: "100%",
                  border: active === label
                    ? "1px solid #334155"
                    : "1px solid transparent",
                  borderRadius: 10,
                  background: active === label ? "#111827" : "transparent",
                  color: active === label ? "#ffffff" : "#cbd5e1",
                  padding: "11px 12px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                <span style={{ marginRight: 10 }}>{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div
            style={{
              marginTop: 35,
              borderTop: "1px solid #1e293b",
              paddingTop: 20,
              color: "#64748b",
              fontSize: 12,
              lineHeight: 1.6,
            }}
          >
            Private owner-only AI workspace
          </div>
        </aside>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <header
            style={{
              height: 70,
              borderBottom: "1px solid #1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 28px",
            }}
          >
            <div>
              <strong>{active}</strong>
              <div
                style={{
                  color: "#64748b",
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                Blackcrest Private Intelligence System
              </div>
            </div>

            <div
              style={{
                border: "1px solid #1e293b",
                borderRadius: 20,
                padding: "7px 12px",
                color: "#94a3b8",
                fontSize: 12,
              }}
            >
              ● Private
            </div>
          </header>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 820,
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ fontSize: 46, marginBottom: 14 }}>✦</div>

                <h1
                  style={{
                    fontSize: 34,
                    margin: 0,
                  }}
                >
                  What would you like to build?
                </h1>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 16,
                    lineHeight: 1.6,
                  }}
                >
                  Chat, research, code, create websites, build applications,
                  work with files and run intelligent agents from one private
                  workspace.
                </p>
              </div>

              <div
                style={{
                  border: "1px solid #334155",
                  background: "#0b1018",
                  borderRadius: 20,
                  padding: 14,
                }}
              >
                {reply && (
        <div
          style={{
            marginBottom: 16,
            padding: 16,
            border: "1px solid #334155",
            borderRadius: 16,
            background: "#111827",
            color: "#f8fafc",
            whiteSpace: "pre-wrap",
            lineHeight: 1.6,
          }}
        >
          {reply}
        </div>
      )}

      <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Blackcrest AI anything..."
                  rows={4}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    resize: "none",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#f8fafc",
                    fontSize: 16,
                    padding: 10,
                    fontFamily: "inherit",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px 6px 2px",
                  }}
                >
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      style={{
                        border: "1px solid #334155",
                        background: "#111827",
                        color: "#cbd5e1",
                        borderRadius: 20,
                        padding: "8px 12px",
                      }}
                    >
                      + Files
                    </button>

                    <button
                      type="button"
                      style={{
                        border: "1px solid #334155",
                        background: "#111827",
                        color: "#cbd5e1",
                        borderRadius: 20,
                        padding: "8px 12px",
                      }}
                    >
                      Tools
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={sendMessage}
                    disabled={!message.trim() || sending}
                    style={{
                      border: "none",
                      background: message.trim() ? "#f8fafc" : "#334155",
                      color: message.trim() ? "#05070b" : "#94a3b8",
                      borderRadius: "50%",
                      width: 42,
                      height: 42,
                      cursor: message.trim() ? "pointer" : "default",
                      fontSize: 18,
                    }}
                  >
                    ↑
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 10,
                  marginTop: 18,
                }}
              >
                {[
                  "Build a website",
                  "Write code",
                  "Create an image",
                  "Start a project",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setMessage(item)}
                    style={{
                      border: "1px solid #1e293b",
                      background: "#080b11",
                      color: "#94a3b8",
                      borderRadius: 12,
                      padding: 13,
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
