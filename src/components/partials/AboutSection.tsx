"use client";

import Button from "@/components/form/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from "react-icons/hi";
import { FiCoffee } from "react-icons/fi";
import { FaRegClock, FaSearch, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

// Simple Icons (react-icons/si)
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

const KEY_VALUES = [
  {
    icon: <FaRegClock className="h-5 w-5" />,
    title: "Timeliness",
    desc: "Deliver reliably and communicate early to keep momentum.",
  },
  {
    icon: <FaSearch className="h-5 w-5" />,
    title: "Attention to Detail",
    desc: "Pixel-perfect UI, clean code, and well-tested features.",
  },
  {
    icon: <FaHandsHelping className="h-5 w-5" />,
    title: "Collaboration",
    desc: "Work closely with designers, QA, and stakeholders.",
  },
  {
    icon: <FaCheckCircle className="h-5 w-5" />,
    title: "Clear Communication",
    desc: "Translate business needs into technical solutions.",
  },
];

// React-icons map
const ICONS = {
  frontend: [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
  devops: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: SiAmazonaws },
  ],
};

export default function AboutSection() {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      {/* Top: Bio + Key Values */}
      <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-2">
        {/* Brief Bio */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Brief Bio
          </h3>
          <p className="text-justify text-neutral-800 dark:text-neutral-200">
            Hi, I’m <strong>Muhammad Ghally</strong> — a web developer focused on building
            dynamic, user-friendly, and scalable applications. I started from a deep curiosity
            about how the web works, and grew through hands-on projects from portfolios to
            full-stack platforms. With a background in manufacturing and real-world problem
            solving, I bring practicality and discipline to software development while keeping a
            strong eye on UX, performance, and maintainability.
          </p>

          <Button className="mt-5">Download CV</Button>
        </div>

        {/* Key Values */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Key Values
          </h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {KEY_VALUES.map((v) => (
              <li
                key={v.title}
                className="flex items-start gap-3 rounded-xl border
                           border-neutral-200 bg-white p-4 shadow-sm
                           dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div
                  className="mt-1 flex h-8 w-8 items-center justify-center rounded-md
                             bg-blue-600 text-white dark:bg-blue-500"
                  aria-hidden
                >
                  {v.icon}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {v.title}
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Skills — React Icons Logo Grid */}
      <div className="mt-6">
        <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Core Skills
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          <SkillCard title="Front-End" items={ICONS.frontend} />
          <SkillCard title="Back-End" items={ICONS.backend} />
          <SkillCard title="DevOps & Tools" items={ICONS.devops} />
        </div>
      </div>

      {/* Overview / Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat icon={<HiOutlineFire size={50} />} value="20+" label="Projects Completed" />
        <Stat icon={<FiCoffee size={50} />} value="30+" label="Cup of Coffee" />
        <Stat icon={<HiOutlineUsers size={50} />} value="15+" label="Satisfied Clients" />
        <Stat icon={<HiOutlineChartBar size={50} />} value="5+" label="Years of Experience" />
      </div>
    </>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
}) {
  return (
    <section
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm
                 dark:border-neutral-800 dark:bg-neutral-900"
      aria-label={`${title} skills`}
    >
      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h4>

      {/* Even icon grid with consistent sizing */}
      <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-5">
        {items.map(({ name, icon: Icon }) => (
          <IconBubble key={name} name={name}>
            <Icon size={24} className="text-neutral-800 dark:text-neutral-200" />
          </IconBubble>
        ))}
      </div>
    </section>
  );
}

function IconBubble({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl
                   border border-neutral-200 bg-neutral-50 shadow-sm
                   transition hover:-translate-y-0.5 hover:shadow-md
                   dark:border-neutral-800 dark:bg-neutral-800"
        aria-label={name}
        title={name}
      >
        {children}
      </div>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-2
                   -translate-x-1/2 whitespace-nowrap rounded-md
                   bg-neutral-900 px-2 py-1 text-xs text-white opacity-0
                   transition group-hover:opacity-100
                   dark:bg-neutral-700"
        role="tooltip"
      >
        {name}
      </span>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex">
      <div className="mr-5 text-neutral-300 dark:text-neutral-600">{icon}</div>
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{value}</h2>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300">{label}</p>
      </div>
    </div>
  );
}
