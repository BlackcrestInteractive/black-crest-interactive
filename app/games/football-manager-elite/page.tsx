import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function FootballManagerElitePage() {
  return (
    <BlackcrestGamePage
      title="FOOTBALL MANAGER ELITE"
      slug="football-manager-elite"
      status="COMING SOON"
      tagline="BUILD. MANAGE. BECOME A LEGEND."
      description="Take control of your football club and build a world-class organisation through tactics, scouting, transfers, finances and player development."
      overviewTitle="BUILD YOUR FOOTBALL DYNASTY"
      overview="Create your tactical identity, recruit talent, develop young players, manage club finances and compete for domestic and international success."
      genre="Football Management Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Match Day",
        "Tactical Management",
        "Squad Management",
        "Transfers",
        "Training",
        "Club Development",
      ]}
      features={[
        { title: "TACTICS", description: "Create formations, tactical systems and match strategies." },
        { title: "TRANSFERS", description: "Scout players and negotiate contracts and transfers." },
        { title: "YOUTH DEVELOPMENT", description: "Build an academy and develop future stars." },
        { title: "CLUB FINANCES", description: "Manage budgets, wages and long-term investment." },
        { title: "FACILITIES", description: "Improve your stadium, training ground and academy." },
        { title: "COMPETE FOR GLORY", description: "Build a club capable of winning major trophies." },
      ]}
    />
  );
}
