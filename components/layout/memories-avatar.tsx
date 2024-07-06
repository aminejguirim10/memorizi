"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getFallback } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { User } from "@prisma/client";
const MemoriesAvatar = ({ user }: { user: User }) => {
  // Hoping to make session.update() of next-auth work to update the user without
  // Making all routes of memories layout server-rendered on demond and make maximum
  // of its pages prerendered as static content
  return (
    <DropdownMenu>
      {/* To make the events of the avatar */}
      <DropdownMenuTrigger className="pointer-events-auto">
        <Avatar className="cursor-pointer size-10">
          <AvatarImage
            src={user.image || `https://avatar.vercel.sh/${user.name}`}
          />
          <AvatarFallback>{getFallback(user.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="px-2 py-1">
        <DropdownMenuLabel>{user?.name!}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/memories"} className="w-full">
            {" "}
            Memories
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/create-memory"} className="w-full">
            Create Memory
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/dashboard"} className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/profile"} className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500 hover:cursor-pointer"
          onClick={() => signOut()}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MemoriesAvatar;
