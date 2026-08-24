import BlackcrestGamePage from "@/components/BlackcrestGamePage";

export default function AirlineSimulatorPage() {
  return (
    <BlackcrestGamePage
      title="AIRLINE SIMULATOR"
      slug="airline-simulator"
      status="EARLY ACCESS"
      tagline="BUILD THE WORLD'S GREATEST AIRLINE."
      description="Build and manage a global airline. Purchase aircraft, create routes, manage airports, serve passengers and expand your aviation network."
      overviewTitle="BUILD YOUR GLOBAL AIRLINE"
      overview="Start with a small operation and grow into a worldwide aviation company. Manage aircraft, routes, airports, passengers and finances."
      genre="Airline Management Simulation"
      mode="Single Player"
      screenshotTitles={[
        "Airport Operations",
        "Aircraft Fleet",
        "Global Routes",
        "Passenger Management",
        "Airline Finances",
        "Global Expansion",
      ]}
      features={[
        { title: "AIRLINE MANAGEMENT", description: "Control your complete airline operation." },
        { title: "AIRCRAFT FLEET", description: "Build and optimise a diverse aircraft fleet." },
        { title: "GLOBAL ROUTES", description: "Connect destinations around the world." },
        { title: "AIRPORT OPERATIONS", description: "Manage airport facilities and schedules." },
        { title: "PASSENGER DEMAND", description: "Respond to changing travel patterns and demand." },
        { title: "GLOBAL EXPANSION", description: "Grow into a major international airline." },
      ]}
    />
  );
}
