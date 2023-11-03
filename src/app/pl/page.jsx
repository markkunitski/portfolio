"use client";
import Header from "../components/Header";
import AboutPL from "../components/AboutPL";
import CarouselPL from "../components/CarouselPL";
import ElemComponent from "../components/ElemComponent";
import JourneyPL from "../components/JourneyPL";
import ProjectsPL from "../components/ProjectsPL";
import MyFooter from "../components/MyFooter";
import Head from "next/head";
import Image from "next/image";
import me from "/public/linked.jpg";
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".observe").forEach((block) => {
      console.log(block);
      observer.observe(block);
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="pl" />
      </Head>
      <Header></Header>
      <main className="px-5 px-md-16">
        <div className="max-w-screen-md mx-auto">
          <div className="hello w-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <Image
                className="mb-10 rounded-full"
                width={200}
                height={200}
                src={me}
                alt="mark kunitski"
              ></Image>
              <h1>Mark Kunitski</h1>
              <span className="text-center">
                22-letni Białoruski Frontend Developer React | Projektant UI/UX
              </span>
            </div>
          </div>
          <AboutPL></AboutPL>
          <ProjectsPL></ProjectsPL>
          <div className="methods mb-40 observe">
            <h2 className="text-center mb-28">Moja praktyka</h2>
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
                      <p>Ćwiczenia są tak obszerne, że muszę je podzielić</p>{" "}
                    </li>
                    <li>
                      <p>Całe repozytorium:</p>

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
                        Ćwiczenia z programowania obiektowego (OOP) -
                        hermetyzacja, dziedziczenie i polimorfizm:
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
                        Algorytmy - Rekurencja, Wyszukiwanie, Sortowanie, Grafy,
                        Drzewa, Listy i inne:
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
          <div className="reviews mb-40 observe">
            <h2 className="mb-28 text-center">Moi klienci</h2>
            <CarouselPL></CarouselPL>
          </div>
          <div className="journey mb-40 observe">
            <h2 className="mb-28 text-center">Moja podróż</h2>
            <JourneyPL></JourneyPL>
          </div>
        </div>
      </main>
      <MyFooter></MyFooter>
    </>
  );
};

export default page;
