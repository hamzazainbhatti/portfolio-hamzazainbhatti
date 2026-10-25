import { useEffect, useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  const [headerTheme, setHeaderTheme] = useState("dark");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);

      const activeSection = Array.from(
        document.querySelectorAll("[data-header-theme]"),
      ).find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 90 && bounds.bottom > 90;
      });

      setHeaderTheme(activeSection?.dataset.headerTheme ?? "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header${headerTheme === "light" ? " light" : ""}${
        hasScrolled ? " visible" : ""
      }`}
    >
      <Navbar variant="header" />
    </header>
  );
}

export default Header;
