import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const MemoreisHomeNoMemories = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] outline-dashed outline-teal-600 outline-2 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-4 text-teal-700">
        <Icons.image className="size-10 md:size-14 " />
        <div className="text-orange-600 text-center font-semibold text-lg md:text-xl">
          <p>You don't have any memories yet</p>
          <p>Go create one now</p>
        </div>
        <Link
          href={"/create-memory"}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Create Memory
        </Link>
      </div>
    </div>
  );
};

export default MemoreisHomeNoMemories;
