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
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const MemoriesAvatar = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      {/* To make the events of the avatar */}
      <DropdownMenuTrigger className="pointer-events-auto">
        <Avatar className="cursor-pointer size-10">
          <AvatarImage
            src={
              session?.user.image ||
              `https://avatar.vercel.sh/${session?.user.name}`
            }
          />
          <AvatarFallback>{getFallback(session?.user.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="px-2 py-1">
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/memories"}> Memories</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/create-memory"}>Create Memory</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/dashboard"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/profile"}>Profile</Link>
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
