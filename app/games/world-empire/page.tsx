import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function WorldEmpirePage() {
  return (
    <BlackcrestGamePage
      title="WORLD EMPIRE"
      slug="world-empire"
      status="COMING SOON"
      tagline="ONE WORLD. YOUR EMPIRE."
      description="Build a nation into a global superpower. Develop cities, grow your economy, manage diplomacy and shape the future of the world."
      overviewTitle="BUILD A GLOBAL SUPERPOWER"
      overview="Manage the economy, infrastructure, technology, diplomacy and development of your nation as you compete for global influence."
      genre="Grand Strategy"
      mode="Single Player"
      screenshotTitles={[
        "Global Strategy",
        "Nation & Government Management",
        "Economy & Trade",
        "Diplomacy & Alliances",
        "Military & Global Conflict",
        "Cities & World Development",
      ]}
      features={[
        { title: "NATION MANAGEMENT", description: "Control the development of your nation." },
        { title: "GLOBAL ECONOMY", description: "Develop industries, trade and national wealth." },
        { title: "INFRASTRUCTURE", description: "Build cities and major infrastructure." },
        { title: "DIPLOMACY", description: "Manage international relationships." },
        { title: "TECHNOLOGY", description: "Research technologies that transform your nation." },
        { title: "GLOBAL POWER", description: "Become one of the world's most influential powers." },
      ]}
    />
  );
}
