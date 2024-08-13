import { z } from "zod"
export const authSignInSchema = z.object({
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
})

export const authSignUpSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters" }),
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
})

export const authForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email is not valid" }),
})

export const authResetPasswordSchema = z.object({
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
})

export const memoriesProfileSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  bio: z.string().optional(),
})

export const homeContactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must contain at least 2 characters" })
    .max(50, { message: "First name must contain at most 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must contain at least 2 characters" })
    .max(50, { message: "Last name must contain at most 50 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(10, { message: "Message must contain at least 10 characters" })
    .max(500, { message: "Message must contain at most 500 characters" }),
  subject: z
    .string()
    .min(5, { message: "Subject must contain at least 5 characters" })
    .max(100, { message: "Subject must contain at most 100 characters" }),
})
