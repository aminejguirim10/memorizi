import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AuthForgotPasswordForm from "@/components/form/auth-forgotPassword-form"
import Meteors from "@/components/ui/meteors"
import AuthBackLink from "@/components/shared/auth-back-link"
const AuthForgotPassword = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-orange-100">
      <Card className="h-fit w-[350px] shadow-lg md:w-[550px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-2 md:py-4 md:shadow-xl">
          <Meteors number={30} />
          <CardHeader className="flex gap-2">
            <CardTitle className="text-center">Forgot Password</CardTitle>
            <CardDescription className="text-center">
              Enter the email address associated with your account and we will
              send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <AuthForgotPasswordForm />
          </CardContent>
          <CardFooter className="flex w-full items-center justify-center">
            <AuthBackLink />
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}

export default AuthForgotPassword
