type GameData = {
  title: string
  subtitle: string
  description: string
  status: string
  genre: string
  mode: string
  engine: string
  release: string
  developer: string
  website: string
  platforms: string[]
  hero: string
  trailer: string
  screenshots: {
    image: string
    title: string
    description: string
  }[]
  features: {
    title: string
    description: string
  }[]
}

export default function GamePage({ game }: { game: GameData }) {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="relative min-h-[720px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.95), rgba(0,0,0,.55), rgba(0,0,0,.25)), url('${game.hero}')`
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="mb-20 text-sm text-zinc-300">
            Home <span className="mx-2">›</span>
            Games <span className="mx-2">›</span>
            <span className="text-yellow-400">{game.title}</span>
          </div>

          <div className="max-w-4xl pt-20">

            <span className="inline-block rounded-full border border-yellow-500 px-4 py-2 text-sm font-bold text-yellow-400">
              {game.status}
            </span>

            <h1 className="mt-6 text-6xl font-black uppercase tracking-tight md:text-8xl">
              {game.title}
            </h1>

            <p className="mt-4 text-xl font-bold uppercase tracking-widest text-yellow-400">
              {game.subtitle}
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200">
              {game.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#overview"
                className="rounded-lg bg-yellow-500 px-7 py-4 font-bold text-black transition hover:bg-yellow-400"
              >
                EXPLORE THE GAME →
              </a>

              <a
                href="#trailer"
                className="rounded-lg border border-yellow-500 px-7 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                WATCH TRAILER →
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-6 text-sm font-bold text-zinc-200">
              {game.platforms.map((platform) => (
                <span key={platform} className="rounded border border-zinc-700 px-4 py-2">
                  {platform}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="font-bold text-yellow-400">OVERVIEW</p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              {game.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              {game.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Info label="GENRE" value={game.genre} />
            <Info label="MODE" value={game.mode} />
            <Info label="ENGINE" value={game.engine} />
            <Info label="RELEASE" value={game.release} />
            <Info label="DEVELOPER" value={game.developer} />
            <Info label="WEBSITE" value={game.website} />
            <Info label="STATUS" value="In Development" />
            <Info label="PLATFORMS" value={game.platforms.join(", ")} />

          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="font-bold text-yellow-400">GAMEPLAY SCREENSHOTS</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {game.screenshots.map((shot) => (
              <div
                key={shot.image}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
              >
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {shot.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {shot.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="font-bold text-yellow-400">CORE FEATURES</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {game.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-yellow-500"
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TRAILER */}
      <section id="trailer" className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="font-bold text-yellow-400">GAME TRAILER</p>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <video
              controls
              poster={game.hero}
              className="w-full"
            >
              <source src={game.trailer} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

        </div>
      </section>

      {/* BACK */}
      <section className="border-t border-zinc-800 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <a
            href="/games"
            className="inline-block rounded-lg bg-yellow-500 px-7 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            ← BACK TO BLACKCREST GAMES
          </a>
        </div>
      </section>

    </main>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-xs font-bold text-zinc-500">{label}</p>
      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  )
}
