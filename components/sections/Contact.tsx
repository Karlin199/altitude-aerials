import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-32"
    >
      <Container>

        <FadeIn>
          <SectionTitle
            eyebrow="LET'S WORK TOGETHER"
            title="Request a Quote"
            description="Tell us about your project and we'll get back to you as soon as possible."
          />
        </FadeIn>

        <div className="grid gap-16 lg:grid-cols-2">

          <FadeIn
            direction="left"
            delay={0.15}
          >
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

              <input
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />

              <div className="pt-2">
                <div className="w-full">
                  <Button>
                    Send Request
                  </Button>
                </div>

                <p className="mt-4 text-sm text-zinc-500">
                  We typically respond to all quote requests within 24 hours.
                </p>
              </div>

            </form>
          </FadeIn>

          <FadeIn
            direction="right"
            delay={0.3}
            scale
          >
            <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-12">

              <h3 className="text-3xl font-bold text-white">
                Altitude Aerials
              </h3>

              <div className="mt-10 space-y-6 text-lg text-zinc-400">

                <p>📍 Serving Central Alberta</p>

                <p>✉ karlin@altitudeaerials.ca</p>

                <p>☎ 403-741-8424</p>

                <p>⏰ Response within 24 hours</p>

              </div>

            </div>
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}