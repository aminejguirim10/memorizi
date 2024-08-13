import HomeCapture from "@/components/app/home-capture"
import HomeFaqs from "@/components/app/home-faqs"
import HomeFeatures from "@/components/app/home-features"
import HeroSection from "@/components/app/home-hero"
import { HomeMeteors } from "@/components/app/home-meteors"
import HomeSomePoint from "@/components/app/home-somePoint"
import { HomeTestimonials } from "@/components/app/home-testimonials"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeSomePoint />
      <HomeFeatures />
      <HomeCapture />
      <HomeMeteors />
      <HomeTestimonials />
      <HomeFaqs />
    </div>
  )
}

export default HomePage
