"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormField } from "@/components/ui/form-field";
import { Text } from "@/components/ui/typography";

export const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  onSuccess?: () => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Sign Up:", data);
    // Dummy action after sign up
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <FormProvider {...signUpForm}>
      <form onSubmit={signUpForm.handleSubmit(onSubmit)} className="space-y-lg w-full">
        <FormField
          name="username"
          label="USERNAME"
          icon="badge"
          type="text"
          placeholder="choose_alias..."
        />
        
        <button 
          type="submit"
          className="w-full mt-xl py-md bg-primary-container text-on-primary-container border-4 border-outline-variant shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary hover:border-primary-container active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-sm group"
        >
          <Text type="headline-md" className="text-inherit">CREATE_ACCOUNT</Text>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-inherit">person_add</span>
        </button>
      </form>
    </FormProvider>
  );
}
