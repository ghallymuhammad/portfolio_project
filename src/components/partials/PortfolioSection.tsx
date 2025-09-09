"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type PortfolioItem = {
  title: string;
  technologies: string[];
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  liveUrl?: string;
  githubUrl?: string;
};

const ALL_ITEMS: PortfolioItem[] = [
  {
    title: "E-commerce Platform for XYZ Retail",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    image: "/vercel.svg",
    situation:
      "XYZ Retail wanted to expand into e-commerce to reach a wider audience and streamline sales.",
    task:
      "Build front-end and back-end with seamless integration to inventory and payment systems.",
    action:
      "Responsive UI with React; REST APIs in Node.js + MongoDB; AWS for hosting and CI/CD.",
    result:
      "Online sales +35% in first 3 months; manual inventory work reduced significantly.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Internal Analytics Dashboard",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/vercel.svg",
    situation:
      "Leadership needed a unified dashboard for product KPIs and operations metrics.",
    task: "Design secure role-based analytics with charts and scheduled reports.",
    action:
      "Built SSR pages in Next.js, Prisma ORM to Postgres, cron workers for daily ETL.",
    result: "Cut weekly reporting time by ~60%; enabled proactive issue detection.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Headless CMS Marketing Site",
    technologies: ["Next.js", "Tailwind", "Contentful", "Vercel"],
    image: "/vercel.svg",
    situation: "Marketing needed rapid content iteration without dev bottlenecks.",
    task: "Create a performant, editor-friendly site with previews and A/B hooks.",
    action: "Contentful models, ISR pages, preview mode, and split-test flags.",
    result: "Launch time: days → hours; +18% landing-page CVR.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Support Portal",
    technologies: ["React", "Express", "MySQL", "Docker"],
    image: "/vercel.svg",
    situation: "Support team needed a portal for ticket triage and SLA monitoring.",
    task: "Build CRUD, search, and SLA workflows with audit trails and exports.",
    action: "React table UI; Express API; MySQL schema; containerized deploys.",
    result: "Median resolution time −24%; clearer ownership via role permissions.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const PER_PAGE = 2;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const pageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 24 : -24,
  }),
  center: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -24 : 24,
    transition: { duration: 0.2 },
  }),
};

const gridStagger = {
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function PortfolioSection({
  items = ALL_ITEMS,
}: {
  items?: PortfolioItem[];
}) {
  const [page, setPage] = useState(1);
  const [dir, setDir] = useState(0); // +1 next, -1 prev for slide direction

  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return items.slice(start, start + PER_PAGE);
  }, [items, page]);

  const go = (n: number) => {
    if (n === page) return;
    setDir(n > page ? 1 : -1);
    setPage(n);
  };
  const prev = () => page > 1 && go(page - 1);
  const next = () => page < totalPages && go(page + 1);

  return (
    <motion.section
      id="portfolio"
      className="py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-neutral-900 dark:text-neutral-100">
          Portfolio
        </h2>

        {/* Page transition wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Staggered grid */}
              <motion.div
                variants={gridStagger}
                initial="hidden"
                animate="show"
                className="grid gap-8 md:grid-cols-2"
              >
                {pageItems.map((item, i) => (
                  <motion.article
                    key={`${item.title}-${i}`}
                    variants={cardVariants}
                    className="overflow-hidden rounded-2xl border
                               border-neutral-200 dark:border-neutral-800
                               bg-white dark:bg-neutral-900
                               shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={360}
                        className="h-60 w-full object-contain p-6"
                        priority={i === 0}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">
                          Technologies:
                        </span>{" "}
                        {item.technologies.join(", ")}
                      </p>

                      <div className="space-y-2 text-sm leading-relaxed">
                        <Line label="Situation" text={item.situation} />
                        <Line label="Task" text={item.task} />
                        <Line label="Action" text={item.action} />
                        <Line label="Result" text={item.result} />
                      </div>

                      <div className="mt-4 flex gap-3">
                        {item.liveUrl && (
                          <motion.a
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            href={item.liveUrl}
                            className="rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white
                                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            Live Demo
                          </motion.a>
                        )}
                        {item.githubUrl && (
                          <motion.a
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            href={item.githubUrl}
                            className="rounded-lg px-4 py-2
                                       bg-neutral-200 hover:bg-neutral-300 text-neutral-900
                                       dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100
                                       focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                          >
                            GitHub
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <MotionButton onClick={prev} disabled={page === 1} ariaLabel="Previous page">
            ← Prev
          </MotionButton>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const n = idx + 1;
              const active = n === page;
              return (
                <motion.button
                  key={n}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => go(n)}
                  aria-label={`Go to page ${n}`}
                  className={`h-2.5 w-2.5 rounded-full transition
                    ${active
                      ? "bg-blue-600"
                      : "bg-neutral-300 dark:bg-neutral-700 hover:scale-110"}`}
                />
              );
            })}
          </div>

          <MotionButton onClick={next} disabled={page === totalPages} ariaLabel="Next page">
            Next →
          </MotionButton>
        </div>
      </div>
    </motion.section>
  );
}

function Line({ label, text }: { label: string; text: string }) {
  return (
    <p className="text-neutral-700 dark:text-neutral-300">
      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
        {label}:
      </span>{" "}
      <span className="text-neutral-700 dark:text-neutral-300">{text}</span>
    </p>
  );
}

function MotionButton({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}) {
  return (
    <motion.button
      whileHover={!disabled ? { y: -1 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="rounded-lg px-3 py-2 border
                 border-neutral-300 dark:border-neutral-700
                 text-neutral-700 dark:text-neutral-200
                 disabled:opacity-40 disabled:cursor-not-allowed
                 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {children}
    </motion.button>
  );
}
