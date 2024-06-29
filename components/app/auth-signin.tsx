import Link from "next/link";
import AuthSignInForm from "@/components/form/auth-signin-form";
import AuthProvidersButtons from "@/components/shared/auth-providers-buttons";
import AuthBackButton from "@/components/shared/auth-back-button";

export default function AuthSignIn() {
  return (
    <div className="flex min-h-[100dvh] relative items-center justify-center bg-gray-100 px-4 dark:bg-white">
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#fdd8a5,transparent)]"></div>
      </div>
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="mx-auto z-10 text-gray-700 w-full max-w-[500px]">
        <AuthBackButton />
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-normal font-geist tracking-tighter">
            Welcome back
          </h1>
          <p className="text-gray-800/90 dark:text-gray-400 font-geist font-normal">
            Sign in to your account to continue
          </p>
        </div>
        <AuthSignInForm />
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link
              className="font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500 ml-2"
              href="/signup"
            >
              Sign Up
            </Link>
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Forgot your password?
            <Link
              className="font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500 ml-2"
              href="/forgot-password"
            >
              Reset password
            </Link>
          </p>
        </div>
        <div className="mt-6 border-t pt-6 max-md:pb-6">
          <AuthProvidersButtons text="Sign in" />
        </div>
      </div>
    </div>
  );
}
