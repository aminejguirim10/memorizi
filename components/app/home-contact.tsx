import React from "react";
import HomeContactForm from "@/components/form/home-contactForm";
import WavyText from "@/components/ui/wavy-text";
import LetterPullup from "@/components/ui/letter-pullup";
const HomeContact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mt-8 md:mt-12">
        <WavyText word="Contact Us" className="text-[#FB8F23]" />
        <LetterPullup
          words=" The contact page allows users to send us their messages"
          delay={0.05}
        />
      </div>
      <HomeContactForm />
    </div>
  );
};

export default HomeContact;
