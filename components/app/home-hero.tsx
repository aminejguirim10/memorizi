import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="md:-my-8">
        <Image
          src={"/assets/img1.jpg"}
          width={1500}
          height={200}
          alt="hero image"
          className="w-full h-[85vh] object-contain max-md:h-[70vh] max-md:object-fill  "
        />
      </div>
      <div className="mx-auto max-w-7xl  flex flex-col md:flex-row gap-4 items-center px-4 sm:px-6 lg:px-8 max-md:items-start">
        <h2 className=" text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:w-1/2 ">
          Welcome to the world of cherished memories
        </h2>
        <div className="flex flex-col  gap-6 md:w-1/2  ">
          <div className="max-sm:text-sm text-muted-foreground">
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
  );
};

export default HeroSection;
