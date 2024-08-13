"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Icons } from "@/components/shared/icons"
const MemoriesBackButton = () => {
  const router = useRouter()
  return (
    <div>
      {/* To make the events of the button */}
      <Button
        size={"sm"}
        variant={"outline"}
        className="pointer-events-auto flex gap-2"
        onClick={() => router.back()}
      >
        <Icons.back className="size-4" />
        <span>Back</span>
      </Button>
    </div>
  )
}

export default MemoriesBackButton
