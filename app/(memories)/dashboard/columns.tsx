"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { PhotoTable } from "@/types"
import { Checkbox } from "@/components/ui/checkbox"
import { LinkPreview } from "@/components/ui/link-preview"
export const columns: ColumnDef<PhotoTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: () => {
      return <div className="flex justify-center">ID</div>
    },
    cell: ({ row }) => {
      return (
        <div className="truncatebg-red-500 flex items-center justify-center">
          {row.original.id}
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <Icons.arrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          {row.original.date.toLocaleString()}
        </div>
      )
    },
  },
  {
    accessorKey: "url",
    header: () => {
      return <div className="flex justify-center">Link</div>
    },
    cell: ({ row }) => {
      return (
        <LinkPreview
          className="flex items-center justify-center truncate"
          url={row.original.url}
        >
          {row.original.url}
        </LinkPreview>
      )
    },
  },
  {
    id: "actions",
    header: () => {
      return <div className="flex justify-center">Actions</div>
    },
  },
]
