import React from "react";
import Image from "next/image";
import Homes from "./home";
import Navbar from "./component/navbar";
import Navbar_not_auth from "./component/navbar_not_auth";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar_not_auth />
      
      <Homes />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p>Hello World</p>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Powered by Pijar
        </footer>
      </div>
    </div>
  );
}
