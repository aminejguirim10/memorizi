import { Icons } from "@/components/shared/icons"

const navigations = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/amine.jguirim10/",
    icon: (
      <Icons.facebook
        className="size-6 text-gray-400 transition-colors hover:text-blue-500"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aminejguirim/",
    icon: (
      <Icons.instagram
        className="size-6 text-gray-400 transition-colors hover:text-pink-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/aminejguirim10",
    icon: (
      <Icons.github
        className="size-6 text-gray-400 transition-colors hover:text-gray-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amine-jguirim-817a65267/",
    icon: (
      <Icons.linkedin
        className="size-6 text-gray-400 hover:text-blue-600"
        aria-hidden="true"
      />
    ),
  },
]

export default function HomeFooter() {
  return (
    <footer className="pt-12 md:pb-2">
      <div className="mx-auto max-w-7xl border-t border-t-gray-400 px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigations.map((item) => (
            <a key={item.name} href={item.href} className={"text-gray-400"}>
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-6 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Amine Jguirim, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
