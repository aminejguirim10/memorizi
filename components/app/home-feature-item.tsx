import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"

export const HomeFeatureItem = ({
  title,
  subTitle,
  icon: Icon,
  buttonTitle,
  link,
  index,
}: {
  title: string
  subTitle: string
  icon: any
  buttonTitle: string
  link: string
  index: number // Prop index for identifying the element
}) => {
  return (
    <div className={`flex gap-6 max-md:gap-4 home-feature-item-${index}`}>
      <div>
        <Icon className="size-5 text-[#FA6B23] max-md:mt-1 sm:size-6" />
      </div>
      <div className="flex flex-col items-start gap-3 md:gap-4">
        <h2 className="flex-1 text-xl font-semibold max-md:text-lg">{title}</h2>
        <p className="max-w-[300px] flex-1 text-muted-foreground max-md:text-sm">
          {subTitle}
        </p>
        <Link
          href={link}
          className={buttonVariants({
            variant: "outline",
            className: "flex w-fit items-center gap-2",
            size: "sm",
          })}
        >
          <span>{buttonTitle}</span>
          <Icons.chevronRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
