import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Meteors from "@/components/ui/meteors";
import MemoriesProfileForm from "@/components/form/memories-profile-form";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { getUser } from "@/actions/user.actions";

const MemoriesProfile = async () => {
  {
    /* Hoping to find a way to keep the static rendering from SSG without having 
    to call getServerSession that uses cookies and headers and make the page dynamic. */
  }
  const user = await getUser();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-orange-100 ">
      <GlowingStarsBackgroundCard>
        <div className="flex flex-col gap-2 pt-10">
          <div className="w-[350px] md:w-[550px] shadow-lg h-fit outline-dashed outline-2  outline-gray-600 rounded-lg ">
            <div className="relative z-30 flex flex-col w-full items-center justify-center overflow-hidden rounded-lg  bg-background py-2 md:py-4 md:shadow-xl">
              <Meteors number={30} />
              <CardHeader className="flex gap-2">
                <CardTitle className="text-center">Your Profile</CardTitle>
                <CardDescription className="text-center">
                  Update your profile below
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full">
                <MemoriesProfileForm user={user as any} />
              </CardContent>
            </div>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default MemoriesProfile;
