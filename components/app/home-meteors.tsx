import Meteors from "@/components/ui/meteors"

export function HomeMeteors() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 max-md:h-[200px] md:shadow-xl">
        <Meteors number={40} />
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-[#FA8E23] dark:text-white max-md:text-4xl max-sm:text-3xl">
          Memorizi, your memories are safe with us.
        </p>
      </div>
    </div>
  )
}
