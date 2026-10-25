
"use client";

import OwnerSessionLock from "./OwnerSessionLock";

import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    title: "Etsy Shop",
    icon: "🛍️",
    description: "Manage BlackcrestStore, publishing, financial reports and automation.",
    href: "/owner/etsy/hub",
  },
  {
    title: "Studio & Games",
    icon: "🎮",
    description: "Manage Blackcrest Interactive and your 10 games.",
    href: "/games",
  },
  {
    title: "Premium Cloud Mining",
    icon: "⛏️",
    description: "Access your existing mining platform.",
    href: "/owner/mining",
  },
  {
    title: "Mining Rig Rentals",
    icon: "⚡",
    description: "Manage your mining provider connections.",
    href: "/owner/mining",
  },
  {
    title: "Cryptocurrency Assets",
    icon: "₿",
    description: "Access mining assets and supported currencies.",
    href: "/owner/mining",
  },
  {
    title: "Investments",
    icon: "📈",
    description: "Access your investment management section.",
    href: "/owner/invest",
  },
  {
    title: "Tax Centre",
    icon: "🧾",
    description: "Review income, expenses, imports and tax records.",
    href: "/owner/tax",
  },
  {
    title: "HMRC",
    icon: "🏛️",
    description: "View HMRC readiness and connection status. Not connected.",
    href: "/owner/hmrc",
  },
  {
    title: "Blackcrest Bank",
    icon: "🏦",
    description: "Access your private personal banking dashboard.",
    href: "/owner/bank",
  },
  {
    title: "Blackcrest Private AI",
    icon: "🤖",
    description: "Access your private Blackcrest AI platform.",
    href: "/owner/ai",
  },
  {
    title: "Owner Administration",
    icon: "⚙️",
    description: "Manage your private Blackcrest workspace.",
    href: "/owner",
  },
];

export default function OwnerDashboard() {
  const [search, setSearch] = useState("");

  const filtered = sections.filter((section) =>
    section.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#080b12,#151b29)",
        color: "#ffffff",
        padding: "40px 24px",
        fontFamily: "Arial,sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid #a88745",
            paddingBottom: 25,
            marginBottom: 35,
          }}
        >
          <p style={{ color: "#d4af37", letterSpacing: 3 }}>
            BLACKCREST INTERACTIVE
          </p>

          <h1 style={{ fontSize: 36, marginBottom: 10 }}>
            Owner Dashboard
          </h1>

          <p style={{ color: "#aab2c3" }}>
            Your private Blackcrest Interactive management centre.
          </p>

          <Link
            href="/"
            style={{ color: "#d4af37" }}
          >
            ← Back to Website
          </Link>
        </header>

        <section
          style={{
            background: "#171e2c",
            border: "1px solid #a88745",
            borderRadius: 16,
            padding: 28,
            marginBottom: 30,
          }}
        >
          <h2 style={{ color: "#d4af37" }}>
            Welcome to Blackcrest Interactive
          </h2>

          <p style={{ color: "#cbd5e1" }}>
            Manage your studio, games, mining platform
            and private owner services from one dashboard.
          </p>
        </section>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search dashboard sections..."
          aria-label="Search dashboard sections"
          style={{
            width: "100%",
            padding: 15,
            background: "#101624",
            border: "1px solid #a88745",
            borderRadius: 10,
            color: "white",
            marginBottom: 30,
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: 20,
          }}
        >
          {filtered.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              style={{
                background: "#171e2c",
                border: "1px solid #354052",
                borderRadius: 14,
                padding: 25,
                textDecoration: "none",
                color: "white",
              }}
            >
              <div style={{ fontSize: 32 }}>
                {section.icon}
              </div>

              <h2 style={{ color: "#d4af37" }}>
                {section.title}
              </h2>

              <p style={{ color: "#aab2c3" }}>
                {section.description}
              </p>

              <span style={{ color: "#d4af37" }}>
                Open Section →
              </span>
            </Link>
          ))}
        </div>

        <footer
          style={{
            marginTop: 50,
            textAlign: "center",
            color: "#8892a6",
          }}
        >
          Blackcrest Interactive — Private Owner Portal
        </footer>
      </div>
    </main>
  );
}

