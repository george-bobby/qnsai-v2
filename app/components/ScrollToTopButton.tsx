"use client";
import React, { useEffect } from "react";

export default function ScrollToTopButton() {
  useEffect(() => {
    const button = document.querySelector(".scroll-top") as HTMLElement | null;

    // Handle the scroll event and show the button when scrolling past 200px.
    const handleScroll = () => {
      if (window.scrollY > 200 && button) {
        button.style.display = "block";
      } else if (button) {
        button.style.display = "none";
      }
    };

    // Add event listener for scroll.
    window.addEventListener("scroll", handleScroll);

    // Add click event listener to scroll the page to the top.
    button?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cleanup the event listeners when the component is unmounted.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scroll-top btn-hover">
      <i className="lni lni-chevron-up"></i>
    </a>
  );
}
