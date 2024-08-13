import { deletePhoto } from "@/actions/photo.actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"

export function MemoriesDeletePhoto({
  open,
  onOpenChange,
  id,
  table,
  setTableData,
}: {
  id: string
  open: boolean
  onOpenChange: (open: boolean) => void
  table: any
  setTableData?: React.Dispatch<React.SetStateAction<any[]>>
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            photo and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-500"
            onClick={async () => {
              const response = await deletePhoto(id)
              if (response.status === 200) {
                toast("Photo Deleted", {
                  description: "The photo has been deleted",
                })
                if (table && setTableData) {
                  const newData = table.options.data.filter(
                    (row: any) => row.id !== id
                  )
                  setTableData(newData)
                }
              } else {
                toast("Error", {
                  description: response.message,
                })
              }
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
