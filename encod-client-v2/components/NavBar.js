import React from "react";
import Link from "next/link";
import { TerminalIcon } from "@heroicons/react/solid";
import { useUser } from "@auth0/nextjs-auth0";
import LoginBtn from "./LoginBtn";
import Image from "next/image";
import GithubButton from "react-github-login-button";
import Example from "./Example";

const NavBar = () => {
  const { user, isLoading, error } = useUser();
  return (
    <nav className="bg-white">
      <div>
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <div className="flex items-center space-x-1 cursor-pointer">
            <TerminalIcon className="flex h-10 w-10" />
            <Link href="/">
              <h1 className="text-4xl lg:text-4xl font-bold">Encod</h1>
            </Link>
          </div>

          <div className="flex space-x-4 items-center">
            <Link
              href="https://github.com/sumansid/Encod"
              class="hover:text-gray-600 text-gray-900"
            >
              Contribute
            </Link>
            <Link
              href="https://github.com/sumansid/Encod"
              class="hover:text-gray-600 text-gray-900"
            >
              How it Works?
            </Link>
            {user ? (
              <>
                <Example user={user} />
              </>
            ) : (
              <Link href="/api/auth/login">
                <GithubButton />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
