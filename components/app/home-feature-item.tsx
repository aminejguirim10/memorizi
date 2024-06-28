import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export const HomeFeatureItem = ({
  title,
  subTitle,
  icon: Icon,
  buttonTitle,
  link,
  index,
}: {
  title: string;
  subTitle: string;
  icon: any;
  buttonTitle: string;
  link: string;
  index: number; // Prop index for identifying the element
}) => {
  return (
    <div className={`flex gap-6 max-md:gap-4 home-feature-item-${index}`}>
      <div>
        <Icon className="size-5 sm:size-6 text-[#FA6B23] max-md:mt-1" />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 items-start">
        <h2 className="text-xl max-md:text-lg font-semibold flex-1">{title}</h2>
        <p className="text-muted-foreground max-w-[300px] max-md:text-sm flex-1">
          {subTitle}
        </p>
        <Link
          href={link}
          className={buttonVariants({
            variant: "outline",
            className: "w-fit flex gap-2 items-center",
            size: "sm",
          })}
        >
          <span>{buttonTitle}</span>
          <Icons.chevronRight className="size-4" />
        </Link>
      </div>
    </div>
  );
};
