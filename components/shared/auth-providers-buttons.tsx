"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "@/components/shared/icons";
const AuthProvidersButtons = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row max-sm:flex-col items-center justify-center  gap-4">
      <Button
        className="w-full flex gap-4"
        variant={"outline"}
        onClick={() => {
          signIn("google");
        }}
      >
        <Icons.googleAuth className="w-6 h-6" />
        <span className="font-bold ">{text} with Google</span>
      </Button>
      <Button
        className="w-full flex gap-4"
        variant={"outline"}
        onClick={() => {
          signIn("github");
        }}
      >
        <Icons.githubAuth className="w-6 h-6" />
        <span className="font-bold ">{text} with Github</span>
      </Button>
    </div>
  );
};

export default AuthProvidersButtons;
