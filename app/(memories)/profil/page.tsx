import MemoriesProfile from "@/components/app/memories-profile";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Profile",
  description: "Your profile page.",
};
const ProfilePage = () => {
  return <MemoriesProfile />;
};

export default ProfilePage;
