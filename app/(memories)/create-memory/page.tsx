import MemoriesCreateMemory from "@/components/app/memories-create-memory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Memory",
  description: "Create a new memory.",
};
const CreateMemoryPage = () => {
  return <MemoriesCreateMemory />;
};

export default CreateMemoryPage;
