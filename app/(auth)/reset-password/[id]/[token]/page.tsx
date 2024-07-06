import AuthResetPassword from "@/components/app/auth-resetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your password.",
};

const ResetPasswordPage = ({
  params: { id, token },
}: {
  params: {
    id: string;
    token: string;
  };
}) => {
  return <AuthResetPassword id={id} token={token} />;
};

export default ResetPasswordPage;
