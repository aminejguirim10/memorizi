import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomeSomePoint = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-4">
        <div className="md:w-1/2 flex flex-col gap-4  justify-center ">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-700 inline-block text-transparent bg-clip-text">
            Some say we don't need memories, but they are the threads that weave
            our life's story.
          </h1>
          <p className="text-sm">
            Upload, share, and organize your precious memories effortlessly with
            our user friendly website.
          </p>
          <div className="flex gap-3">
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
            <Link
              href={"/signup"}
              className={buttonVariants({
                variant: "ghost",
                className: "w-fit flex gap-2 items-center",
                size: "sm",
              })}
            >
              <span>Sign Up</span>
              <Icons.chevronRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Image
            src={"/assets/img2.png"}
            alt="image"
            height={200}
            width={200}
            className="w-full sm:h-[350px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSomePoint;
