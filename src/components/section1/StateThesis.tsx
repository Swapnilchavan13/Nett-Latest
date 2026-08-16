import { Reveal } from "./Reveal";

export function StateThesis() {
  return (
    <section className="bg-atmosphere text-carbon">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[22svh] sm:px-10">
        <Reveal>
          <h2 className="display-lg">
            The world doesn&rsquo;t have
            <br />a carbon problem.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-[26svh] sm:px-10">
        <Reveal>
          <p className="label-lead text-muted-foreground">The thesis</p>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="display-xl mt-8">
            It has a
            <br />
            carbon placement
            <br />
            problem.
          </h2>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
            <p className="body-note text-graphite">
              <span className="label-lead mb-3 block text-clay">Atmosphere &uarr;</span>
              Too much in the atmosphere.
            </p>
            <p className="body-note text-graphite">
              <span className="label-lead mb-3 block text-clay">Soil &darr;</span>
              Too little in the soil.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}