import AuthResetPassword from "@/components/app/auth-resetPassword";

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
