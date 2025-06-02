import CurvedImageCarousel from "../CurvedImageCarousel";

const carouselItems = [
  {
    id: 1,
    imageUrl: "/frontend/app/images/image1.jpg",
    title: "SEO",
    description:
      "Experience the breathtaking views of sunrise over the mountain ranges. Perfect for early risers and photography enthusiasts.",
    altText: "Sunrise over mountains",
  },
  {
    id: 2,
    imageUrl: "/frontend/app/images/image1.jpg",
    title: "Forest Pathway",
    description:
      "Walk through ancient forests with towering trees and diverse wildlife. Guided tours available daily.",
    altText: "Path through dense forest",
  },
  {
    id: 3,
    imageUrl: "/frontend/app/images/image1.jpg",
    title: "Ocean Cliffs",
    description:
      "Dramatic coastal cliffs with stunning ocean views. Popular spot for sunset watching and sea bird observation.",
    altText: "Cliffs by the ocean",
  },
  {
    id: 4,
    imageUrl: "/frontend/app/images/image1.jpg",
    title: "Alpine Lake",
    description:
      "Crystal clear waters surrounded by snow-capped peaks. Ideal for kayaking and fishing in summer months.",
    altText: "Mountain lake with reflection",
  },
  {
    id: 5,
    imageUrl: "/frontend/app/images/image1.jpg",
    title: "Alpine Lake",
    description:
      "Crystal clear waters surrounded by snow-capped peaks. Ideal for kayaking and fishing in summer months.",
    altText: "Mountain lake with reflection",
  },
];

export default function Slider() {
  return (
    <div className="py-12 px-4 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <CurvedImageCarousel
          items={carouselItems}
          autoRotate={true}
          rotationInterval={6000}
        />
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-200 mt-16">
          Message from the Captain of the Starship
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Led by our visionary founder, Simo Berrada, with over 25 years of
          cosmic experience in the UAE market, <br /> we're fueled by a passion
          for innovation and driven by a singular mission: to help businesses
          like yours ascend to cosmic greatness. Thank you for considering SMB
          DigitalZone for your digital odyssey. <br /> We're thrilled to embark
          on this cosmic journey with you and guide your business toward the
          stars. Contact us today to learn more about our services and how we
          can help you reach your objectives. Unlock the full potential of your
          online presence with SMB DigitalZone, your cosmic companion in the
          digital universe.
        </p>
      </div>
    </div>
  );
}
