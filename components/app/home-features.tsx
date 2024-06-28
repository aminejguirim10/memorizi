"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { HomeFeaturesItems } from "@/constants";
import { HomeFeatureItem } from "@/components/app/home-feature-item";

const HomeFeatures = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    HomeFeaturesItems.forEach((feature, index) => {
      gsap.fromTo(
        `.home-feature-item-${index}`,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.home-feature-item-${index}`,
            start: "top 80%", // Start the animation when the element is 80% into view
            end: "bottom top", // End the animation when the element goes out of view
            toggleActions: "play none none none", // Trigger the animation only once
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="features"
      className="mx-auto max-w-7xl flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-2 md:py-4 "
    >
      <div className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold text-[#FA4323]">
        Easily Upload Your Precious Memories
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-x-8 gap-y-8 md:gap-y-14">
        {HomeFeaturesItems.map((feature, i) => (
          <HomeFeatureItem
            key={i}
            title={feature.title}
            icon={feature.icon}
            subTitle={feature.subTitle}
            buttonTitle={feature.buttonTitle}
            link={feature.link}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;
