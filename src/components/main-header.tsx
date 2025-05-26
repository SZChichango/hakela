import Image from "next/image";
import Link from "next/link";

export function MainHeader() {
  return (
    <header className="p-8 shadow-sm flex justify-between items-center">
      <Link href="/">
        <img src="/images/hakela-logo.png" className="w-[100]" />
      </Link>
      <nav className="flex gap-8">
        <Link href="/" className="hover:text-yellow-400 duration-300">
          Home
        </Link>
        <Link href="/pricing" className="hover:text-yellow-400 duration-300">
          Pricing
        </Link>
        <Link href="#" className="hover:text-yellow-400 duration-300">
          About Us
        </Link>
      </nav>

      <div className="user__btns flex gap-8 flex justify-center  items-center">
        <Link href="#">Login</Link>
        <Link href="#" className="bg-yellow-400 text-white p-2 rounded-xl">
          Register
        </Link>
      </div>
    </header>
  );
}
