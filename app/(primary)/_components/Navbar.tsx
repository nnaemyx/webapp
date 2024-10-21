"use client";
import useAuthStore from "@/store/formStore";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assests/Logo.png";
import React,{ useEffect } from "react";


function Navbar() {
  const { isLoggedIn, logout} = useAuthStore();

  // useEffect(() => {
  //   initialize();
  // }, [initialize]);

  return (
    <div className="hidden lg:block px-[4rem]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} width={138} height={48.63} alt="logo" />
        </Link>
        <div>
          <ul className="flex gap-8 font-aeonik items-center font-[250] text-[18px] text-dark">
            <li>Discover</li>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <li>My Tickets</li>
                </Link>
                {/* <Link href="/dashboard">
                  <li>My Account</li>
                </Link> */}
              </>
            ) : (
              <>
                <li>Blog</li>
                <Link href="/about">
                  <li>About Us</li>
                </Link>
                <li>Support</li>
                <Link href="/authentication/add-creator">
                  <li>New Creator</li>
                </Link>
                <Link href="/authentication/add-event">
                  <li>Add Event</li>
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className="flex font-aeonik gap-[18.5px] items-center">
          {isLoggedIn ? (
            <div className="flex items-center gap-[18.5px]">
              <button
                onClick={logout}
                className="bg-[#072D6B] p-[10px] w-[168px] rounded-[8px] text-light text-[16px]"
              >
                Signout
              </button>
            </div>
          ) : (
            <>
              <Link href="/authentication/signup" className="font-semibold">
                Sign Up
              </Link>
              <Link href="/authentication/login">
                <button className="bg-[#072D6B] p-[10px] w-[168px] rounded-[8px] text-light text-[16px]">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
