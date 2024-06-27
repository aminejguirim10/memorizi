import Meteors from "@/components/ui/meteors";

export function HomeMeteors() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex max-md:h-[200px] h-[300px] w-full  items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <Meteors number={40} />
        <p className="z-10 whitespace-pre-wrap text-center text-5xl max-sm:text-3xl max-md:text-4xl font-medium tracking-tighter text-[#FA8E23] dark:text-white">
          Memorizi, your memories are safe with us.
        </p>
      </div>
    </div>
  );
}
