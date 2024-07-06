import MemoriesHome from "@/components/app/memories-home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memories",
  description: "Memories of the past, present, and future.",
};
const MemoriesPage = () => {
  return <MemoriesHome />;
};

export default MemoriesPage;
