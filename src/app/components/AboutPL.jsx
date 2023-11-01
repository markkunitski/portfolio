import React from "react";
import Image from "next/image";
import linked from "/public/linkedin-svgrepo-com.svg";
import githib from "/public/github-142-svgrepo-com.svg";

const About = () => {
  return (
    <div className="mb-40 about">
      <div className="flex justify-between items-center about mb-20">
        <h2>O mnie</h2>

        <div className="flex">
          <a className="mr-2" href="https://www.linkedin.com/in/markkunitski/">
            <Image width={32} height={32} alt="linkedin" src={linked}></Image>
          </a>
          <a href="https://github.com/markkunitski">
            <Image
              className="p-px"
              width={31}
              height={31}
              alt="linkedin"
              src={githib}
            ></Image>
          </a>
        </div>
      </div>
      <div>
        <p>
          <span className="focus"> Pasjonowany projektant UI/UX:</span> Jestem
          oddany tworzeniu stron internetowych, które nie tylko są atrakcyjne
          wizualnie, ale także przyjazne dla użytkowników. Mam doświadczenie w
          zakresie
          <span className="focus">
            {" "}
            HTML, CSS i projektowania responsywnego,{" "}
          </span>{" "}
          i uwielbiam pracować z frameworkami takimi jak
          <span className="focus"> Tailwind i Bootstrap, </span> aby zapewnić,
          że każdy projekt stanowi doskonałe doświadczenie dla użytkowników.
        </p>

        <p>
          <span className="focus"> Entuzjasta JavaScript:</span> JavaScript to
          mój plac zabaw. Mam doświadczenie w nowoczesnym JavaScript, w tym
          <span className="focus"> ES6 i nowsze. </span> Mam dobrą znajomość
          <span className="focus"> React, Redux Toolkit i TypeScript, </span> co
          pozwala mi tworzyć dynamiczne i wysokowydajne aplikacje internetowe.
          Czuję się też pewnie w stosowaniu
          <span className="focus">
            {" "}
            Next.js do aplikacji renderowanych po stronie serwera.{" "}
          </span>
        </p>

        <p>
          <span className="focus">
            {" "}
            Solidne podstawy w programowaniu webowym:
          </span>{" "}
          Nie jestem tylko konstruktorem; rozumiem
          <span className="focus"> podstawy. </span> Mam solidne zrozumienie
          <span className="focus">
            {" "}
            algorytmów, struktur danych i programowania obiektowego.{" "}
          </span>{" "}
          Moja wiedza obejmuje kurs
          <span className="focus">
            {" "}
            CS61A na Uniwersytecie Kalifornijskim w Berkeley,{" "}
          </span>{" "}
          i jestem dobrze obeznany z systemami zarządzania treścią, takimi jak
          <span className="focus"> WordPress. </span>
        </p>

        <p>
          <span className="focus"> Zdolność obsługi narzędzi:</span> Oprócz
          programowania, opanowałem
          <span className="focus"> niezbędne narzędzia. </span> Posługuję się
          płynnie
          <span className="focus">
            {" "}
            językiem angielskim w celu płynnej komunikacji,{" "}
          </span>{" "}
          mam doświadczenie w
          <span className="focus"> Git do kontroli wersji, </span> i czuję się
          komfortowo z<span className="focus"> systemem Linux i npm. </span> Mam
          także podstawową wiedzę z zakresu
          <span className="focus">
            {" "}
            Pythona (rozpocząłem naukę programowania na nim){" "}
          </span>{" "}
          i
          <span className="focus">
            {" "}
            C++ (dla książki "Computer Systems: A Programmer's Perspective").{" "}
          </span>
        </p>

        <p>
          Jestem podekscytowany współpracą nad projektami, które wymagają
          <span className="focus">
            {" "}
            holistycznego podejścia do tworzenia stron internetowych,{" "}
          </span>{" "}
          gdzie
          <span className="focus">
            {" "}
            projekt, funkcjonalność i wydajność łączą się harmonijnie.{" "}
          </span>{" "}
          Moje zaangażowanie w
          <span className="focus">
            {" "}
            śledzenie najnowszych trendów branżowych{" "}
          </span>{" "}
          zapewnia, że dostarczam rozwiązania, które nie tylko są atrakcyjne
          wizualnie, ale także bardzo
          <span className="focus"> funkcjonalne i wydajne. </span> Nie krępuj
          się ze mną skontaktować w dowolnym momencie! 😊
        </p>
      </div>
    </div>
  );
};

export default About;
