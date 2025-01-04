"use client";
import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Handle the scroll event and show the button when scrolling past 200px.
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for scroll.
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listeners when the component is unmounted.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <a
        href="#"
        className="scroll-top btn-hover"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          scrollToTop();
        }}
        aria-label="Scroll to top"
      >
        <i className="lni lni-chevron-up"></i>
      </a>
    )
  );
}
