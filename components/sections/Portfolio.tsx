import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Container from "../ui/Container";
import PortfolioCard from "../ui/PortfolioCard";
import SectionTitle from "../ui/SectionTitle";
import { portfolio } from "@/lib/portfolio";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-32"
    >
      <Container>

        <FadeIn>
          <SectionTitle
            eyebrow="FEATURED WORK"
            title="Showcasing Central Alberta From Above"
            description="Every flight captures a unique perspective. As our portfolio grows, you'll find aerial photography and cinematic drone footage featuring farms, acreages, commercial properties, construction projects and more."
          />
        </FadeIn>

        {/* Featured Reel */}
        <FadeIn
          direction="up"
          delay={0.15}
          scale
        >
          <div className="mb-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">

            <div className="aspect-video flex items-center justify-center border-b border-white/10 bg-black">

              <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-5xl backdrop-blur">
                  ▶
                </div>

                <h3 className="mt-8 text-4xl font-bold text-white">
                  Cinematic Showreel
                </h3>

                <p className="mt-4 text-zinc-400">
                  Featured aerial film coming soon.
                </p>

              </div>

            </div>

            <div className="p-12 text-center">

              <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
                Every project tells a story. Whether it's promoting a local
                business, documenting a construction project or capturing the
                beauty of Alberta's landscape, our goal is to create imagery
                that leaves a lasting impression.
              </p>

              <div className="mt-10">
                <a href="#contact">
                  <Button>
                    Let's Create Something Amazing
                  </Button>
                </a>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* Gallery */}

        <FadeIn
          delay={0.35}
          duration={0.9}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {portfolio.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
              />
            ))}

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}