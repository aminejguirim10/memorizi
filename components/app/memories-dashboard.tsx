import { columns } from "@/app/(memories)/dashboard/columns"
import { DataTable } from "@/app/(memories)/dashboard/data-table"
import { HoverEffect } from "@/components/ui/card-hover-efferct"
import { getPhotos } from "@/actions/photo.actions"
import {
  countPhotosUploadedThisMonth,
  countPhotosUploadedThisWeek,
  countPhotosUploadedThisYear,
  countPhotosUploadedToday,
  getPhotoCountsByDayOfWeek,
  getPhotoCountsByDays,
  getPhotoCountsByMonths,
} from "@/lib/utils"
import WavyText from "@/components/ui/wavy-text"
import LetterPullup from "@/components/ui/letter-pullup"
import MemoryLineChartsWeek from "@/components/app/memory-line-charts-week"
import MemoryBarChartsDay from "@/components/app/memory-bar-charts-day"
import MemoryBarChartsMonth from "@/components/app/memory-bar-charts-month"

const MemoriesDashboard = async () => {
  const photos: any = await getPhotos()
  const photosUpdated = photos.map((photo: any) => {
    return {
      id: photo.id,
      url: photo.url,
      date: new Date(photo.createdAt),
    }
  })
  const numberOfPhotosUploadedToday = countPhotosUploadedToday(photosUpdated)
  const numberOfPhotosUploadedThisWeek =
    countPhotosUploadedThisWeek(photosUpdated)
  const numberOfPhotosUploadedThisMonth =
    countPhotosUploadedThisMonth(photosUpdated)
  const numberOfPhotosUploadedThisYear =
    countPhotosUploadedThisYear(photosUpdated)

  // Fixing the date format for the table filter date
  const photosUpdatedForFilter = photosUpdated.map((photo: any) => {
    return {
      ...photo,
      date: new Date(photo.date).toLocaleDateString(),
    }
  })

  const uploads = [
    {
      title: "Images today",
      description: `
      Today, you have ${numberOfPhotosUploadedToday} image(s) to the system, ensuring your contribution to the project's progress.
      `,
      color: "#23C7FA",
    },
    {
      title: "Images this week",
      description: `Over the course of this week, you have uploaded ${numberOfPhotosUploadedThisWeek} image(s), each one adding value and advancing the project's goals.`,
      color: "#BA8149",
    },
    {
      title: "Images this month",
      description: `Throughout this month, you have consistently uploaded ${numberOfPhotosUploadedThisMonth} image(s), significantly bolstering the project's development and enhancing its overall scope`,
      color: "#FA8E23",
    },
    {
      title: "Images this year",
      description: `Throughout the year, your efforts have resulted in the successful upload of ${numberOfPhotosUploadedThisYear} image(s), each contributing to the ongoing progress and achievements of our project.`,
      color: "#4E90A5",
    },
  ]
  const photosPerDays: Number[] = getPhotoCountsByDays(photosUpdated)
  const photosPerDaysOfWeek: Number[] = getPhotoCountsByDayOfWeek(photosUpdated)
  const photosPerMonth: Number[] = getPhotoCountsByMonths(photosUpdated)

  return (
    <div className="mx-auto max-w-7xl px-4 pt-[80px] sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center pt-8 md:pt-12">
        <WavyText word="Dashboard" className="text-[#FB8F23]" />
        <LetterPullup
          words="Manage data efficiently with a concise, tool-rich overview"
          delay={0.05}
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <HoverEffect items={uploads} />
        <div className="container mx-auto md:py-10">
          <DataTable columns={columns} data={photosUpdatedForFilter} />
        </div>
        <MemoryLineChartsWeek data={photosPerDaysOfWeek} />
        <MemoryBarChartsDay data={photosPerDays} />
        <MemoryBarChartsMonth data={photosPerMonth} />
      </div>
    </div>
  )
}

export default MemoriesDashboard
