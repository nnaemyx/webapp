"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Signupimage from "/public/assests/signup image.png";
import Stylizedlogo from "/public/assests/stylized logo.png";
import GoogleIcon from "@/components/icons/GoogleIcon";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import useAuthStore from "@/store/formStore";
import { useToast } from "@/components/ui/use-toast";

function SignupPage() {
  const {
    fullname,
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
    reference,
    location,
    isLoading,
    setLoading,
    setField,
    resetFields,
  } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !fullname || !username || !password || !confirmPassword) {
      toast({
        variant: "destructive",
        description: "Please fill all fields",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        description: "Passwords do not match!",
      });
      return;
    }

    const payload = {
      fullname,
      username,
      email,
      password,
      phoneNumber,
      reference,
      location,
    };

    try {
      const response = await fetch(
        "https://Entrypalbackend.onrender.com/api/goer/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to signup");
      }

      const data = await response.json();
      toast({
        description: "User created successfully,Check your mail for OTP.",
      });
      resetFields();
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      })
      ;
    }
    setLoading(false);
  };

  return (
    <div className="px-4 py-4 font-inter">
      <div className="md:flex justify-center mx-auto">
        <div className="lg:flex-1 lg:px-[10rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-inter font-semibold text-primary">
              Hey, Sign up for free
            </h1>
            <p className="text-[14px] font-inter text-[#645D5D]">
              Your event access experience is about to get fun!
            </p>
          </div>
          <form
            className="mt-[4rem] font-inter md:w-[505px]"
            onSubmit={handleSignup}
          >
            <div className="mt-[33px]">
              <label className="text-[14px]">Full Name</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setField("fullname", e.target.value)}
                className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                required
              />
            </div>
            <div className="mt-[33px]">
              <label className="text-[14px]">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setField("email", e.target.value)}
                className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                required
              />
            </div>
            <div className="flex gap-[13px]">
              <div className="mt-[33px] relative">
                <label className="text-[14px]">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setField("password", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[20px] top-[70%] translate-y-[-50%] cursor-pointer"
                >
                  {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </span>
              </div>
              <div className="mt-[33px] relative">
                <label className="text-[14px]">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setField("confirmPassword", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[20px] top-[70%] translate-y-[-50%] cursor-pointer"
                >
                  {showConfirmPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </span>
              </div>
            </div>
            <div className="flex gap-[13px]">
              <div className="mt-[33px]">
                <label className="text-[14px]">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setField("username", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
              </div>
              <div className="mt-[33px]">
                <label className="text-[14px]">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setField("phoneNumber", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
            </div>
            <div className="flex gap-[13px]">
              <div className="mt-[33px]">
                <label className="text-[14px]">You found us on?</label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setField("reference", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
              <div className="mt-[33px]">
                <label className="text-[14px]">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setField("location", e.target.value)}
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="text-white text-[14px] bg-[#1671D9] w-full mt-[60px] py-[8px] px-[16px] rounded-[8px]"
            >
              {isLoading ? (
                <div
                  className="spinner-border animate-spin text-white inline-block w-4 h-4 border-4 rounded-full"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <p className="text-white">Sign up</p>
              )}
            </button>
            <div className="text-center mt-6 text-[14px] text-[#645D5D]">
              Already have an account?{" "}
              <Link href="/authentication/login" className="text-[#1671D9]">
                Sign in
              </Link>
            </div>
            <Link
              href="https://entrypalbackend.onrender.com/auth/google"
              className="rounded-[20px] border-solid border-[2px] border-[#DADCE0] bg-light h-[40px] lg:w-[400px] flex px-6 text-center items-center mx-auto mt-8"
            >
              <GoogleIcon />
              <h1 className="w-[346px] text-[14px]">Sign up with Google</h1>
            </Link>
            <p className="mt-[74px] text-[12px] text-[#98A2B3]">
              By continuing past this page, you acknowledge that you have read,
              and agree to our{" "}
              <span className="text-[#344054] underline">Terms of Service</span>{" "}
              and our{" "}
              <span className="text-[#344054] underline">Privacy Policy.</span>
            </p>
          </form>
        </div>
        <div className="hidden xl:flex">
          <Image src={Signupimage} alt="signup image" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
