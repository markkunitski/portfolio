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
            <ElemComponent
              name="React"
              text={
                <>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/portfolio"
                  >
                    https://github.com/markkunitski/portfolio
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/React-Endgame"
                  >
                    https://github.com/markkunitski/React-Endgame
                  </a>

                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/-ReduxLessons-"
                  >
                    https://github.com/markkunitski/-ReduxLessons-
                  </a>
                  <p role="a" className="w-full inline-block">
                    https://github.com/markkunitski/robbybobby - Private
                  </p>
                </>
              }
            ></ElemComponent>
            <ElemComponent
              name="TypeScript"
              text={
                <>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/Api-users-n-todos--ts--router-domv6"
                  >
                    https://github.com/markkunitski/Api-users-n-todos--ts--router-domv6
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://navigate-app.vercel.app/"
                  >
                    https://navigate-app.vercel.app/
                  </a>

                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/-rtk-rtkquery-ts.-RESTApi-"
                  >
                    https://github.com/markkunitski/-rtk-rtkquery-ts.-RESTApi-
                  </a>
                  <p role="a" className="w-full inline-block">
                    https://github.com/markkunitski/CQ-admin - Private
                  </p>
                </>
              }
            ></ElemComponent>
            <ElemComponent
              name="UI/UX"
              text={
                <>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://imageupload.io/en/yCGUjNim1kKxOL7"
                  >
                    https://imageupload.io/en/yCGUjNim1kKxOL7
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://imageupload.io/en/ARFllCwuTKv5Uro"
                  >
                    https://imageupload.io/en/ARFllCwuTKv5Uro
                  </a>

                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://imageupload.io/en/Hipk8v96W6pTwL2"
                  >
                    https://imageupload.io/en/Hipk8v96W6pTwL2
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://imageupload.io/en/s2dJHfHvjt9ARX4"
                  >
                    https://imageupload.io/en/s2dJHfHvjt9ARX4
                  </a>
                </>
              }
            ></ElemComponent>

            <ElemComponent
              name="JavaScript"
              text={
                <>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://api-practice-seven.vercel.app/"
                  >
                    https://api-practice-seven.vercel.app/
                  </a>
                  <ol className="my-8">
                    <li>
                      <p>The practice so big i need to chunk it</p>{" "}
                    </li>
                    <li>
                      <p>Whole repo:</p>

                      <a
                        target="_blank"
                        className="w-full inline-block"
                        href="https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts"
                      >
                        https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts
                      </a>
                    </li>
                    <li>
                      <p>
                        {" "}
                        OOP practice - encapsulation, inheritance, and
                        polymorphism:
                      </p>

                      <a
                        target="_blank"
                        className="w-full inline-block"
                        href="https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts/OOP"
                      >
                        https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts/OOP
                      </a>
                    </li>
                    <li>
                      <p>
                        Algorithms - Recursion, Seacrh, Sort, Graphs, Trees,
                        Lists and more:
                      </p>
                      <a
                        target="_blank"
                        className="w-full inline-block"
                        href="https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts/algorithms"
                      >
                        https://github.com/markkunitski/JSPractice_497problems_Algorithms_OOP/tree/main/scripts/algorithms
                      </a>
                    </li>
                  </ol>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/minibit-OOP_Api_cookies_ajax"
                  >
                    https://github.com/markkunitski/minibit-OOP_Api_cookies_ajax
                  </a>
                </>
              }
            ></ElemComponent>
            <ElemComponent
              name="Layouts"
              text={
                <>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/News-page"
                  >
                    https://github.com/markkunitski/News-page
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/Web-pages/tree/Bees-v2-landing"
                  >
                    https://github.com/markkunitski/Web-pages/tree/Bees-v2-landing
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/Web-pages/tree/Grid-practice"
                  >
                    https://github.com/markkunitski/Web-pages/tree/Grid-practice
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/Web-pages/tree/LoginPage"
                  >
                    https://github.com/markkunitski/Web-pages/tree/LoginPage
                  </a>
                  <a
                    target="_blank"
                    className="w-full inline-block"
                    href="https://github.com/markkunitski/Web-pages/tree/Teashop"
                  >
                    https://github.com/markkunitski/Web-pages/tree/Teashop
                  </a>
                </>
              }
            ></ElemComponent>
          </div>
        </div>
      </main>
    </>
  );
}
