"use client";

import { Theme, useTheme } from "@/hooks/use-theme";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

/** No hero here */
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

// header height for offset when scrolling
const HEADER_OFFSET_PX = 72;

function scrollToId(id: string, after?: () => void) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top, behavior: "smooth" });
  after?.();
}

export default function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // start tracking from the first visible section ("about")
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${HEADER_OFFSET_PX + 1}px 0px -40% 0px`,
        threshold: [0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = useMemo(
    () =>
      SECTIONS.map(({ id, label }) => ({
        id,
        label,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          scrollToId(id);
        },
        onClickMobile: (e: React.MouseEvent) => {
          e.preventDefault();
          scrollToId(id, () => setSidebarOpen(false));
        },
      })),
    []
  );

  return (
    <header className="header text-gray-700 dark:text-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        {/* Brand — go to page top */}
        <Link
          href="/"
          className="text-3xl font-bold"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Go to top"
        >
          <span className="inline-flex">
            <span>MG</span>
            <span className="text-primary-500">.</span>
          </span>
        </Link>

        {/* Desktop nav (no Hero) */}
        <ul className="ml-auto hidden items-center md:flex">
          {navItems.map(({ id, label, onClick }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                onClick={onClick}
                className={classNames(
                  "inline-block px-4 font-semibold transition-colors duration-200 hover:text-primary-600 hover:underline",
                  { "text-primary-500 underline": activeId === id }
                )}
                aria-label={`Go to ${label}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-primary-500 md:-mt-0.5 md:ml-3"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === Theme.LIGHT ? <BsMoonStars size={20} /> : <BsSun size={20} />}
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
          aria-label="Open menu"
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-1 flex-col bg-[#f9f9ff] pt-5 dark:bg-gray-800">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="text-white">&#10006;</span>
                </button>
              </div>

              <div className="border-b px-4 pb-4 dark:border-gray-700">
                <a
                  href="/"
                  className="text-2xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setSidebarOpen(false);
                  }}
                >
                  <span className="inline-flex items-baseline gap-1">
                    <span>Muhammad Ghally</span>
                    <span className="text-primary-500">.</span>
                  </span>
                </a>
              </div>

              <nav className="mt-4 space-y-1 px-2">
                {navItems.map(({ id, label, onClickMobile }) => (
                  <a
                    key={id}
                    href={`/#${id}`}
                    onClick={onClickMobile}
                    className={classNames(
                      "group flex items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-primary-600",
                      { "text-primary-500": activeId === id }
                    )}
                    aria-label={`Go to ${label}`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </Transition.Child>

          <div className="w-14 flex-shrink-0" aria-hidden="true" />
        </Dialog>
      </Transition.Root>
    </header>
  );
}
