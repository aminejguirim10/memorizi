import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Meteors from "@/components/ui/meteors"
import AuthResetPasswordForm from "@/components/form/auth-resetPassword-form"

const AuthResetPassword = ({ id, token }: { id: string; token: string }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-orange-100">
      <Card className="h-fit w-[350px] shadow-lg md:w-[550px]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-2 md:py-4 md:shadow-xl">
          <Meteors number={30} />
          <CardHeader className="flex gap-2">
            <CardTitle className="text-center">Reset your password</CardTitle>
            <CardDescription className="text-center">
              Please enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <AuthResetPasswordForm id={id} token={token} />
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default AuthResetPassword
