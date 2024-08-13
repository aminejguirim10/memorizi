import { getUser } from "@/actions/user.actions"
import { MemoriesNavbar } from "@/components/layout/memories-navbar"

export default async function MemoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()
  return (
    <main>
      <div className="absolute inset-x-0">
        <MemoriesNavbar user={user as any} />
      </div>
      {children}
    </main>
  )
}
