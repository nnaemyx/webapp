import Image from "next/image";
import Logo from "/public/assests/Logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="hidden lg:block px-[4rem] ">
    <div className="flex justify-between items-center ">
      <Link href="/">
        <Image src={Logo} width={138} alt="logo" />
      </Link>
      <div>
        <ul className="flex gap-8 font-aeonik items-center font-[250] text-[18px] text-dark">
          <li>Discover</li>
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
         
        </ul>
      </div>
      <div className="flex font-aeonik gap-[18.5px] items-center">
        <Link href="/authentication/signup" className="font-semibold">Sign Up</Link>
        <Link href="/authentication/login">
          <button className="bg-[#072D6B] p-[10px] w-[168px] rounded-[8px] text-light text-[16px]">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Navbar