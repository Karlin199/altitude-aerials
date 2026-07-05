import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-32"
    >
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <FadeIn
            direction="left"
            duration={0.9}
          >
            <div>

              <SectionTitle
                eyebrow="ABOUT US"
                title="Capturing Alberta From A Different Perspective"
                description=""
              />

              <div className="space-y-6 text-lg leading-8 text-zinc-400">

                <p>
                  Altitude Aerials was founded with a passion for helping
                  businesses, farms, construction companies and property
                  owners showcase what makes them unique.
                </p>

                <p>
                  Every flight is carefully planned to capture imagery
                  that tells a story, builds trust and creates a lasting
                  first impression.
                </p>

                <p>
                  Based in Central Alberta, we're committed to delivering
                  professional service, exceptional quality and reliable
                  communication from start to finish.
                </p>

              </div>

              <div className="mt-10">

                <a href="#contact">
                  <Button>
                    Request a Quote
                  </Button>
                </a>

              </div>

            </div>
          </FadeIn>

          <FadeIn
            direction="right"
            delay={0.2}
            duration={1}
            scale
          >
            <div>

              <div className="flex aspect-square items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black">

                <div className="text-center">

                  <h3 className="text-3xl font-bold text-white">
                    Owner Portrait
                  </h3>

                  <p className="mt-4 text-zinc-500">
                    Professional photo coming soon
                  </p>

                </div>

              </div>

            </div>
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}