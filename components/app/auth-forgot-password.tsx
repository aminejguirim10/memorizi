import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AuthForgotPasswordForm from "@/components/form/auth-forgotPassword-form";
import { Icons } from "@/components/shared/icons";
import Meteors from "@/components/ui/meteors";
const AuthForgotPassword = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-orange-100 ">
      <Card className="w-[350px]  md:w-[550px] shadow-lg h-fit">
        <div className="relative flex flex-col  w-full items-center justify-center overflow-hidden rounded-lg border bg-background py-8 md:shadow-xl">
          <Meteors number={30} />
          <CardHeader className="flex gap-2">
            <CardTitle className="text-center">Forgot Password</CardTitle>
            <CardDescription className="text-center">
              Enter the email address associated with your account and we will
              send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForgotPasswordForm />
          </CardContent>
          <CardFooter className="flex justify-center ">
            <Link
              href={"/signin"}
              className="flex gap-0.5 items-center text-sm hover:underline text-orange-400 hover:opacity-50 "
            >
              <Icons.back className="size-4 " />
              Go Back
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default AuthForgotPassword;
