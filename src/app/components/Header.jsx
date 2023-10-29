import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-center mt-6">
        <Link className="mr-4" hrefLang="en" href="/">
          english
        </Link>
        <Link hrefLang="pl" href="/pl">
          polish
        </Link>
      </div>
    </header>
  );
};

export default Header;
