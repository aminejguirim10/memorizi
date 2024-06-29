"use client";

import { Icons } from "@/components/shared/icons";
import { useRouter } from "next/navigation";

const AuthBackLink = () => {
  const router = useRouter();
  return (
    <div
      className="flex gap-0.5 items-center text-sm hover:underline text-orange-400 hover:opacity-50 hover:cursor-pointer"
      onClick={() => router.back()}
    >
      <Icons.back className="size-4" />
      Go Back
    </div>
  );
};

export default AuthBackLink;
