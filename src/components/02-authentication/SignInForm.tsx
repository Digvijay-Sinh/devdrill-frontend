"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormField } from "@/components/ui/form-field";
import { useRouter } from "next/navigation";
import { Text } from "@/components/ui/typography";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$/,
      "Password must be alphanumeric (contain at least one letter and one number)"
    ),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export function SignInForm() {
  const router = useRouter();

  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "host@devdrill.io",
      password: "password123",
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log("Sign In:", data);
    // Dummy action after sign in
    // router.push("/");
  };

  return (
    <FormProvider {...signInForm}>
      <form onSubmit={signInForm.handleSubmit(onSubmit)} className="space-y-lg w-full">
        <FormField
          name="email"
          label="EMAIL_ADDRESS"
          icon="mail"
          type="email"
          placeholder="enter_email..."
        />
        
        <div className="space-y-sm w-full">
          <div className="flex justify-between items-center w-full">
            <div className="w-full">
              <FormField
                name="password"
                label="ACCESS_CODE"
                icon="key"
                type="password"
                placeholder="enter_password..."
              />
            </div>
          </div>
          <div className="flex justify-end pt-xs w-full">
            <Text as="a" type="code-sm" className="text-secondary-fixed-dim hover:text-secondary-fixed hover:underline decoration-secondary-fixed-dim underline-offset-4" >FORGOT_PASSWORD?</Text>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full mt-xl py-md bg-tertiary-container text-on-tertiary-container border-4 border-outline-variant shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary hover:border-primary-container active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-sm group"
        >
          <Text type="headline-md" className="text-inherit">INITIALIZE_LOGIN</Text>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-inherit">arrow_forward_ios</span>
        </button>
      </form>
    </FormProvider>
  );
}
