type Feature = {
  title: string;
  description: string;
};

type GameProps = {
  title: string;
  titleAccent?: string;
  slug: string;
  status: string;
  tagline: string;
  description: string;
  overviewTitle: string;
  overview: string;
  genre: string;
  mode: string;
  features: Feature[];
  screenshotTitles: string[];
};

export default function BlackcrestGamePage({
  title,
  titleAccent,
  slug,
  status,
  tagline,
  description,
  overviewTitle,
  overview,
  genre,
  mode,
  features,
  screenshotTitles,
}: GameProps) {
  const base = `/games/${slug}`;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
        {/* Soft background fill */}
        <img
          src={`${base}/${slug === "velocity-unlimited" ? "hero.jpg" : slug === "shadow-dynasty" ? "hero.png" : slug === "world-empire" ? "hero.jpg?v=999" : slug === "life-legacy" ? "life-legacy-hero.jpg" : "hero.jpg"}?v=104`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-contain opacity-25 blur-2xl"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">

          <div className="z-10">
            <span className="inline-flex rounded-full border border-yellow-500/80 bg-black/60 px-4 py-2 text-xs font-black tracking-widest text-yellow-400">
              {status}
            </span>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-yellow-400">{titleAccent}</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-base">
              {tagline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#overview"
                className="rounded-md bg-yellow-500 px-6 py-3 font-black text-black transition hover:bg-yellow-400"
              >
                EXPLORE THE GAME →
              </a>

              <a
                href="#trailer"
                className="rounded-md border border-yellow-500/80 bg-black/40 px-6 py-3 font-black text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                WATCH TRAILER →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 text-xs font-bold text-zinc-300">
              {[
                "STEAM",
                                              "STEAM DECK",
                                  ].map((platform) => (
                <span
                  key={platform}
                  className="rounded-md border border-zinc-700 bg-black/50 px-3 py-2"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Hero artwork shown without cropping */}
          <div className="relative z-10">
            <div className="overflow-hidden rounded-2xl border border-yellow-500/30 bg-black shadow-2xl">
              <div className="aspect-video w-full">
                <img
                  src={`${base}/${slug === "velocity-unlimited" ? "hero.jpg" : slug === "shadow-dynasty" ? "hero.png" : slug === "world-empire" ? "hero.jpg?v=999" : slug === "life-legacy" ? "life-legacy-hero.jpg" : "hero.jpg"}?v=104`}
                  alt={`${title} official Blackcrest Interactive artwork`}
                  className={`h-full w-full ${slug === "velocity-unlimited" ? "object-cover object-[center_30%]" : slug === "airline-simulator" ? "object-cover object-[center_35%]" : slug === "mafia-tycoon" ? "object-cover object-center" : slug === "shadow-dynasty" ? "object-cover object-center" : slug === "world-empire" ? "object-cover object-center" : slug === "life-legacy" ? "object-cover object-center" : slug === "card-empire-tycoon" ? "object-cover object-center" : "object-contain"}`}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="border-b border-zinc-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-black tracking-widest text-yellow-400">
              OVERVIEW
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              {overviewTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
              {overview}
            </p>
          </div>

          <div className="grid max-w-7xl mx-auto gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Info label="GENRE" value={genre} />
            <Info label="MODE" value={mode} />
            <Info label="ENGINE" value="Unreal Engine 5" />
            <Info label="DEVELOPER" value="Blackcrest Interactive" />
            <Info label="STATUS" value="In Development" />
            <Info label="WEBSITE" value="blackcrestinteractive.com" />
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-black tracking-widest text-yellow-400">
            GAMEPLAY SCREENSHOTS
          </p>

         <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <figure
                key={number}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
              >
                <div className={slug === "velocity-unlimited" || slug === "life-legacy" ? "bg-black overflow-hidden" : "aspect-video bg-black overflow-hidden"}>
                  <img
                    src={`${base}/screenshot-${number}.jpg`}
                    alt={
                      screenshotTitles[number - 1] ||
                      `${title} screenshot ${number}`
                    }
                    loading="lazy"
                    className={`h-full w-full ${slug === "card-empire-tycoon" ? "object-cover" : slug === "shadow-dynasty" ? "object-cover object-center" : slug === "velocity-unlimited" ? "w-full h-auto object-contain" : slug === "world-empire" ? "object-cover object-center" : "object-contain"}`}
                  />
                </div>

                <figcaption className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-zinc-200">
                  {screenshotTitles[number - 1] ||
                    `Gameplay Screenshot ${number}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-black tracking-widest text-yellow-400">
            CORE FEATURES
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-yellow-500/60"
              >
                <h3 className="text-lg font-black text-yellow-400">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAILER */}
      <section id="trailer" className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-black tracking-widest text-yellow-400">
            GAME TRAILER
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-black">
            <div className="aspect-video">
              <video
                controls
                preload="metadata"
                poster={slug === "velocity-unlimited" ? `${base}/hero.jpg` : slug === "car-tycoon-legacy" ? `${base}/trailer-poster-v2.jpg` : slug === "airline-simulator" ? `${base}/trailer-poster-v2.jpg` : slug === "card-empire-tycoon" ? `${base}/trailer-poster-v2.jpg` : slug === "life-legacy" ? `${base}/life-legacy-hero.jpg` : slug === "shadow-dynasty" ? `${base}/trailer-poster-v6.jpg` : slug === "velocity-unlimited" ? `${base}/trailer-poster-v2.jpg` : slug === "empire-chronicles" ? `${base}/hero.jpg` : slug === "world-empire" ? `${base}/hero.jpg` : `${base}/trailer-poster.jpg`}
                className={`h-full w-full ${
  slug === "card-empire-tycoon"
    ? "object-cover"
    : slug === "airline-simulator"
    ? "object-cover object-[center_35%]"
    : slug === "mafia-tycoon"
    ? "object-cover object-center"
    : "object-contain"
}`}
              >
                <source src={slug === "shadow-dynasty" ? `${base}/trailer.mp4?v=2` : `${base}/trailer.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Official Blackcrest Interactive game trailer.
          </p>
        </div>
      </section>

      {/* BACK */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <a
            href="/#games"
            className="inline-flex rounded-md bg-yellow-500 px-6 py-3 font-black text-black transition hover:bg-yellow-400"
          >
            ← BACK TO BLACKCREST GAMES
          </a>
        </div>
      </section>

    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-xs font-black tracking-widest text-yellow-400">
        {label}
      </p>
      <p className="mt-2 font-semibold text-zinc-100">{value}</p>
    </div>
  );
}
