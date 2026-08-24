export default function HomePage() {
  const games = [
    {
      name: "Car Tycoon Legacy",
      slug: "car-tycoon-legacy",
    image: "/games/car-tycoon-legacy/hero.jpg",
      status: "Early Access",
      description:
        "Build your automotive empire, manage factories and create the world's greatest car company.",
    },
    {
      name: "Empire Chronicles",
      slug: "empire-chronicles",
    image: "/games/empire-chronicles/hero.jpg",
      status: "Early Access",
      description:
        "Build your civilisation, command armies and conquer a living historical world.",
    },
    {
      name: "Card Empire Tycoon",
      slug: "card-empire-tycoon",
    image: "/games/card-empire-tycoon/hero.jpg",
      status: "Early Access",
      description:
        "Build the ultimate card shop, manage your business and grow your collecting empire.",
    },
    {
      name: "Football Manager Elite",
      slug: "football-manager-elite",
    image: "/games/football-manager-elite/hero.jpg",
      status: "Early Access",
      description:
        "Build your football club, manage your squad and compete for global glory.",
    },
    {
      name: "Airline Simulator",
      slug: "airline-simulator",
    image: "/games/airline-simulator/hero.jpg",
      status: "Early Access",
      description:
        "Build and manage your airline with realistic aircraft, routes, airports and operations.",
    },
    {
      name: "Mafia Tycoon",
      slug: "mafia-tycoon",
    image: "/games/mafia-tycoon/hero.jpg",
      status: "Coming Soon",
      description:
        "Build your criminal empire, manage businesses and compete for control of the city.",
    },
    {
      name: "Shadow Dynasty",
      slug: "shadow-dynasty",
    image: "/games/shadow-dynasty/hero.png",
      status: "Coming Soon",
      description:
        "Rise through a dangerous world of power, strategy and ambition.",
    },
    {
      name: "Velocity Unlimited",
      slug: "velocity-unlimited",
    image: "/games/velocity-unlimited/hero.jpg",
      status: "Coming Soon",
      description:
        "Experience high-speed racing, powerful cars and a world built around performance.",
    },
    {
      name: "World Empire",
      slug: "world-empire",
    image: "/games/world-empire/hero.jpg",
      status: "Coming Soon",
      description:
        "Build a global empire, develop your nation and shape the future of the world.",
    },
    {
      name: "Life Legacy",
      slug: "life-legacy",
    image: "/games/life-legacy/hero.jpg",
      status: "Coming Soon",
      description:
        "Create your own life, build your career, grow your wealth and leave your legacy.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="block shrink-0">
          <img
            src="/brand/blackcrest-master-logo.png"
            alt="Blackcrest Interactive"
            className="h-20 w-auto object-contain"
          />
        </a>

          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="/" className="transition hover:text-yellow-400">
              Home
            </a>
            <a href="#games" className="transition hover:text-yellow-400">
              Games
            </a>
            <a href="#about" className="transition hover:text-yellow-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-yellow-400">
              Contact
            </a>
          </nav>

          <a
            href="#games"
            className="rounded-lg bg-yellow-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-yellow-400"
          >
            Explore Games
          </a>
        </div>
      </header>

      {/* Hero */}
<section
  className="relative min-h-[850px] overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/brand/blackcrest-homepage-new.jpg')" }}
>
  <div className="absolute inset-0 bg-black/25" />

<div className="absolute inset-0 flex items-center justify-center px-6">
  <div className="mx-auto max-w-4xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
      Blackcrest Interactive
    </p>

    <h1 className="mt-4 text-5xl font-black tracking-tight text-white drop-shadow-2xl md:text-7xl">
      WE BUILD WORLDS.
    </h1>

    <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-zinc-100 drop-shadow-lg md:text-lg">
      Discover ambitious strategy, simulation, management and tycoon
      experiences from Blackcrest Interactive.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        href="#games"
        className="rounded-lg bg-yellow-500 px-7 py-3 font-bold text-black transition hover:bg-yellow-400"
      >
        Explore Our Games
      </a>

      <a
        href="#trailers"
        className="rounded-lg border border-yellow-500/70 bg-black/50 px-7 py-3 font-bold text-white backdrop-blur-sm transition hover:border-yellow-400 hover:text-yellow-400"
      >
        Watch Latest Trailers
      </a>
    </div>
  </div>
</div>
</section>

{/* Featured Games */}
<section
  id="games"
  className="relative overflow-hidden border-y border-yellow-500/20 bg-zinc-950 px-6 py-24"
>
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.10),transparent_42%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
        Blackcrest Interactive
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
        Featured Games
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
        Explore ambitious worlds built around simulation, strategy,
        management and player-driven experiences.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <article
          key={game.slug}
          className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60 ${
            game.slug === "life-legacy" ? "lg:col-start-2" : ""
          }`}
        >
          <div className="relative h-2 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />

          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-yellow-500/20 bg-zinc-950">
            <img
              src={game.image}
              alt={`${game.name} artwork`}
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-7">
            <div>
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  game.status === "Early Access"
                    ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-400"
                    : "border-zinc-700 bg-zinc-800/70 text-zinc-300"
                }`}
              >
                {game.status}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-black tracking-tight text-white transition group-hover:text-yellow-400">
              {game.name}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-zinc-400">
              {game.description}
            </p>

            <a
              href={`/games/${game.slug}`}
              className="mt-8 inline-flex w-fit items-center rounded-xl bg-yellow-500 px-5 py-3 font-bold text-black transition hover:bg-yellow-400"
            >
              View Game →
            </a>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-14 text-center">
      <a
        href="/games"
        className="inline-flex rounded-xl border border-yellow-500/60 bg-black/40 px-7 py-3 font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
      >
        Explore All Games →
      </a>
    </div>
  </div>
</section>

{/* About */}
<section
  id="about"
  className="relative overflow-hidden border-y border-yellow-500/20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 px-6 py-24"
>
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.10),transparent_42%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
        About Blackcrest Interactive
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
        Building Worlds Without Limits.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
        Blackcrest Interactive is an independent video game studio creating
        ambitious simulation, strategy, management and tycoon experiences
        designed around depth, freedom and long-term replayability.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Our Vision
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Bigger Worlds
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          We create expansive worlds built around player freedom,
          progression and meaningful choices.
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/40 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Our Games
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Deep Experiences
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          From automotive empires to civilizations and living worlds,
          every Blackcrest game is designed for depth and long-term replayability.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Our Future
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Built To Grow
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Blackcrest Interactive is building a growing portfolio of original
          games designed to evolve with their communities.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center">
      <img
        src="/brand/blackcrest-master-logo.png"
        alt="Blackcrest Interactive"
        className="mx-auto h-24 w-auto object-contain"
      />

      <p className="mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
        Independent. Ambitious. Built for players.
      </p>
    </div>
  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="relative overflow-hidden border-y border-yellow-500/20 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-24"
>
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.09),transparent_45%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
        Contact Blackcrest
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
        Let&apos;s Build Worlds.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
        Follow Blackcrest Interactive, discover upcoming games and get in touch
        with the studio.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Studio
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Blackcrest Interactive
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          An independent studio creating ambitious simulation, strategy,
          management and tycoon experiences.
        </p>
      </div>

      <div className="rounded-3xl border border-yellow-500/50 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Get In Touch
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Contact The Studio
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          For studio enquiries, partnerships and information about Blackcrest
          Interactive and our games.
        </p>

        <a
          href="mailto:blackcrestinteractive@outlook.com"
          className="mt-7 inline-flex items-center rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
        >
          Contact Blackcrest →
        </a>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Our Journey
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Follow The Future
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          New games, development updates, trailers and future Blackcrest
          Interactive projects will be revealed as the studio grows.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center">
      <img
        src="/brand/blackcrest-master-logo.png"
        alt="Blackcrest Interactive"
        className="mx-auto h-24 w-auto object-contain"
      />

      <p className="mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
        Independent. Ambitious. Built for players.
      </p>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="relative border-t border-yellow-500/20 bg-black px-6 py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 md:grid-cols-3 md:items-start">
      <div>
        <img
          src="/brand/blackcrest-master-logo.png"
          alt="Blackcrest Interactive"
          className="h-20 w-auto object-contain"
        />

        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
          Independent game studio creating ambitious simulation, strategy,
          management and tycoon experiences.
        </p>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Explore
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-zinc-300">
          <a href="/" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#games" className="transition hover:text-yellow-400">
            Games
          </a>

          <a href="#about" className="transition hover:text-yellow-400">
            About
          </a>

          <a href="#contact" className="transition hover:text-yellow-400">
            Contact
          </a>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Blackcrest Interactive
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          We Build Worlds.
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
          Follow the development of our games, upcoming trailers and future
          Blackcrest Interactive projects.
        </p>

        <a
          href="mailto:blackcrestinteractive@outlook.com"
          className="mt-5 inline-block font-bold text-yellow-400 transition hover:text-yellow-300"
        >
          blackcrestinteractive@outlook.com →
        </a>
      </div>
    </div>

    <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Blackcrest Interactive. All rights reserved.</p>
      <p>Independent. Ambitious. Built for players.</p>
    </div>
  </div>
</footer>
    </main>
  );
}
