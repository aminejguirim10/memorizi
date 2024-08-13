import HomeContact from "@/components/app/home-contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us.",
}
const ContactPage = () => {
  return <HomeContact />
}

export default ContactPage
