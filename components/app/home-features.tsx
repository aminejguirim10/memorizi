import Link from "next/link";
import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { HomeFeaturesItems } from "@/constants";

const HomeFeatures = () => {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-2 md:py-4 "
    >
      <div className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold text-[#FA4323]">
        Easily Upload Your Precious Memories
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-x-8 gap-y-8 md:gap-y-14">
        {HomeFeaturesItems.map((feature, i) => (
          <HomeFeatureItem
            key={i}
            title={feature.title}
            icon={feature.icon}
            subTitle={feature.subTitle}
            buttonTitle={feature.buttonTitle}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;

const HomeFeatureItem = ({
  title,
  subTitle,
  icon: Icon,
  buttonTitle,
  link,
}: {
  title: string;
  subTitle: string;
  icon: any;
  buttonTitle: string;
  link: string;
}) => {
  return (
    <div className="flex gap-6 max-md:gap-4 ">
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
