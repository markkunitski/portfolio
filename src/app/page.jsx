"use client";
import Header from "./components/Header";

import { useState } from "react";
import ElemComponent from "./components/ElemComponent";
import Link from "next/link";
import Projects from "./components/Projects";
import About from "./components/About";
export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="px-5 px-md-16">
        <div className="max-w-screen-md mx-auto">
          <div className="hello w-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h1>Mark Kunitski</h1>
              <span className="text-center">
                React frontend development, ui/ux design
              </span>
            </div>
          </div>
          <About></About>
          <Projects></Projects>
          <div className="methods mb-40">
            <h2 className="text-center mb-28">My practice</h2>
            <ElemComponent name="React" text="react text"></ElemComponent>
            <ElemComponent name="TypeScript" text="react text"></ElemComponent>
            <ElemComponent name="Designs" text="wev text"></ElemComponent>
            <ElemComponent name="JavaScript" text="wev text"></ElemComponent>
            <ElemComponent name="Layouts" text="wev text"></ElemComponent>
          </div>
        </div>
      </main>
    </>
  );
}
