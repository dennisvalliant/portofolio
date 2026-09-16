"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 65;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "var(--color-white)",
        borderBottom: "4px solid var(--color-black)",
        boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "var(--color-black)",
            padding: "16px 0",
          }}
        >
          DV.
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex" style={{ gap: 0 }}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  padding: "18px 20px",
                  color: isActive ? "var(--color-white)" : "var(--color-black)",
                  backgroundColor: isActive ? "var(--color-black)" : "transparent",
                  borderLeft: "2px solid var(--color-black)",
                  transition: "all 0.15s ease",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: "3px solid var(--color-black)",
            padding: "8px 12px",
            cursor: "pointer",
            color: "var(--color-black)",
            fontSize: "1.2rem",
            boxShadow: "3px 3px 0 0 var(--color-black)",
          }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className="flex md:hidden flex-col"
          style={{
            backgroundColor: "var(--color-white)",
            borderTop: "3px solid var(--color-black)",
            maxHeight: "calc(100vh - 65px)",
            overflowY: "auto",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  padding: "16px 20px",
                  color: isActive ? "var(--color-white)" : "var(--color-black)",
                  backgroundColor: isActive ? "var(--color-black)" : "transparent",
                  borderBottom: "2px solid var(--color-black)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

