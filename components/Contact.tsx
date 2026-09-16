"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 0 40px",
        backgroundColor: "var(--color-black)",
        color: "var(--color-white)",
        position: "relative",
        overflow: "hidden",
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
            border: "4px solid var(--color-white)",
            padding: "8px 24px",
            marginBottom: 32,
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.9rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          05 — Contact
        </motion.div>

        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            marginBottom: 16,
            lineHeight: 1,
          }}
        >
          Let&apos;s Work Together
        </motion.h2>

        {/* Giant email — edge to edge */}
        <motion.a
          href="mailto:valliantdennis@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "block",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 4.5vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-white)",
            textDecoration: "none",
            borderBottom: "4px solid var(--color-white)",
            paddingBottom: 20,
            marginBottom: 36,
            wordBreak: "break-all",
            transition: "color 0.2s ease",
            lineHeight: 1.2,
          }}
        >
          valliantdennis@gmail.com
        </motion.a>

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaPhone size={20} />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              +62 811 962 920
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaMapMarkerAlt size={20} />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Jakarta, Indonesia
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaEnvelope size={20} />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 600,
                wordBreak: "break-all",
              }}
            >
              valliantdennis@gmail.com
            </span>
          </div>
        </motion.div>

        {/* Social Links — Large Chunky Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <a
            href="https://linkedin.com/in/dennisvalliant"
            target="_blank"
            rel="noopener noreferrer"
            className="radius-quirky"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "14px 28px",
              border: "4px solid var(--color-white)",
              color: "var(--color-white)",
              textDecoration: "none",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              transition: "all 0.15s ease",
              boxShadow: "6px 6px 0 0 rgba(255,255,255,0.3)",
              flex: "1 1 160px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-white)";
              e.currentTarget.style.color = "var(--color-black)";
              e.currentTarget.style.transform = "translate(-3px, -3px)";
              e.currentTarget.style.boxShadow = "9px 9px 0 0 rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-white)";
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "6px 6px 0 0 rgba(255,255,255,0.3)";
            }}
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href="https://github.com/dennisvalliant"
            target="_blank"
            rel="noopener noreferrer"
            className="radius-quirky"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "14px 28px",
              border: "4px solid var(--color-white)",
              color: "var(--color-white)",
              textDecoration: "none",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              transition: "all 0.15s ease",
              boxShadow: "6px 6px 0 0 rgba(255,255,255,0.3)",
              flex: "1 1 160px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-white)";
              e.currentTarget.style.color = "var(--color-black)";
              e.currentTarget.style.transform = "translate(-3px, -3px)";
              e.currentTarget.style.boxShadow = "9px 9px 0 0 rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-white)";
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "6px 6px 0 0 rgba(255,255,255,0.3)";
            }}
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </motion.div>

        {/* Footer bottom */}
        <div
          style={{
            borderTop: "2px solid rgba(255,255,255,0.2)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            DV.
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            © {new Date().getFullYear()} Dennis Valliant. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
