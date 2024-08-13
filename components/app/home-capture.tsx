import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
const HomeCapture = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:gap-4">
        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#FAC823] max-md:text-3xl max-sm:text-2xl">
            Capture and Share Your Precious Memories
          </h1>
          <p className="text-sm">
            Our platform allows you to easily preserve your cherished memories,
            providing you with convenient access and the ability to share them
            with loved ones.
          </p>
          <div className="my-2 flex gap-4">
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
                className: "flex w-fit items-center gap-2",
                size: "sm",
              })}
            >
              <span>Sign Up</span>
              <Icons.chevronRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={"/assets/img3.jpg"}
            alt="image"
            height={4500}
            width={4500}
            className="w-full rounded-2xl sm:h-[350px]"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeCapture
