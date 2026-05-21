import * as z from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$/,
      "Password must be alphanumeric (contain at least one letter and one number)"
    ),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
