import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function VelocityUnlimitedPage() {
  return (
    <BlackcrestGamePage
      title="VELOCITY UNLIMITED"
      slug="velocity-unlimited"
      status="COMING SOON"
      tagline="SPEED HAS NO LIMIT."
      description="Explore a huge driving world, collect original performance cars, customise your machines and compete in high-speed events."
      overviewTitle="YOUR WORLD. YOUR CARS. YOUR SPEED."
      overview="Build your dream garage and experience high-performance driving across cities, highways, countryside and challenging mountain roads."
      genre="Open-World Racing"
      mode="Single Player / Multiplayer"
      screenshotTitles={[
        "Open-World City Racing",
        "High-Speed Highways",
        "Customize Everything",
        "Dynamic Weather & Day/Night",
        "Online Multiplayer Racing",
        "World Exploration & Events",
      ]}
      features={[
        { title: "OPEN-WORLD DRIVING", description: "Explore a huge connected driving environment." },
        { title: "ORIGINAL VEHICLES", description: "Collect original fictional performance machines." },
        { title: "CUSTOMISATION", description: "Modify appearance, performance and handling." },
        { title: "RACING EVENTS", description: "Enter championships and special events." },
        { title: "GARAGE", description: "Build an incredible collection of vehicles." },
        { title: "MULTIPLAYER", description: "Compete with other drivers online." },
      ]}
    />
  );
}
