import { Reveal } from "@/components/section1/Reveal";
import riceStraw from "@/assets/s2-rice-straw.jpg";
import riceHusk from "@/assets/s2-rice-husk.jpg";
import mustard from "@/assets/s2-mustard.jpg";
import corn from "@/assets/s2-corn.jpg";
import prunings from "@/assets/s2-prunings.jpg";

const MATERIALS = [
  { name: "Rice straw", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lKdJP8Sa6gVIsurdMryWdTeWZlvRQHdAnKSi05rT5ER-FhlHEwrzLMM&s=10" },
  { name: "Rice husk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7TqWQWKzhDwNUgdmT_z-i71NgQy9EL62JVl9W37mKQae7Wz5JAwcXh0&s=10" },
  { name: "Mustard residue", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSJryKeeF6yy7LXaKzildh6-S4q6Uh-D1NX8rxWNNKwd9daU2h06JN-s&s=10" },
  { name: "Corn residue", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo59zc0-aAFsZoUbfZBplGuZOnlHodmuhIPwFhCq-j0JL18l6IQEhHmyE&s=10" },
  { name: "Orchard prunings", image: prunings },
];

export function MaterialStrip() {
  return (
    <section className="relative bg-soil py-[16svh] text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">What we collect</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8">
            India grows.
            <br />
            We collect what remains.
          </h3>
        </Reveal>
      </div>

      <div className="mt-[10svh] overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max gap-5 px-6 sm:px-10">
          {MATERIALS.map((m, i) => (
            <li key={m.name}>
              <Reveal threshold={0.15} delay={i * 90}>
                <figure className="relative h-[52svh] w-[62vw] overflow-hidden sm:w-[26vw]">
                  <img
                    src={m.image}
                    alt={m.name}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover rounded-[8px]"
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to top, color-mix(in oklab, var(--ink) 88%, transparent) 0%, transparent 55%)",
                    }}
                  />
                  <figcaption className="label-lead absolute bottom-6 left-6 right-6">
                    {m.name}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}