import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { cache } from "react";

export const ServerSession = cache(async () => {
  return await getServerSession(authOptions);
});
