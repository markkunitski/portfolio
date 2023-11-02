import React from "react";
import Image from "next/image";
import Link from "next/link";
import linked from "/public/linkedin-svgrepo-com.svg";
import githib from "/public/github-square-svgrepo-com.svg";
import telegram from "/public/brand-telegram-sq-svgrepo-com.svg";
import email from "/public/email-square-fill-svgrepo-com.svg";
const Header = () => {
  return (
    <header className="px-5">
      <div className="container mx-auto flex justify-start sm:justify-center mt-6">
        <Link className="mr-4" hrefLang="en" href="/">
          english
        </Link>
        <Link hrefLang="pl" href="/pl">
          polish
        </Link>
        <div className="flex fixed right-[2%] lg:right-[10%] xl:right-[18%] top-5 z-50 links">
          <a
            target="_blank"
            className="mr-1 md:mr-2"
            href="https://www.linkedin.com/in/markkunitski/"
          >
            <Image width={26} height={26} alt="linkedin" src={linked}></Image>
          </a>
          <a
            target="_blank"
            className="mr-1 md:mr-2"
            href="https://github.com/markkunitski"
          >
            <Image
              className=""
              width={26}
              height={26}
              alt="github"
              src={githib}
            ></Image>
          </a>
          <a
            target="_blank"
            className="mr-1 md:mr-2"
            href="https://t.me/markkunitski"
          >
            <Image
              className=""
              width={26}
              height={26}
              alt="telegram"
              src={telegram}
            ></Image>
          </a>
          <a target="_blank" href="mailto:markkmpya@gmail.com">
            <Image
              className=""
              width={26}
              height={26}
              alt="email"
              src={email}
            ></Image>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
