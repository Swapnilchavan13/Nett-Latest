import { useState } from "react";
import { Reveal } from "@/components/section1/Reveal";

const WORLDS = ["Air", "Soil", "Water"];
const INTERESTS = [
  "Carbon Dioxide Removal",
  "Soil Organic Carbon restoration",
  "Water stewardship",
];

function PartnerForm() {
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:hello@nettzero.world?subject=${encodeURIComponent(
    `Partnership enquiry — ${interest}`,
  )}&body=${encodeURIComponent(
    `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nIntervention: ${interest}\n\n${message}`,
  )}`;

  const field =
    "w-full border-b border-atmosphere/30 bg-transparent py-3 text-atmosphere placeholder:text-atmosphere/40 focus:border-ochre focus:outline-none";

  return (
    <form
      className="mx-auto mt-[8svh] max-w-2xl text-left"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <fieldset className="mb-10">
        <legend className="label-eyebrow text-ochre">Your intervention</legend>
        <div className="mt-5 flex flex-wrap gap-3">
          {INTERESTS.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              className={`label-eyebrow border px-5 py-3 transition-colors ${
                interest === i
                  ? "border-ochre text-ochre"
                  : "border-atmosphere/30 text-atmosphere/70 hover:border-atmosphere/60"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="label-eyebrow text-atmosphere/60">Name</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label className="block">
          <span className="label-eyebrow text-atmosphere/60">Organisation</span>
          <input className={field} value={org} onChange={(e) => setOrg(e.target.value)} />
        </label>
      </div>
      <label className="mt-8 block">
        <span className="label-eyebrow text-atmosphere/60">Email</span>
        <input
          type="email"
          className={field}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="mt-8 block">
        <span className="label-eyebrow text-atmosphere/60">What would you like to change?</span>
        <textarea
          rows={3}
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="label-lead mt-10 border border-atmosphere/40 px-8 py-4 uppercase tracking-[0.18em] transition-colors hover:border-ochre hover:text-ochre"
      >
        Send enquiry &rarr;
      </button>
    </form>
  );
}

export function InterventionClose() {
  const [open, setOpen] = useState(false);

  return (
    <section id="partner-with-nettzero" className="relative bg-atmosphere text-carbon">
      <div className="mx-auto max-w-5xl px-6 py-[18svh] text-center sm:px-10">
        <Reveal threshold={0.2}>
          <h2 className="display-xl">
            One planet.
            <br />
            Many problems.
            <br />
            Connected solutions.
          </h2>
        </Reveal>
        <Reveal threshold={0.2} delay={180}>
          <p className="body-note mx-auto mt-12 max-w-xl text-graphite">
            The planet is grappling with a multitude of environmental challenges. You don&rsquo;t
            have to solve all of them.
          </p>
        </Reveal>
        <Reveal threshold={0.2} delay={300}>
          <h3 className="display-lg mt-[10svh] text-clay">
            Choose where
            <br />
            you want to intervene.
          </h3>
        </Reveal>
        <Reveal threshold={0.2} delay={420}>
          <p className="label-lead mt-[8svh] uppercase tracking-[0.3em]">
            {WORLDS.join(" · ")}
          </p>
        </Reveal>
        <Reveal threshold={0.2} delay={520}>
          <p className="body-note mx-auto mt-10 max-w-2xl text-graphite">
            Whichever pathway you choose, your intervention becomes part of a larger system — one
            that works across carbon, soil, water, agriculture and rural livelihoods.
          </p>
        </Reveal>
      </div>

      <div className="bg-ink text-atmosphere">
        <div className="mx-auto max-w-5xl px-6 py-[18svh] text-center sm:px-10">
          <Reveal threshold={0.2}>
            <h3 className="display-xl">
              Join the intervention
              <br />
              that works across
              <br />
              the spectrum.
            </h3>
          </Reveal>

          {!open ? (
            <Reveal threshold={0.2} delay={200}>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="label-lead mt-[8svh] border border-atmosphere/40 px-10 py-5 uppercase tracking-[0.18em] transition-colors hover:border-ochre hover:text-ochre"
              >
                Partner with NettZero &rarr;
              </button>
            </Reveal>
          ) : (
            <PartnerForm />
          )}
        </div>
      </div>
    </section>
  );
}