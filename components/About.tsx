"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="section-divider"
      style={{
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div className="container-brutal">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-block",
            border: "4px solid var(--color-black)",
            padding: "8px 24px",
            marginBottom: 40,
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.9rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          02 — About Me
        </motion.div>

        {/* Disproportionately large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            marginBottom: 48,
            lineHeight: 1,
          }}
        >
          About Me
        </motion.h2>

        {/* Content row: Photo + Text */}
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="radius-quirky"
            style={{
              width: 280,
              height: 340,
              border: "4px solid var(--color-black)",
              boxShadow: "var(--shadow-hard)",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--color-gray-light)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/myphoto.jpg"
              alt="Dennis Valliant"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="280px"
              priority
            />
          </motion.div>

          {/* Asymmetrical geometric text container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="radius-quirky-alt"
            style={{
              border: "4px solid var(--color-black)",
              backgroundColor: "var(--color-gray-light)",
              padding: "clamp(32px, 5vw, 64px)",
              flex: "1 1 400px",
              boxShadow: "var(--shadow-hard)",
              position: "relative",
            }}
          >
            {/* Decorative corner element */}
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 48,
                height: 48,
                backgroundColor: "var(--color-black)",
                borderRadius: "0 0 0 24px",
              }}
            />

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.8,
                color: "var(--color-gray-dark)",
                margin: 0,
              }}
            >
              I am an active student at Bina Nusantara University pursuing a Bachelor of Computer Science,
              with a specialization in Software Engineering. I have a strong passion for
              continuous learning and self-development. I pride myself on adapting quickly to new environments,
              making it easy for me to work effectively both in teams and with individuals from diverse backgrounds.
            </p>
            <br />
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.8,
                color: "var(--color-gray-dark)",
                margin: 0,
              }}
            >
              Beyond academics, I am deeply involved in mentorship and honing my technical expertise. I am
              currently focusing on software engineering, with a strong interest in full-stack development,
              mobile development, application development, and API integration. Additionally, I serve as an
              SASC Scholarship Mentor at BINUS University, where I facilitate 1-on-1 and group sessions to
              help my peers excel in advanced subjects like Artificial Intelligence, Software Engineering,
              and Code Reengineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
