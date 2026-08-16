import { useState } from "react";
import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";

const TOPICS = [
  "Partnership",
  "Carbon credits",
  "B3 for my farm",
  "BioCharge fuel supply",
  "Something else",
];

export function ContactSection() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const field =
    "w-full border-b border-atmosphere/30 bg-transparent py-3 text-atmosphere placeholder:text-atmosphere/40 focus:border-ochre focus:outline-none";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@nettzero.world?subject=${encodeURIComponent(
      `${topic} — enquiry from ${name || "the website"}`,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="section-8-contact" className="relative overflow-hidden bg-ink text-atmosphere scroll-mt-16">
      <div
        className="pointer-events-none absolute -left-[18vmin] bottom-[-10vmin] h-[56vmin] w-[56vmin] text-ochre/10"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Get in touch</p>
        </Reveal>
        <Reveal threshold={0.2} delay={120}>
          <h2 className="display-lg mt-8">Let&rsquo;s put carbon back where it belongs.</h2>
        </Reveal>
        <Reveal threshold={0.2} delay={220}>
          <p className="body-note mt-8 max-w-2xl text-atmosphere/75">
            Tell us a little about you and what you&rsquo;re looking for. We read every message.
          </p>
        </Reveal>

        <form className="mt-[8svh]" onSubmit={onSubmit}>
          <fieldset className="mb-10">
            <legend className="label-eyebrow text-ochre">What is this about?</legend>
            <div className="mt-5 flex flex-wrap gap-3">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={`label-eyebrow rounded-full border px-4 py-2 transition-colors ${
                    topic === t
                      ? "border-ochre bg-ochre/15 text-ochre"
                      : "border-atmosphere/25 text-atmosphere/70 hover:border-atmosphere/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="label-eyebrow text-atmosphere/60">Name</span>
              <input
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={field}
              />
            </label>
            <label className="block">
              <span className="label-eyebrow text-atmosphere/60">Organisation</span>
              <input
                maxLength={120}
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Company, farm or institution"
                className={field}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="label-eyebrow text-atmosphere/60">Email</span>
              <input
                required
                type="email"
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={field}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="label-eyebrow text-atmosphere/60">Message</span>
              <textarea
                required
                rows={4}
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to explore with us?"
                className={`${field} resize-none`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="label-lead mt-12 inline-flex items-center gap-3 border-b border-ochre pb-2 text-ochre transition-opacity hover:opacity-75"
          >
            Send message <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </div>
    </section>
  );
}