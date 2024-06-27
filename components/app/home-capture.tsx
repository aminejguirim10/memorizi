import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const HomeCapture = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-4">
        <div className="md:w-1/2 flex flex-col gap-4  justify-center ">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold text-[#FAC823]">
            Capture and Share Your Precious Memories
          </h1>
          <p className="text-sm">
            Our platform allows you to easily preserve your cherished memories,
            providing you with convenient access and the ability to share them
            with loved ones.
          </p>
          <div className="flex gap-4 my-2">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Easy Access</h2>
              <p className="text-sm text-muted-foreground">
                Instantly retrieve your memories from anywhere, at any time.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Share Easily</h2>
              <p className="text-sm text-muted-foreground">
                Effortlessly share your precious moments with family and
                friends.
              </p>
            </div>
          </div>
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
            src={"/assets/img3.jpg"}
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

export default HomeCapture;
