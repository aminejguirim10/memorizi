"use client";
import Image from "next/image";
import MemoriesPhotoOptions from "../shared/memories-photo-options";
import { useState } from "react";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";
const MemoriesMemoryCard = ({
  url,
  id,
  idx,
}: {
  url: string;
  id: string;
  idx: number;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <div className="flex flex-col gap-2 border px-4 py-2 border-teal-600 rounded-lg">
      <LinkPreview url={url}>
        <Image
          src={url}
          alt={`photo-${idx}`}
          className=" w-[200px] md:w-[400px] h-[100px] md:h-[200px] rounded-md "
          width={400}
          height={400}
        />
      </LinkPreview>

      <div className=" flex justify-end items-end ">
        <div className="border rounded-lg border-teal-600">
          <MemoriesPhotoOptions
            id={id}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
            url={url}
          />
        </div>
      </div>
    </div>
  );
};

export default MemoriesMemoryCard;
