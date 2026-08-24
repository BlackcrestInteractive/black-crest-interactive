import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function LifeLegacyPage() {
  return (
    <BlackcrestGamePage
      title="LIFE LEGACY"
      slug="life-legacy"
      status="COMING SOON"
      tagline="LIVE YOUR LIFE. BUILD YOUR LEGACY."
      description="Create your own life story. Build relationships, choose your career, manage your finances, own property and make decisions that shape your future."
      overviewTitle="CREATE YOUR LIFE STORY"
      overview="Make meaningful choices throughout your character's life as you pursue careers, build relationships, create a home and develop a lasting legacy."
      genre="Life Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Your Home",
        "Your Career",
        "Relationships",
        "Finances",
        "Life Experiences",
        "Your Legacy",
      ]}
      features={[
        { title: "LIFE SIMULATION", description: "Build a life shaped by your choices." },
        { title: "CAREERS", description: "Develop skills and pursue different careers." },
        { title: "RELATIONSHIPS", description: "Build friendships and meaningful relationships." },
        { title: "PROPERTY", description: "Purchase, improve and customise your home." },
        { title: "FINANCES", description: "Manage income, expenses, savings and investments." },
        { title: "YOUR LEGACY", description: "Create a story that develops across your lifetime." },
      ]}
    />
  );
}
