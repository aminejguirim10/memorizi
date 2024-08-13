import MemoriesDashboard from "@/components/app/memories-dashboard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your dashboard.",
}
const DashboardPage = async () => {
  return <MemoriesDashboard />
}

export default DashboardPage
