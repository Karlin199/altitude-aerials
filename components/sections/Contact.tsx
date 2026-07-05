"use client";

import { useForm, ValidationError } from "@formspree/react";

import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaqgvnne");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="bg-black py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-zinc-900 p-16 text-center">

            <div className="mb-8 text-6xl">✅</div>

            <h2 className="text-4xl font-bold text-white">
              Thank You!
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We've received your request and will be in touch within 24 hours.
            </p>

          </div>
        </Container>
      </section>
    );
  }

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
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[var(--brand-gold)]/20"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[var(--brand-gold)]/20"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[var(--brand-gold)]/20"
              />

              <select
                name="projectType"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[var(--brand-gold)]/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Project Type
                </option>
                <option>Real Estate</option>
                <option>Agriculture</option>
                <option>Commercial</option>
                <option>Construction</option>
                <option>Events</option>
                <option>Tourism</option>
                <option>Other</option>
              </select>

              <textarea
                rows={6}
                name="message"
                required
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none transition-all duration-300 focus:border-[var(--brand-gold)] focus:ring-2 focus:ring-[var(--brand-gold)]/20"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className="pt-2">

                <Button>
                  {state.submitting ? "Sending..." : "Send Request"}
                </Button>

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