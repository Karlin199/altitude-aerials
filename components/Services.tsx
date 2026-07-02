import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
     id="services"
     className="bg-black py-32"
   >

      <SectionTitle
        eyebrow="WHAT WE DO"
        title="Professional Drone Services"
        description="Helping businesses, farms, real estate professionals, and organizations showcase their work from breathtaking new perspectives."
      />

      <ServiceCard
        title="Aerial Photography"
        description="High-resolution drone photography that highlights your property, business, project, or event with stunning detail."
        image="/images/services/photo.jpg"
        imageLeft={true}
        features={[
          "Real Estate",
          "Farms & Acreages",
          "Commercial Properties",
          "Construction Progress",
          "Tourism & Marketing",
          "Insurance Documentation",
        ]}
      />

      <ServiceCard
        title="Cinematic Videography"
        description="Professional aerial video captured in crisp 4K, perfect for promotional videos, social media, and storytelling."
        image="/images/services/video.mp4"
        imageLeft={false}
        features={[
          "Business Promotions",
          "Commercials",
          "Social Media Content",
          "Events",
          "Tourism",
          "Agriculture",
        ]}
      />

    </section>
  );
}