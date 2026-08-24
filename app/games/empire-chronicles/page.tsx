import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function EmpireChroniclesPage() {
  return (
    <BlackcrestGamePage
      title="EMPIRE CHRONICLES"
      slug="empire-chronicles"
      status="COMING SOON"
      tagline="BUILD. CONQUER. CREATE HISTORY."
      description="Build a civilisation, gather resources, research technologies, command armies and forge an empire across a living historical world."
      overviewTitle="CREATE YOUR CIVILISATION"
      overview="Develop cities, manage resources, command armies and shape the rise of your civilisation through strategic decisions and conquest."
      genre="Real-Time Strategy"
      mode="Single Player"
      screenshotTitles={[
        "Your Civilisation",
        "Massive Armies",
        "Epic Battles",
        "Research",
        "City Development",
        "Empire Expansion",
      ]}
      features={[
        { title: "CITY BUILDING", description: "Develop cities and thriving settlements." },
        { title: "RESOURCE MANAGEMENT", description: "Manage the economy supporting your civilisation." },
        { title: "ARMIES", description: "Raise and command powerful military forces." },
        { title: "RESEARCH", description: "Unlock technologies and strategic advantages." },
        { title: "DIPLOMACY", description: "Manage relationships with rival empires." },
        { title: "CONQUEST", description: "Expand your empire across the world." },
      ]}
    />
  );
}
