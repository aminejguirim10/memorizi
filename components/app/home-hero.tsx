import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
const HeroSection = () => {
  return (
    <section className="flex flex-col">
      <div className="md:-my-8">
        <Image
          src={"/assets/img1.jpg"}
          width={1500}
          height={200}
          alt="hero image"
          className="h-[85vh] w-full object-contain max-md:h-[70vh] max-md:object-fill"
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 max-md:items-start sm:px-6 md:flex-row lg:px-8">
        <h2 className="text-4xl font-bold max-md:text-3xl max-sm:text-2xl md:w-1/2 md:max-w-3xl">
          Welcome to the world of cherished memories
        </h2>
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="text-muted-foreground max-sm:text-sm">
            Create, preserve, and relieve your precious moments
          </div>
          <div className="flex gap-3">
            <Link
              href={"/signin"}
              className={buttonVariants({
                variant: "default",
                className: "w-fit",
                size: "sm",
              })}
            >
              Sign In
            </Link>
            <Link
              href={"#features"}
              className={buttonVariants({
                variant: "outline",
                className: "w-fit",
                size: "sm",
              })}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
