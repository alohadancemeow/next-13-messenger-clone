"use client";

// import axios from "axios";
// import { signIn, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import AuthSocialButton from "./AuthSocialButton";
import Input from "../input/Input";
import Button from "../Button";

// import { toast } from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  // const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (session?.status === "authenticated") {
  //     router.push("/conversations");
  //   }
  // }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // # Handle toggle variant
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  // # Handle onSubmit form, Register and Signin
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    //   if (variant === "REGISTER") {
    //     axios
    //       .post("/api/register", data)
    //       .then(() =>
    //         signIn("credentials", {
    //           ...data,
    //           redirect: false,
    //         })
    //       )
    //       .then((callback) => {
    //         if (callback?.error) {
    //           toast.error("Invalid credentials!");
    //         }

    //         if (callback?.ok) {
    //           router.push("/conversations");
    //         }
    //       })
    //       .catch(() => toast.error("Something went wrong!"))
    //       .finally(() => setIsLoading(false));
    //   }

    //   if (variant === "LOGIN") {
    //     signIn("credentials", {
    //       ...data,
    //       redirect: false,
    //     })
    //       .then((callback) => {
    //         if (callback?.error) {
    //           toast.error("Invalid credentials!");
    //         }

    //         if (callback?.ok) {
    //           router.push("/conversations");
    //         }
    //       })
    //       .finally(() => setIsLoading(false));
    // }
  };

  // const socialAction = (action: string) => {
  //   setIsLoading(true);

  //   signIn(action, { redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error("Invalid credentials!");
  //       }

  //       if (callback?.ok) {
  //         router.push("/conversations");
  //       }
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name"
              label="Name"
            />
          )}
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="Email address"
            type="email"
          />
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            label="Password"
            type="password"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center ">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <AuthSocialButton icon={BsGithub} onClick={() => {}} />
            <AuthSocialButton icon={BsGoogle} onClick={() => {}} />
          </div>
        </div>
        <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500 ">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
