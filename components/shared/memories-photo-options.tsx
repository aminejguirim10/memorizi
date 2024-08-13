import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { MemoriesDeletePhoto } from "@/components/shared/memories-delete-photo"
const MemoriesPhotoOptions = ({
  url,
  id,
  isDeleting,
  setIsDeleting,
  table,
  setTableData,
}: {
  url: string
  id: string
  isDeleting: boolean
  setIsDeleting: (value: boolean) => void
  table?: any
  setTableData?: React.Dispatch<React.SetStateAction<any[]>>
}) => {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Icons.more className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(url)
              toast("Link Copied", {
                description: "The link has been copied to your clipboard",
              })
            }}
          >
            <div className="flex w-full cursor-pointer items-center gap-2 text-black">
              <Icons.copy className="size-4" />
              Copy Link
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeleting(true)}>
            <div className="flex w-full cursor-pointer items-center gap-2 text-red-500">
              <Icons.trash className="size-4" />
              Delete Photo
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
        {isDeleting && (
          <MemoriesDeletePhoto
            open={isDeleting}
            onOpenChange={setIsDeleting}
            id={id}
            table={table}
            setTableData={setTableData}
          />
        )}
      </DropdownMenu>
    </div>
  )
}

export default MemoriesPhotoOptions
