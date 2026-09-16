  "use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  image: string;
  links: ProjectLink[];
}

const PROJECTS: Project[] = [
  {
    title: "HapHap",
    description:
      "Surplus food marketplace connecting customers with local merchants to offer high-quality unsold meals at discounted prices. As Backend Developer for this group project, I designed and built the server-side architecture for the MVP (API, schema, core business logic).",
    tech: ["Flutter", "PostgreSQL", "Nest.js", "Prisma", "Supabase", "Node.js"],
    role: "Backend Developer",
    image: "/haphaplogo.png",
    links: [
      { label: "Backend Repo", url: "https://github.com/dennisvalliant/haphap-be" },
      { label: "Frontend Repo", url: "https://github.com/dennisvalliant/haphap-fe" },
    ],
  },
  {
    title: "KLEAN",
    description:
      "Digital marketplace connecting customers with trusted local laundry merchants, offering seamless pickup and delivery services. Acting as Backend Developer for this MVP, I owned the API, database schema, and core business logic.",
    tech: ["React", "PostgreSQL", "Tailwind CSS", "Prisma", "Supabase", "Node.js", "Express.js"],
    role: "Backend Developer",
    image: "/klean.png",
    links: [
      { label: "Backend Repo", url: "https://github.com/dennisvalliant/klean-be" },
      { label: "Frontend Repo", url: "https://github.com/dennisvalliant/klean-fe" },
      { label: "Live App", url: "https://klean-fe.vercel.app/login" },
    ],
  },
  {
    title: "Bersih.In",
    description:
      "AI-powered waste classification platform providing instant waste classification. Built the MVP's server-side architecture (image upload API) and trained/integrated a Convolutional Neural Network (CNN) from scratch.",
    tech: ["React", "Node.js", "Express.js", "Mongoose", "MongoDB"],
    role: "Backend Developer & ML Engineer",
    image: "/bersihin.png",
    links: [],
  },
  {
    title: "Mr. Coffee",
    description:
      "A modern, responsive website for a premium coffee chain featuring an online ordering system, interactive menu, and loyalty rewards program.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Figma"],
    role: "Frontend Developer",
    image: "/mrcoffee.png",
    links: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-divider"
      style={{
        padding: "80px 0",
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
            marginBottom: 32,
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.9rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          04 — Projects
        </motion.div>

        {/* Disproportionately large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
            marginBottom: 40,
            lineHeight: 1,
          }}
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 450px), 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card radius-quirky-alt"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Project image */}
              <div
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "var(--color-gray-mid)",
                  borderBottom: "4px solid var(--color-black)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 20px 24px" }}>
                {/* Role badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
                    border: "2px solid var(--color-black)",
                    marginBottom: 12,
                  }}
                >
                  {project.role}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 800,
                    marginBottom: 12,
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "var(--color-gray-dark)",
                    marginBottom: 20,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 24,
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        border: "2px solid var(--color-black)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project link buttons */}
                {project.links.length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-brutal radius-quirky"
                        style={{
                          fontSize: "0.8rem",
                          padding: "10px 16px",
                          flex: "1 1 130px",
                          textAlign: "center",
                        }}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                ) : (
                  <span
                    className="radius-quirky"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      padding: "10px 20px",
                      border: "4px solid var(--color-black)",
                      backgroundColor: "var(--color-gray-light)",
                      color: "var(--color-gray-dark)",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
