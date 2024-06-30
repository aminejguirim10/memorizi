import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Meteors from "@/components/ui/meteors";
import MemoriesCreateMemoryForm from "@/components/form/memories-createMemory-form";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
const MemoriesCreateMemory = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-orange-100 ">
      <GlowingStarsBackgroundCard>
        <div className="w-[350px] md:w-[550px] shadow-lg h-fit outline-dashed outline-2  outline-gray-600 rounded-lg ">
          <div className="relative z-30 flex flex-col w-full items-center justify-center overflow-hidden rounded-lg  bg-background py-2 md:py-4 md:shadow-xl">
            <Meteors number={30} />
            <CardHeader className="flex gap-2">
              <CardTitle className="text-center">Create New Memory</CardTitle>
              <CardDescription className="text-center">
                Upload your memory below
              </CardDescription>
            </CardHeader>
            <CardContent className=" w-full">
              <MemoriesCreateMemoryForm />
            </CardContent>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default MemoriesCreateMemory;
