"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section-divider"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 0",
      }}
    >
      <div className="container-brutal" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Oversized decorative text behind */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            fontWeight: 800,
            color: "var(--color-gray-light)",
            lineHeight: 0.9,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          DEV
        </motion.div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 16,
              padding: "8px 20px",
              border: "3px solid var(--color-black)",
              display: "inline-block",
              backgroundColor: "var(--color-white)",
            }}
          >
            Computer Science Student | Focusing on Fullstack Development & API Integration | Continuous Learner
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              margin: "16px 0 32px",
            }}
          >
            Hi, I&apos;m
            <br />
            <span
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
                padding: "4px 24px",
                marginTop: 8,
              }}
            >
              Dennis Valliant
            </span>
          </motion.h1>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: 650,
              lineHeight: 1.7,
              marginBottom: 40,
              color: "var(--color-gray-dark)",
            }}
          >
            Welcome to my portfolio! I am a passionate Computer Science student at Bina Nusantara University,
            dedicated to self-development, building impactful software solutions, and fostering collaborative environments.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#projects"
            onClick={handleViewProjects}
            className="btn-brutal radius-quirky"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            style={{ fontSize: "1.3rem", padding: "20px 48px" }}
          >
            View Projects ↓
          </motion.a>
        </div>
      </div>
    </section>
  );
}
