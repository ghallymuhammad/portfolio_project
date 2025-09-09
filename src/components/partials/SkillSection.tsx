"use client";

import { motion } from "framer-motion";

type Skill = { name: string; level?: number }; // level 0–100 (optional)

const FRONTEND: Skill[] = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 (Tailwind)", level: 90 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  // add: { name: "Angular" }, if you want
];

const BACKEND: Skill[] = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "REST API Design", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 70 },
  // add: { name: "Django" }, { name: "Ruby on Rails" }
];

const DEVOPS: Skill[] = [
  { name: "Git / GitHub", level: 90 },
  { name: "Docker", level: 70 },
  { name: "CI/CD (GitHub Actions)", level: 75 },
  { name: "AWS (EC2, S3)", level: 70 },
  // add: { name: "Jenkins" }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section className="relative">
      <h2 className="text-center text-3xl font-bold md:text-4xl
                     text-neutral-900 dark:text-neutral-100">
        Skills
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-8 md:grid-cols-3"
      >
        <SkillCard title="Front-End" items={FRONTEND} />
        <SkillCard title="Back-End" items={BACKEND} />
        <SkillCard title="DevOps & Tools" items={DEVOPS} />
      </motion.div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: Skill[] }) {
  return (
    <motion.article
      variants={card}
      className="rounded-2xl border border-neutral-200 dark:border-neutral-800
                 bg-white dark:bg-neutral-900 shadow-sm p-6"
    >
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>

      <ul className="mt-4 space-y-4">
        {items.map((s) => (
          <li key={s.name}>
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base text-neutral-800 dark:text-neutral-200">
                {s.name}
              </span>
              {typeof s.level === "number" && (
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {s.level}%
                </span>
              )}
            </div>

            {typeof s.level === "number" ? (
              <div className="mt-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-blue-600 dark:bg-blue-500"
                />
              </div>
            ) : (
              <span className="mt-2 inline-block rounded-full
                               bg-neutral-100 text-neutral-700
                               dark:bg-neutral-800 dark:text-neutral-200
                               px-2 py-0.5 text-xs">
                familiar
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
