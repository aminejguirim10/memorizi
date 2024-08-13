"use client"
import Image from "next/image"
import MemoriesPhotoOptions from "@/components/shared/memories-photo-options"
import { useState } from "react"
import { LinkPreview } from "@/components/ui/link-preview"
const MemoriesMemoryCard = ({
  url,
  id,
  idx,
}: {
  url: string
  id: string
  idx: number
}) => {
  const [isDeleting, setIsDeleting] = useState(false)
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-teal-600 px-4 py-2">
      <LinkPreview url={url}>
        <Image
          src={url}
          alt={`photo-${idx}`}
          className="h-[100px] w-[200px] rounded-md md:h-[200px] md:w-[400px]"
          width={400}
          height={400}
        />
      </LinkPreview>

      <div className="flex items-end justify-end">
        <div className="rounded-lg border border-teal-600">
          <MemoriesPhotoOptions
            id={id}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
            url={url}
          />
        </div>
      </div>
    </div>
  )
}

export default MemoriesMemoryCard
