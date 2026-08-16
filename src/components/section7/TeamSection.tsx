import { useState } from "react";
import { Reveal } from "@/components/section1/Reveal";
import {
  TEAM,
  TEAM_INITIAL_COUNT,
  TEAM_TOTALS,
  FARMER_NETWORK,
  type TeamMember,
} from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex-1 border border-carbon/10 bg-atmosphere px-3 py-2">
      <p className="text-[0.62rem] uppercase tracking-[0.16em] text-graphite">{label}</p>
      <p className="mt-1 font-display text-lg leading-none text-carbon">
        {value.toFixed(1)}
        <span className="ml-1 text-[0.62rem] tracking-normal text-graphite">tCO₂e</span>
      </p>
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col border border-carbon/10 bg-mist/40 p-6 backdrop-blur-sm transition-colors hover:border-clay/40">
      <div className="flex items-center gap-4">
        <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full border border-carbon/15 bg-mist">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <span className="font-display text-xl text-graphite">{initials(member.name)}</span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg text-carbon">{member.name}</h3>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-clay">
            {member.designation}
          </p>
        </div>
      </div>

      <p
        className={`mt-5 text-sm leading-relaxed text-graphite ${open ? "" : "line-clamp-4"}`}
      >
        {member.bio}
      </p>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-2 self-start text-xs font-medium uppercase tracking-[0.16em] text-clay transition-opacity hover:opacity-70"
      >
        {open ? "Read less" : "Read more"}
      </button>

      <div className="mt-6 flex gap-3">
        <Stat label="Emission 2025" value={member.emission2025} />
        <Stat label="Offset 2025" value={member.offset2025} />
      </div>
    </article>
  );
}

export function TeamSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? TEAM : TEAM.slice(0, TEAM_INITIAL_COUNT);

  return (
    <section id="section-7-team" className="scroll-mt-16 bg-atmosphere">
      <div className="mx-auto max-w-[1400px] px-6 py-[14svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-eyebrow text-ochre">06</p>
        </Reveal>
        <Reveal threshold={0.2} delay={80}>
          <h2 className="display-lg mt-4 text-carbon">Team NettZero</h2>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <p className="body-note mt-4 max-w-xl text-graphite">
            The passionate people driving climate action
          </p>
        </Reveal>

        <div className="mt-[8svh] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((member, i) => (
            <Reveal key={member.name} threshold={0.1} delay={Math.min(i % 3, 3) * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>

        {TEAM.length > TEAM_INITIAL_COUNT ? (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="label-eyebrow border border-carbon/25 px-8 py-4 text-carbon transition-colors hover:border-clay hover:text-clay"
            >
              {expanded ? "Show less" : `View full team (${TEAM.length})`}
            </button>
          </div>
        ) : null}

        <div className="mt-[10svh] grid grid-cols-1 gap-px border border-carbon/10 bg-carbon/10 sm:grid-cols-3">
          {[
            { v: String(TEAM_TOTALS.members), l: "Team Members" },
            { v: TEAM_TOTALS.emitted.toFixed(1), l: "Total tCO₂e Emitted" },
            { v: TEAM_TOTALS.offset.toFixed(1), l: "Total tCO₂e Offset" },
          ].map((s) => (
            <div key={s.l} className="bg-atmosphere px-6 py-10 text-center">
              <p className="display-md text-carbon">{s.v}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-graphite">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="mt-[8svh] border border-carbon/10 bg-mist/40 px-6 py-12 text-center sm:px-12">
          <p className="label-eyebrow text-ochre">{FARMER_NETWORK.eyebrow}</p>
          <h3 className="display-md mx-auto mt-4 max-w-3xl text-carbon">
            {FARMER_NETWORK.headline}
          </h3>
          <p className="mt-4 text-sm text-graphite">{FARMER_NETWORK.note}</p>
        </div>
      </div>
    </section>
  );
}
