"use client"
import { SessionProvider } from "next-auth/react"
import { RootProvider } from "fumadocs-ui/provider"
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <RootProvider>{children}</RootProvider>
    </SessionProvider>
  )
}

export default Providers
