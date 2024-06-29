import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Meteors from "@/components/ui/meteors";
import AuthResetPasswordForm from "../form/auth-resetPassword-form";

const AuthResetPassword = ({ id, token }: { id: string; token: string }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-orange-100 ">
      <Card className="w-[350px]  md:w-[550px] shadow-lg h-fit">
        <div className="relative flex flex-col  w-full items-center justify-center overflow-hidden rounded-lg border bg-background py-2 md:py-4 md:shadow-xl">
          <Meteors number={30} />
          <CardHeader className="flex gap-2">
            <CardTitle className="text-center">Reset your password</CardTitle>
            <CardDescription className="text-center">
              Please enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent className=" w-full">
            <AuthResetPasswordForm id={id} token={token} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default AuthResetPassword;
