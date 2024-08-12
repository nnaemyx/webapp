"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Signupimage from "/public/assests/signup image.png";
import Stylizedlogo from "/public/assests/stylized logo.png";
import GoogleIcon from "@/components/icons/GoogleIcon";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import useAuthStore from "@/store/formStore";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { email, password, login, isLoading, setLoading, isLoggedIn } = useAuthStore();
  const error = useAuthStore((state: any) => state.error);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!email || !password) {
      toast({
        variant: "destructive",
        description: "Please fill in all fields.",
      });
      return;
    }
    try {
      await login(email, password);
  
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      });
    }
  }, [error]);

  useEffect(() => {
    if (isLoggedIn) {
      toast({
        description: "User logged in successfully.",
      });
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="px-4 py-4">
      <div className="md:flex justify-center mx-auto">
        <div className="hidden xl:flex">
          <Image src={Signupimage} alt="signup image" />
        </div>
        <div className="lg:flex-1 lg:px-[10rem]">
          <div>
            <Image src={Stylizedlogo} alt="signup image" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-inter font-semibold text-primary">
              Welcome back, we missed ya!
            </h1>
            <p className="text-[14px] font-inter text-[#645D5D]">
              Your event access experience bout’ to get fun!
            </p>
          </div>
          <form
            className="mt-[4rem] font-inter md:w-[505px]"
            onSubmit={handleLogin}
          >
            <div className="mt-[33px]">
              <label className="text-[14px]">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => useAuthStore.setState({ email: e.target.value })}
                className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
              />
            </div>

            <div className="mt-[33px] relative">
              <label className="text-[14px]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => useAuthStore.setState({ password: e.target.value })}
                className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
              >
                {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
              </span>
              <Link
                className="underline text-[#667185] text-[14px] flex justify-end mt-2"
                href="/authentication/forgotpassword"
              >
                Forgot password
              </Link>
            </div>

            <button
              disabled={isLoading}
              className="text-light text-[14px] bg-[#1671D9] w-full mt-[60px] py-[8px] px-[16px] rounded-[8px]"
            >
              {isLoading ? (
                <div
                  className="spinner-border animate-spin text-white inline-block w-4 h-4 border-4 rounded-full"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="text-white">Sign in</p>
              )}
            </button>
            <p className="text-center mt-6 text-[14px] text-[#645D5D]">
              New to Entrypal?{" "}
              <Link href="/authentication/signup" className="text-[#1671D9]">
                Sign up
              </Link>
            </p>
            <Link
              href="https://entrypalbackend.onrender.com/auth/google"
              className="rounded-[20px] border-solid border-[2px] border-[#DADCE0] bg-light h-[40px] lg:w-[400px] flex px-6 text-center items-center mx-auto mt-8"
            >
              <GoogleIcon />
              <h1 className="w-[346px] text-[14px]">Sign in with Google</h1>
            </Link>
            <p className="mt-[74px] text-[12px] text-[#98A2B3]">
              By continuing past this page, you acknowledge that you read, and
              agree to our{" "}
              <span className="text-[#344054] underline">Terms of Service</span>{" "}
              and our{" "}
              <span className="text-[#344054] underline">Privacy Policy.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
