import Image from "next/image";
import Button from "./Button";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  features: string[];
  imageLeft?: boolean;
};

export default function ServiceCard({
  title,
  description,
  image,
  features,
  imageLeft = true,
}: ServiceCardProps) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:gap-14 lg:grid-cols-2 lg:gap-20 lg:px-8">

      {/* Image */}

      <div
        className={`${
          imageLeft ? "order-1" : "order-1 lg:order-2"
        }`}
      >
        <div className="group overflow-hidden rounded-3xl shadow-2xl">

          {image.endsWith(".mp4") ? (
            <video
              className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={image}
              alt={title}
              width={900}
              height={600}
              className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          )}

        </div>
      </div>

      {/* Content */}

      <div
        className={`${
          imageLeft ? "order-2" : "order-2 lg:order-1"
        }`}
      >

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400 md:text-sm">
          OUR SERVICES
        </p>

        <h3 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h3>

        <p className="mb-8 text-base leading-7 text-gray-400 md:text-lg md:leading-8">
          {description}
        </p>

        <ul className="mb-10 space-y-3">

          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-base text-white md:text-lg"
            >
              <span className="text-yellow-400">✓</span>

              {feature}
            </li>
          ))}

        </ul>

        <div className="w-full sm:w-auto">
          <Button>
            Learn More
          </Button>
        </div>

      </div>

    </section>
  );
}