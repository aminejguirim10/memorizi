"use client"

import { Icons } from "@/components/shared/icons"
import { useRouter } from "next/navigation"

const AuthBackLink = () => {
  const router = useRouter()
  return (
    <div
      className="flex items-center gap-0.5 text-sm text-orange-400 hover:cursor-pointer hover:underline hover:opacity-50"
      onClick={() => router.back()}
    >
      <Icons.back className="size-4" />
      Go Back
    </div>
  )
}

export default AuthBackLink
