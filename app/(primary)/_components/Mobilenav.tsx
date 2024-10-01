"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/assests/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import useAuthStore from "@/store/formStore";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

function Mobilenav() {
  const { isLoggedIn, logout, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Discover", href: "/" },
    { name: "Sign Up", href: "/authentication/signup" },
    { name: "About Us", href: "/about" },
    { name: "Sign In", href: "/authentication/login" },
    { name: "Blog", href: "/blog" },
    { name: "New Creator", href: "/authentication/add-creator" },
    { name: "Support", href: "/support" },
    { name: "Add Event", href: "/add-event" },
  ];

  return (
    <div className="lg:hidden flex px-8">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={118} height={43} alt="logo" />
        </Link>
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="cursor-pointer"
          >
            <path
              d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-[283px] h-[324px] bg-[#072D6B] text-white z-50 p-4">
          <div className="flex justify-end">
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="cursor-pointer"
            >
              <path
                d="M18.36 6.64L17.64 5.92L12 11.56L6.36 5.92L5.64 6.64L11.28 12.28L5.64 17.92L6.36 18.64L12 13L17.64 18.64L18.36 17.92L12.72 12.28L18.36 6.64Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 mx-auto">
            {isLoggedIn ? (
              <>
                <Link href="/">
                  <p
                    className={`block py-2 px-2 text-[14px] text-left ${
                      inter.className
                    } ${
                      pathname === "/"
                        ? "text-[#78ABFF]"
                        : "text-white"
                    }`}
                  >
                    Discover
                  </p>
                </Link>
                <Link href="/ticket">
                  <p
                    className={`block py-2 px-2 text-[14px] text-left ${
                      inter.className
                    } ${
                      pathname === "/ticket"
                        ? "text-[#78ABFF]"
                        : "text-white"
                    }`}
                  >
                    My Tickets
                  </p>
                </Link>
                {/* <Link href="/dashboard">
                  <p
                    className={`block py-2 px-2 text-[14px] text-left ${
                      inter.className
                    } ${
                      pathname === "/"
                        ? "text-[#78ABFF]"
                        : "text-gray-500"
                    }`}
                  >
                    My Account
                  </p>
                </Link> */}
                <p
                  onClick={logout}
                  className="block py-2 px-2 text-[14px] text-left text-[#FD3333] cursor-pointer"
                >
                  Log Out
                </p>
              </>
            ) : (
              <>
                {menuItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <p
                      className={`block py-2 px-2 text-[14px] text-left ${
                        inter.className
                      } ${
                        pathname === item.href ? "text-[#78ABFF]" : "text-white"
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobilenav;
