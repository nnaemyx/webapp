"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Signupimage from "/public/assests/signup image.png";
import Stylizedlogo from "/public/assests/stylized logo.png";
import GoogleIcon from "@/components/icons/GoogleIcon";
import EyeShowIcon from "@/components/icons/EyeShowIcon";
import EyeHideIcon from "@/components/icons/EyeHideIcon";
import useAuthStore from "@/store/formStore";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function SignupPage() {
  const router = useRouter();

  const { signup, setLoading, isLoading, error, success } = useAuthStore();
  const isLoggedIn = useAuthStore((state: any) => state.isLoggedIn);

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reference, setReference] = useState("");
  const [location, setLocation] = useState("");
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
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        description: "Passwords do not match!",
      });
      setLoading(false);
      return;
    }

    try {
      await signup(
        email,
        password,
        confirmPassword,
        fullname,
        username,
        phoneNumber,
        reference,
        location
      );
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn && success) {
      toast({
        description: success,
      });
      router.push("/authentication/otp");
    }
  }, [isLoggedIn, success]);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        description: error,
      });
    }
  }, [error]);

  return (
    <div className="px-4 py-4 font-inter">
      <div className="md:flex justify-center mx-auto">
        <div className="lg:flex-1 lg:px-[10rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-primary">
              Hey, Sign up for free
            </h1>
            <p className="text-[14px] text-[#645D5D]">
              Your event access experience is about to get fun!
            </p>
          </div>
          <form className="mt-[4rem] md:w-[505px]" onSubmit={handleSignup}>
            <div className="mt-[33px]">
              <label className="text-[14px]">Full Name</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                required
              />
            </div>
            <div className="mt-[33px]">
              <label className="text-[14px]">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                required
              />
            </div>
            <div className="flex gap-[13px]">
              <div className="mt-[33px] relative">
                <label className="text-[14px]">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[20px] top-[70%] transform -translate-y-[50%] cursor-pointer"
                >
                  {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </span>
              </div>
              <div className="mt-[33px] relative">
                <label className="text-[14px]">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[20px] top-[70%] transform -translate-y-[50%] cursor-pointer"
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
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                  required
                />
              </div>
              <div className="mt-[33px]">
                <label className="text-[14px]">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
            </div>
            <div className="flex gap-[13px]">
              <div className="mt-[33px]">
                <label className="text-[14px]">You found us on?</label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
              <div className="mt-[33px]">
                <label className="text-[14px]">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] px-[12px] py-[8px]"
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="text-white bg-[#1671D9] w-full mt-[60px] py-[8px] px-[16px] rounded-[8px]"
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
              className="rounded-[20px] border-[2px] border-[#DADCE0] bg-light h-[40px] lg:w-[400px] flex items-center px-6 text-center mx-auto mt-8"
            >
              <GoogleIcon />
              <p className="font-inter w-full">Sign up with Google</p>
            </Link>
          </form>
        </div>
        <div className="lg:flex-1 hidden lg:block relative">
          <div>
            <Image
              src={Signupimage}
              alt="signup image"
              className="h-[100vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
