"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Icons } from "@/components/shared/icons"
const AuthBackButton = () => {
  const router = useRouter()
  return (
    <div className="relative py-4 lg:absolute lg:left-16">
      <Button
        variant={"outline"}
        className="flex gap-2"
        onClick={() => router.back()}
      >
        <Icons.back className="size-4" />
        <span>Back</span>
      </Button>
    </div>
  )
}

export default AuthBackButton
