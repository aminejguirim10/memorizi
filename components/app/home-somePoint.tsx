import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const HomeSomePoint = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:gap-4">
        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          <h1 className="inline-block bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-4xl font-bold text-transparent max-md:text-3xl max-sm:text-2xl">
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
            src={"/assets/img2.png"}
            alt="image"
            height={550}
            width={900}
            className="w-full rounded-2xl sm:h-[350px]"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeSomePoint
