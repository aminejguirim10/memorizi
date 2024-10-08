"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { authSignUpSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/shared/icons"
import { createUser } from "@/actions/user.actions"
import { toast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"
import Link from "next/link"
import AuthProvidersButtons from "@/components/shared/auth-providers-buttons"

const AuthSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof authSignUpSchema>>({
    resolver: zodResolver(authSignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  const handleClick = useCallback(() => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#fac823", "#fb8f23"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [])
  function onSubmit(values: z.infer<typeof authSignUpSchema>) {
    const handleSubmit = async () => {
      setLoading(true)
      const response = await createUser(
        values.email,
        values.username,
        values.password
      )

      if (response.status === 201) {
        handleClick()
        router.push("/signin")
      } else if (response.status === 400) {
        toast({
          title: "Error creating account",
          description: response.message,
          variant: "destructive",
        })
        setLoading(false)
      } else {
        toast({
          title: "Error creating account",
          description: "Please try again",
          variant: "destructive",
        })
        setLoading(false)
      }
    }
    handleSubmit()
  }
  return (
    <Form {...form}>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your username"
                    {...field}
                    type="text"
                    disabled={loading}
                  />
                </FormControl>
                {form.formState.errors.username && (
                  <FormMessage className="text-xs" />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    type="email"
                    disabled={loading}
                  />
                </FormControl>
                {form.formState.errors.email && (
                  <FormMessage className="text-xs" />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Password</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <Input
                      placeholder="**************"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      disabled={loading}
                    />
                    {showPassword ? (
                      <Icons.eyeSlash
                        className="-ml-8 h-5 w-5 hover:cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    ) : (
                      <Icons.eye
                        className="-ml-8 h-5 w-5 hover:cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    )}
                  </div>
                </FormControl>
                {form.formState.errors.password && (
                  <FormMessage className="text-xs" />
                )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"auth"}
            disabled={loading}
            className="flex w-full gap-3"
          >
            {loading && (
              <svg
                aria-hidden="true"
                className="inline h-6 w-6 animate-spin fill-orange-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {loading ? "Loading" : "Sign Up"}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Already have an account?
            <Link
              className="ml-2 font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500"
              href="/signin"
            >
              Sign In
            </Link>
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Forgot your password?
            <Link
              className="ml-2 font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500"
              href="/forgot-password"
            >
              Reset password
            </Link>
          </p>
        </div>
        <div className="mt-6 border-t pt-6 max-md:pb-6">
          <AuthProvidersButtons text="Sign up" loading={loading} />
        </div>
      </div>
    </Form>
  )
}

export default AuthSignUpForm
