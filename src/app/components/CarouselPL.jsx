import React from "react";
import Image from "next/image";
import zeuskysvg from "/public/180px.svg";
import skalp from "/public/skalp.jpg";
import rita from "/public/Rita.jpg";
import michael from "/public/Michael.jpg";
const Carousel = () => {
  return (
    <>
      <div className="carousel w-full observe">
        <div
          id="slide1"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={rita}
                width={60}
                height={60}
                loading="lazy"
                alt="Just Escape Your City Manager"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Rita Telesa</h5>
                <span className="sm:ml-4 mt-1">
                  Just Escape Your City Manager
                </span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">
                Całość utrzymania projektu
              </div>
              <div className="badge badge-outline">Wsparcie 24/7</div>
              <div className="badge badge-outline">Nowe Zadania</div>
              <div className="badge badge-outline">Usługi Reklamowe</div>
              <div className="badge badge-outline">E-maile</div>
              <div className="badge badge-outline">
                Strona internetowa JUST ESCAPE CONSULT
              </div>
              <div className="badge badge-outline">Optymalizacja SEO</div>
              <div className="badge badge-outline">Google Business</div>
              <div className="badge badge-outline">Google Maps</div>
              <div className="badge badge-outline">WordPress</div>
              <div className="badge badge-outline">
                Panel CQ (React, TypeScript)
              </div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>Moje Myśli na Temat Projektu: </strong>
                Zarządzanie całym projektem było niezwykle ekscytującym
                wyzwaniem. Dało mi to unikalną możliwość rzeczywistego wpływu na
                naszą obecność online i poprawy ogólnego doświadczenia
                użytkownika. Ten szeroki zakres obowiązków pozwolił mi znacząco
                przyczynić się do sukcesu firmy.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Recenzja: </strong>
                Mark odegrał kluczową rolę w zarządzaniu naszą obecnością online
                i poprawianiu doświadczenia użytkownika. Podjął wiele istotnych
                zadań, w tym tworzenie nowych zadań, utrzymanie strony
                internetowej, zarządzanie reklamami i zwiększanie widoczności
                online. Jego zaangażowanie i ekspertyza były integralną częścią
                naszego sukcesu, i jesteśmy naprawdę wdzięczni za jego wyjątkową
                pracę.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide4"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={michael}
                width={60}
                height={60}
                loading="lazy"
                alt="Just Escape Austria Manager"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Michael Prantl</h5>
                <span className="sm:ml-4 mt-1">
                  Just Escape Austria Manager
                </span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">
                Całość utrzymania projektu
              </div>
              <div className="badge badge-outline">Wsparcie 24/7</div>
              <div className="badge badge-outline">Nowa Strona Internetowa</div>
              <div className="badge badge-outline">WordPress</div>
              <div className="badge badge-outline">Wtyczki WordPress</div>
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">E-mail</div>
              <div className="badge badge-outline">UI/UX</div>
              <div className="badge badge-outline">Optymalizacja SEO</div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>Moje Myśli na Temat Projektu: </strong>Miałem okazję
                stworzyć unikalną obecność online i poprawić ogólną jakość
                użytkowania od podstaw. Samodzielnie zajmowałem się
                projektowaniem całego interfejsu użytkownika (UI/UX) oraz
                implementacją logiki strony internetowej, tworząc płynne i
                przyjazne środowisko dla naszej publiczności.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Recenzja: </strong>
                Mark całkowicie odniósł sukces w naszym projekcie dotyczącym
                obecności online! Od początku do końca przejął stery,
                wprowadzając świetne pomysły i tworząc doskonałą stronę
                internetową, która zapewnia użytkownikom płynność korzystania.
                Nie możemy go wystarczająco podziękować za nieoceniony wkład, a
                duży sukces zawdzięczamy jego umiejętnościom i zaangażowaniu.
                Praca Marka jest naprawdę wyjątkowa.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide1"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={zeuskysvg}
                width={60}
                height={60}
                loading="lazy"
                alt="Zeusky CEO"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Igor Mohhov</h5>
                <span className="sm:ml-4 mt-1">Zeusky CEO</span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">Nowa Strona Internetowa</div>
              <div className="badge badge-outline">Wsparcie 24/7</div>
              <div className="badge badge-outline">
                Konwersja Strony robbybobby (React)
              </div>
              <div className="badge badge-outline">
                Wyświetlanie Platform na Stronie robbybobby (React)
              </div>
              <div className="badge badge-outline">
                Strona Wyboru Adresatów E-mail (Google Apps Script)
              </div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>Moje Myśli na Temat Projektu: </strong>W mojej roli jako
                jedyny deweloper frontendowy w firmie Zeusky, przyjąłem na
                siebie kilka istotnych obowiązków. Miałem przywilej prowadzenia
                prac nad naszą nową stroną internetową, dbając o to, aby była
                nie tylko funkcjonalna, ale także przyjazna dla użytkowników.
                Zapewniałem wsparcie całodobowe, błyskawicznie reagując na
                wszelkie problemy. Ponadto pracowałem nad konwersją strony
                'robbybobby' napisanej w React, aby zapewnić płynne wyświetlanie
                platform. Dodatkowo zaprojektowałem stronę wyboru adresatów
                e-mail przy użyciu narzędzia Google Apps Script. Moja praca
                odegrała kluczową rolę w realizacji misji Zeusky polegającej na
                wsparciu innych firm w zakresie ich potrzeb związanych z
                technologią.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Recenzja: </strong>
                Mark, jako nasz deweloper frontendowy w firmie Zeusky, miał
                niezatarty wpływ na nasze projekty. Jego kluczowa rola była
                szczególnie widoczna w starannej modernizacji naszej nowej
                strony internetowej, optymalizując ją pod kątem maksymalnej
                wydajności i przyjazności dla użytkowników. Jednocześnie
                niezachwiane zaangażowanie Marka w wsparcie 24/7 zapewniało
                nieprzerwane działanie naszych systemów. Poświęcenie Marka
                znacząco wzmocniło naszą obecność cyfrową i funkcjonalność, za
                co składamy serdeczne podziękowania za pozytywny wpływ, jaki
                wnosił do firmy Zeusky.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide2"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full min-h-[600px]"
        >
          <div className="mt-32">
            <div className="flex items-center mb-6 mt-10">
              <Image
                className="rounded-full mr-6"
                src={skalp}
                width={60}
                height={60}
                loading="lazy"
                alt="Head of Nodaunt Backend"
              ></Image>
              <div className="flex flex-wrap items-baseline">
                <h5 className="w-full sm:w-auto">Aliaxandr Skulavets</h5>
                <span className="sm:ml-4 mt-1">Head of Nodaunt Backend</span>
              </div>
            </div>
            <div className="tasks flex flex-wrap items-center">
              <div className="badge badge-outline">Cała Logika Frontendu</div>
              <div className="badge badge-outline">Cały UI/UX</div>
              <div className="badge badge-outline">Wsparcie 24/7</div>
              <div className="badge badge-outline">
                Mapa w Czasie Rzeczywistym
              </div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TypeScript</div>
              <div className="badge badge-outline">Next.js</div>
            </div>
            <div className="scope mt-10">
              <p>
                <strong>Moje Myśli na Temat Projektu: </strong>W mojej roli w
                NODAUNT prowadziłem rozwój frontendu dla innowacyjnej aplikacji.
                W ścisłej współpracy z dedykowanym zespołem backendowym
                stworzyliśmy tę aplikację, korzystając z Next.js i TypeScript,
                zapewniając wysoką wydajność. Integracja danych w czasie
                rzeczywistym za pośrednictwem interfejsów API REST dostarczała
                najnowszych informacji o restauracjach i trasach. Wprowadziliśmy
                również mapowanie za pomocą Leaflet, co poprawiło interaktywność
                użytkowników i ułatwiło odkrywanie restauracji oraz samodzielne
                spacery po trasach.
              </p>
            </div>
            <div className="review mt-6">
              <p>
                <strong>Recenzja: </strong>
                Przywództwo Marka w NODAUNT było kluczowe dla stworzenia naszej
                innowacyjnej aplikacji. Unikalny algorytm odkrywania restauracji
                i samodzielnych tras pokazał jego zaangażowanie w dostarczanie
                niepowtarzalnego doświadczenia dla naszych użytkowników. Wybór
                Next.js i TypeScript potwierdził jego zaangażowanie w wydajność
                i jakość. Integracja danych w czasie rzeczywistym i mapowanie
                Leaflet wzbogaciły aplikację o najnowsze informacje i
                interaktywne doświadczenie użytkownika. Bardzo doceniamy wkład
                Marka w uczynienie z NODAUNT wyróżniającej się platformy do
                odkrywania restauracji i samodzielnych tras.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[80px]">
            <a
              href="#slide3"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-outline border-black text-black"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
