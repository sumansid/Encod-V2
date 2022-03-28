// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
