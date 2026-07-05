import Button from "../ui/Button";
import Container from "../ui/Container";
import PortfolioCard from "../ui/PortfolioCard";
import SectionTitle from "../ui/SectionTitle";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black py-32"
    >
      <Container>

        <SectionTitle
          eyebrow="FEATURED WORK"
          title="Every Flight Tells a Story"
          description="We're building a collection of stunning aerial photography and cinematic videography from across Central Alberta. Your project could be the next one featured here."
        />

        <div className="mb-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-16 text-center">

          <h3 className="text-4xl font-bold text-white">
            Your Project Could Be Next
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every business has a story worth telling.
            Whether it's a farm, acreage, commercial property,
            construction project or local business,
            we'd love to help showcase it from above.
          </p>

          <div className="mt-10">
            <Button>
              Request a Quote
            </Button>
          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <PortfolioCard
            title="Coming Soon"
            category="Real Estate"
          />

          <PortfolioCard
            title="Coming Soon"
            category="Agriculture"
          />

          <PortfolioCard
            title="Coming Soon"
            category="Commercial"
          />

          <PortfolioCard
            title="Coming Soon"
            category="Construction"
          />

          <PortfolioCard
            title="Coming Soon"
            category="Tourism"
          />

          <PortfolioCard
            title="Coming Soon"
            category="Events"
          />

        </div>

      </Container>
    </section>
  );
}