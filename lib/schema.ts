import { z } from "zod";
export const authSignInSchema = z.object({
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

export const authSignUpSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters" }),
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

export const authForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email is not valid" }),
});

export const authResetPasswordSchema = z.object({
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});
