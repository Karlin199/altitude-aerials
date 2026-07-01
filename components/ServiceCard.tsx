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
    <section className="mx-auto mb-32 grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

      {/* Image */}

      <div className={`${imageLeft ? "order-1" : "order-2"}`}>
        <div className="group overflow-hidden rounded-3xl shadow-2xl">

          {image.endsWith(".mp4") ? (
            <video
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
           />
         )}

        </div>
      </div>

      {/* Content */}

      <div className={`${imageLeft ? "order-2" : "order-1"}`}>

        <p className="mb-4 uppercase tracking-[0.35em] text-yellow-400">
          OUR SERVICES
        </p>

        <h3 className="mb-6 text-5xl font-bold text-white">
          {title}
        </h3>

        <p className="mb-8 text-lg leading-8 text-gray-400">
          {description}
        </p>

        <ul className="mb-10 space-y-4">

          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-lg text-white"
            >
              <span className="text-yellow-400">✓</span>

              {feature}
            </li>
          ))}

        </ul>

        <Button>
          Learn More
        </Button>

      </div>

    </section>
  );
}