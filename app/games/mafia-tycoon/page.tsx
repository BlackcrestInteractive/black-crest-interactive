import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function MafiaTycoonPage() {
  return (
    <BlackcrestGamePage
      title="MAFIA TYCOON"
      slug="mafia-tycoon"
      status="COMING SOON"
      tagline="BUILD YOUR CRIME EMPIRE."
      description="Build a powerful criminal organisation, control businesses, expand your territory and compete for influence across a living city."
      overviewTitle="CONTROL THE UNDERWORLD"
      overview="Start with a small organisation and turn it into a powerful empire. Build businesses, recruit your crew, manage territory and make decisions that shape your rise."
      genre="Strategy / Tycoon"
      mode="Single Player"
      screenshotTitles={[
        "The City",
        "Business Empire",
        "Your Organisation",
        "Territory Control",
        "Financial Management",
        "Power & Influence",
      ]}
      features={[
        { title: "EMPIRE MANAGEMENT", description: "Build and manage an expanding criminal organisation." },
        { title: "BUSINESS NETWORK", description: "Develop businesses and multiple sources of income." },
        { title: "TERRITORY CONTROL", description: "Compete for influence across different districts." },
        { title: "CREW MANAGEMENT", description: "Recruit specialists and manage your organisation." },
        { title: "STRATEGY", description: "Make decisions that influence rivals, income and expansion." },
        { title: "DYNAMIC CITY", description: "Operate in an evolving city filled with opportunities and rivals." },
      ]}
    />
  );
}
