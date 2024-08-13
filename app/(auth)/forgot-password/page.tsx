import AuthForgotPassword from "@/components/app/auth-forgot-password"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot your password? No problem!",
}
const ForgotPasswordPage = () => {
  return <AuthForgotPassword />
}

export default ForgotPasswordPage
