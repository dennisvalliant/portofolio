"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: "Programming Languages & Markup",
    skills: ["C", "JavaScript", "Python", "Kotlin", "XML", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Flutter", "Android (Native)", "Tailwind CSS"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Node.js", "Express.js", "Nest.js"],
  },
  {
    title: "Databases, BaaS & ORMs",
    skills: ["PostgreSQL", "MongoDB", "Mongoose", "Prisma", "Supabase"],
  },
  {
    title: "Design Tools",
    skills: ["Figma"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Project Management",
      "Event Coordination",
      "Academic Mentorship",
      "Adaptability",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-divider"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--color-gray-light)",
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
          03 — Skills
        </motion.div>

        {/* Disproportionately large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            marginBottom: 56,
            lineHeight: 1,
          }}
        >
          Skills & Tools
        </motion.h2>

        {/* Skill Categories */}
        {SKILL_DATA.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            style={{ marginBottom: 40 }}
          >
            {/* Category Title */}
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                fontWeight: 700,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                borderBottom: "2px solid var(--color-black)",
                paddingBottom: 8,
                display: "inline-block",
              }}
            >
              {category.title}
            </h3>

            {/* Pill Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  className="pill-tag radius-quirky"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.05 + skillIdx * 0.03,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
