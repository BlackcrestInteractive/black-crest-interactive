import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function CardEmpireTycoonPage() {
  return (
    <BlackcrestGamePage
      title="CARD EMPIRE TYCOON"
      slug="card-empire-tycoon"
      status="EARLY ACCESS"
      tagline="BUILD THE ULTIMATE CARD BUSINESS."
      description="Open your own card shop, collect original fictional card sets, manage stock, serve collectors and grow into a worldwide retail empire."
      overviewTitle="BUILD YOUR CARD EMPIRE"
      overview="Start with a small store and grow through smart purchasing, pricing, customer service, rare discoveries and business expansion."
      genre="Business Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Your Card Shop",
        "Original Card Collections",
        "Customer Management",
        "Rare Discoveries",
        "Store Expansion",
        "Business Management",
      ]}
      features={[
        { title: "SHOP MANAGEMENT", description: "Build and manage your own trading-card store." },
        { title: "ORIGINAL CARD SETS", description: "Collect original Blackcrest fictional card designs." },
        { title: "RARE CARDS", description: "Discover increasingly valuable collectibles." },
        { title: "CUSTOMERS", description: "Serve collectors and develop your reputation." },
        { title: "MARKET MANAGEMENT", description: "Manage pricing, inventory and demand." },
        { title: "EXPANSION", description: "Grow from one store into a major retail empire." },
      ]}
    />
  );
}
