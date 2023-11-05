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
                W Just Escape Austria podjąłem się trudnego projektu z napiętym
                terminem, wynoszącym zaledwie jeden tydzień. Musiałem całkowicie
                przeprojektować stronę opartą na WordPressie, pomimo
                ograniczonej wcześniejszej wiedzy na ten temat. Szybko nabyłem
                nowe umiejętności, od zakładania serwera otwartego po
                zrozumienie WordPressa, wtyczek, integracji z PHP i hierarchii
                stron. Mimo stromej krzywej nauki udało mi się uruchomić
                funkcjonalną wersję strony na czas, co stanowiło około 80%
                projektu. Następnie dokonałem dalszych ulepszeń w kolejnych
                dniach. To doświadczenie podkreśla moją zdolność do
                dostosowywania się, nauki i dostarczania rezultatów pod presją
                terminów.
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
              W tym projekcie doskonaliłem swoje umiejętności programowania
              obiektowego (OOP) dzięki pracy z żądaniami Ajax i plikami cookie,
              tworząc efektywną aplikację do zarządzania zadaniami z timerem.
              Usprawniłem logikę wyświetlania zadań i dodatkowe funkcje
              przyjazne dla użytkownika, umożliwiając trwałe przechowywanie
              danych za pomocą plików cookie. Aktualizacje w czasie rzeczywistym
              dzięki Ajax zwiększyły komfort użytkowników, co podkreśliło moje
              zaangażowanie w doskonalenie zasad projektowania interfejsu
              użytkownika (UI/UX) oraz uproszczenie zarządzania zadaniami.
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
                Zadaniem było stworzenie atrakcyjnej i dynamicznej strony
                internetowej dla estońskiej firmy IT, Zeusky. Wykorzystaliśmy
                naszą wiedzę z zakresu JavaScript do interaktywności, Tailwind
                do nowoczesnego stylizowania, RWD dla dostępności na różnych
                urządzeniach i projektowania logo. Nasza strona Zeusky łączy
                technologię z kreatywnością, odzwierciedlając innowacyjny
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
