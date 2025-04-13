"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

import { AuthForm } from "@/components/auth-form";
import { SubmitButton } from "@/components/submit-button";

import { register, type RegisterActionState } from "../actions";
import { toast } from "@/components/toast";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: "idle",
    }
  );

  useEffect(() => {
    if (state.status === "user_exists") {
      toast({ type: "error", description: "Account already exists!" });
    } else if (state.status === "failed") {
      toast({ type: "error", description: "Failed to create account!" });
    } else if (state.status === "invalid_data") {
      toast({
        type: "error",
        description: "Failed validating your submission!",
      });
    } else if (state.status === "success") {
      toast({ type: "success", description: "Account created successfully!" });

      setIsSuccessful(true);
      router.refresh();
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <div className="flex flex-col h-dvh w-screen items-center justify-start pt-12 bg-[#FF6943]">
      <div className="w-60 h-60 relative mb-6">
        <Image
          src="/images/gibbarosa-logo.avif"
          alt="Gibbarosa Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-8 bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16 pt-8">
          <h3 className="text-xl font-semibold text-gray-900">Sign Up</h3>
          <p className="text-sm text-gray-600">
            Create an account with your email and password
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton isSuccessful={isSuccessful}>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600 mt-4">
            {"Already have an account? "}
            <Link
              href="/login"
              className="font-semibold text-[#FF6943] hover:underline"
            >
              Sign in
            </Link>
            {" instead."}
          </p>
        </AuthForm>
      </div>
    </div>
  );
}
