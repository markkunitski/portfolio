import React from "react";
import Image from "next/image";
import austria from "/public/projects/austria.jpg";
import CQ from "/public/projects/CQ.jpg";
import daunt from "/public/projects/nodaunt.jpg";
import posts from "/public/projects/posts.jpg";
import tasks from "/public/projects/tasks.jpg";
import zeusky from "/public/projects/zeusky.jpg";
const Projects = () => {
  return (
    <div className="mb-40 observe">
      <h2 className="text-center mb-28">Moje projekty</h2>
      <div className="projects">
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={CQ}
            alt="Panel CQ Dashboard"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">Panel City Quest</h5>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">RTK Query</div>
              <div className="badge badge-outline">React Router Dom </div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline ">RWD</div>
              <p className="mb-6 mt-4">
                Ten projekt skupiał się na tworzeniu efektywnej logiki do
                wyświetlania informacji o rezerwacjach i procesach logowania.
                Dzięki użyciu React i TypeScript zoptymalizowałem doświadczenie
                użytkownika w dostępie i interakcji z danymi rezerwacji,
                jednocześnie poprawiając bezpieczeństwo i prostotę procesu
                logowania. Odkryj, jak w tym projekcie uczyniłem złożone
                informacje o rezerwacjach i procedury logowania prostymi.
              </p>
            </div>

            <div className="flex justify-end">
              <a className=" inline-block" role="a">
                Strona Prywatna :(
              </a>
            </div>
          </div>
        </div>
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={austria}
            alt="Just Escape Austria"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">Just Escape Austria</h5>
              <div className="badge badge-outline ">WordPress</div>
              <div className="badge badge-outline ">Bootstrap</div>
              <div className="badge badge-outline ">JavaScript</div>
              <div className="badge badge-outline ">RWD</div>
              <div className="badge badge-outline ">UI/UX</div>
              <p className="mb-6 mt-4">
                Miałem ekscytującą okazję do współpracy z niewielką firmą
                prowadzącą escape roomy, oferującą także immersyjne City Quests.
                W tym projekcie byłem odpowiedzialny za kompletny redesign,
                skupiając się na poprawie jakości doświadczenia użytkownika
                (UI/UX). Moja praca obejmowała aktualizację wtyczek WordPress,
                aby zapewnić płynne i angażujące doświadczenie.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://www.justescape-austria.com/"
              >
                Zobacz projekt &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={daunt}
            alt="No daunt webpage"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap ">
              <h5 className="mb-2 w-full">NODAUNT</h5>
              <div className="badge badge-outline">Next.js</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">REST API</div>
              <div className="badge badge-outline">LeafLet</div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline ">RWD</div>
              <p className="mb-6 mt-4">
                W "NODAUNT" prowadziłem prace nad rozwojem frontendu
                innowacyjnej aplikacji, współpracując z dedykowanym zespołem
                backendowym. Ten projekt zawiera unikalny algorytm do
                spersonalizowanego odkrywania restauracji i tworzenia
                samodzielnych wycieczek. Stosujemy technologie Next.js i
                TypeScript, aby zapewnić wydajność aplikacji internetowej. Dane
                w czasie rzeczywistym są bezproblemowo integrowane za pomocą
                interfejsów REST API, dostarczając najnowszych informacji o
                restauracjach i wycieczkach. Dodatkowo, aplikacja wykorzystuje
                mapy LeafLet, tworząc interaktywne i fascynujące doświadczenie
                użytkownika.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://navigate-app.vercel.app/"
              >
                Zobacz projekt &gt;
              </a>
            </div>
          </div>
        </div>

        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={posts}
            alt="Posts web page"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap">
              <h5 className="mb-2 w-full">Szkolenie React</h5>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">React Router Dom</div>
              <div className="badge badge-outline">API</div>
              <p className="mb-6 mt-4">
                W tym projekcie zagłębiłem się w świat tworzenia stron
                internetowych, aby stworzyć pokaz podstawowych funkcji React.
                Sortowanie, filtrowanie, praca z API, memoizacja, niestandardowe
                hooki, routowanie - to tylko część tego, co wykorzystuję. Ten
                projekt hobbystyczny obejmuje płynne nieskończone przewijanie,
                wykorzystanie hooków React, integrację z zewnętrznymi API oraz
                ulepszoną jakość UI/UX dzięki animacjom. Zapraszam do zapoznania
                się z projektem, aby zobaczyć sztukę tworzenia stron
                internetowych w akcji.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className=" inline-block"
                target="_blank"
                href="https://react-endgame.vercel.app"
              >
                Zobacz projekt &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container mr-6 flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={tasks}
            alt="Tasks Manager OOP"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <h5 className="mb-2 w-full">Menadżer Zadań OOP</h5>
            <div className="flex flex-wrap mb-4">
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">API</div>
              <div className="badge badge-outline">Cookies</div>
              <div className="badge badge-outline">AJAX</div>
              <div className="badge badge-outline">UI/UX</div>
            </div>
            <p className="mb-6">
              Ten projekt skupił się na tworzeniu efektywnej logiki do
              wyświetlania informacji o rezerwacjach i procesach logowania.
              Wykorzystując React i TypeScript, zoptymalizowałem doświadczenie
              użytkownika w dostępie i interakcji z danymi rezerwacji,
              jednocześnie poprawiając bezpieczeństwo i łatwość logowania
              użytkowników. Zapraszam do zapoznania się z tym projektem, aby
              zobaczyć, jak zrobiłem złożone informacje o rezerwacjach i
              procedury logowania w prosty sposób.
            </p>
            <div className="flex justify-end items-center">
              <a
                className=" inline-block"
                target="_blank"
                href="http://divs.online/"
              >
                Zobacz projekt &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="image-container flex flex-grow flex-col">
          <Image
            className="w-full h-auto rounded-xl grayscale z-10 relative"
            loading="lazy"
            src={zeusky}
            alt="Zeusky IT Firm"
          ></Image>
          <div className="projects_text flex flex-col flex-1">
            <div className="flex flex-wrap">
              <h5 className="mb-2 w-full">Zeusky - Firma IT</h5>
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">RWD</div>
              <div className="badge badge-outline">Projektowanie logo</div>
              <div className="badge badge-outline">UI/UX</div>
              <p className="mb-6 mt-4">
                Moim celem było stworzenie dynamicznej i atrakcyjnej wizualnie
                strony internetowej od podstaw dla estońskiej firmy IT, Zeusky.
                To przedsięwzięcie w zakresie rozwoju stron internetowych
                prezentuje naszą wiedzę w różnych kluczowych obszarach, w tym
                JavaScript do zapewnienia interaktywności, Tailwind do
                nowoczesnego stylizowania, responsywnego projektowania stron
                (RWD) w celu zapewnienia dostępności na różnych urządzeniach, a
                także projektowania logo dla kompleksowego podejścia do
                budowania marki. Z silnym naciskiem na zasady projektowania
                interfejsu użytkownika (UI) i doświadczenia użytkownika (UX),
                nasza strona internetowa dla Zeusky doskonale łączy technologię
                i kreatywność, odzwierciedlając ostatecznie innowacyjny
                charakter tej firmy IT.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                className="inline-block"
                target="_blank"
                href="https://markkunitski.github.io/zeusky/"
              >
                Zobacz projekt &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
