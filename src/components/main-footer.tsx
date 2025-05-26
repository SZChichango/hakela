import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-indigo-100 flex flex-col p-4 justify-between items-center h-[400]">
      <div
        id="footer__links"
        className="w-full flex p-4 justify-between items-center mt-22"
      >
        <Link href="#">
          <img src="/images/hakela-logo.png" className="w-[200]" alt="Logo" />
        </Link>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              FAQ
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400 duration-300">
              Help Center / Support
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm text-gray-700">
        Copyright &copy; 2025 Hakela, Inc. All rights reserved
      </p>
    </footer>
  );
};

export default MainFooter;
