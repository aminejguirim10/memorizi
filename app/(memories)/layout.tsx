import { MemoriesNavbar } from "@/components/layout/memories-navbar";

export default function MemoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute inset-0">
        <MemoriesNavbar />
      </div>
      {children}
    </main>
  );
}
