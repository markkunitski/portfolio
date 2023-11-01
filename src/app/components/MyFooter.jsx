import React, { useRef, useEffect } from "react";
const MyFooter = () => {
  const scrollingContentRef = useRef(null);

  useEffect(() => {
    if (scrollingContentRef.current) {
      const contentWidth = scrollingContentRef.current.offsetWidth;
      scrollingContentRef.current.style.setProperty(
        "--content-width",
        `${contentWidth}px`
      );
    }
  }, []);
  useEffect(() => {
    const updateContentWidth = () => {
      if (scrollingContentRef.current) {
        const contentWidth = scrollingContentRef.current.offsetWidth;
        scrollingContentRef.current.style.setProperty(
          "--content-width",
          `${contentWidth}px`
        );
      }
    };

    // Update content width when the component mounts
    updateContentWidth();

    // Update content width when the window size changes
    window.addEventListener("resize", updateContentWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateContentWidth);
    };
  }, []);

  return (
    <footer>
      <div className="scrolling-text">
        <div ref={scrollingContentRef} className="scrolling-content">
          <p>Thanks for your time</p>
          <p>Gracias por tu tiempo</p>
          <p>شكرًا على وقتك</p>
          <p>Merci pour votre temps</p>
          <p>Danke für Ihre Zeit</p>
          <p>謝謝您的時間</p>
          <p>Grazie per il tuo tempo</p>
          <p>Obrigado pelo seu tempo</p>
          <p>Kiitos ajastasi</p>
          <p>Dziękuję za twój czas</p>
          <p>Takk for tiden din</p>
          <p>Благодаря ви за времето ви</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
