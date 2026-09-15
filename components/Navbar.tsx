"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--color-white)",
        borderBottom: "4px solid var(--color-black)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
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

        {/* Nav Links */}
        <div
          style={{
            display: "flex",
            gap: 0,
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
      </div>
    </nav>
  );
}
