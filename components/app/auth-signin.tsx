import AuthSignInForm from "@/components/form/auth-signin-form"
import AuthBackButton from "@/components/shared/auth-back-button"

export default function AuthSignIn() {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-white">
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#fdd8a5,transparent)]"></div>
      </div>
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="z-10 mx-auto w-full max-w-[500px] text-gray-700">
        <AuthBackButton />
        <div className="mb-8 text-center">
          <h1 className="font-geist text-3xl font-normal tracking-tighter">
            Welcome back
          </h1>
          <p className="font-geist font-normal text-gray-800/90 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        <AuthSignInForm />
      </div>
    </div>
  )
}
