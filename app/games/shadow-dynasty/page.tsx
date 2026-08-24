import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function ShadowDynastyPage() {
  return (
    <BlackcrestGamePage
      title="SHADOW DYNASTY"
      slug="shadow-dynasty"
      status="COMING SOON"
      tagline="RISE FROM THE SHADOWS."
      description="Build your dynasty, develop your territory, command powerful forces and shape the future of an unforgiving world."
      overviewTitle="BUILD YOUR DYNASTY"
      overview="Establish your dynasty, construct settlements, command armies, manage alliances and compete against rival powers."
      genre="Strategy / Dynasty Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Build Your Empire",
        "Command Epic Battles",
        "Unify the Clans",
        "Master Strategy",
        "Stunning World",
        "Shape Your Legacy",
      ]}
      features={[
        { title: "DYNASTY MANAGEMENT", description: "Build and maintain your ruling dynasty." },
        { title: "CASTLE DEVELOPMENT", description: "Expand your strongholds and settlements." },
        { title: "MILITARY COMMAND", description: "Build and command powerful armies." },
        { title: "DIPLOMACY", description: "Negotiate with rival powers and allies." },
        { title: "ECONOMY", description: "Develop the resources supporting your realm." },
        { title: "EXPANSION", description: "Expand your influence across the world." },
      ]}
    />
  );
}
