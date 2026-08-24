import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function CarTycoonLegacyPage() {
  return (
    <BlackcrestGamePage
      title="CAR TYCOON"
      titleAccent="LEGACY"
      slug="car-tycoon-legacy"
      status="EARLY ACCESS"
      tagline="BUILD. MANUFACTURE. DOMINATE."
      description="Build your automotive empire from the ground up. Design factories, manufacture legendary vehicles, expand across the world and become the ultimate automotive business leader."
      overviewTitle="BUILD YOUR AUTOMOTIVE EMPIRE"
      overview="Design and build advanced factories, research new technologies, develop original vehicle ranges and outsmart your competitors in a dynamic automotive market."
      genre="Business Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Factory Management",
        "Vehicle Development",
        "Research & Technology",
        "Global Expansion",
        "Business Strategy",
        "Automotive Empire",
      ]}
      features={[
        { title: "FACTORY MANAGEMENT", description: "Build and expand advanced factories and manufacturing networks." },
        { title: "VEHICLE DEVELOPMENT", description: "Design original vehicles, powertrains, interiors and technology." },
        { title: "RESEARCH & TECHNOLOGY", description: "Develop new materials, engineering systems and manufacturing methods." },
        { title: "GLOBAL EXPANSION", description: "Enter new markets and grow your automotive brand worldwide." },
        { title: "BUSINESS STRATEGY", description: "Manage finances, pricing, staffing, marketing and production." },
        { title: "COMPETE & DOMINATE", description: "Challenge rival manufacturers and build a global automotive empire." },
      ]}
    />
  );
}
