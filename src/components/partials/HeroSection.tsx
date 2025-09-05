import Image from 'next/image';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';

// SSR-safe load for the type animation
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((m) => m.TypeAnimation),
  { ssr: false }
);

const SOCIALS = [
  { href: 'https://www.instagram.com', label: 'Instagram', Icon: FiInstagram },
  { href: 'https://www.twitter.com',   label: 'Twitter',   Icon: FiTwitter   },
  { href: 'https://www.facebook.com',  label: 'Facebook',  Icon: FiFacebook  },
  { href: 'https://www.dribbble.com',  label: 'Dribbble',  Icon: FiDribbble  },
  { href: 'https://www.github.com',    label: 'GitHub',    Icon: FiGithub    },
];

const HeroSection = () => {
  return (
    <section
      className="hero relative -mt-16 flex items-center justify-center"
      aria-label="Intro / Hero"
    >
      <HeroBackground />

      <div className="flex flex-col items-center px-4 py-20 sm:py-28">
        <div className="overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
          <Image
            src="/images/avatar/man.png"
            width={180}
            height={180}
            alt="Profile avatar"
            priority
          />
        </div>

        <h1 className="mt-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Mostafizur Rahman
        </h1>

        <p className="mt-2 flex flex-wrap items-center justify-center text-lg text-gray-600 dark:text-gray-300">
          <span className="mr-1">I&apos;m a</span>
          <span className="font-semibold">
            <TypeAnimation
              sequence={[
                'Fullstack Developer', 1200,
                'UI/UX Designer', 1200,
                'Mobile App Developer', 1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </p>

        <nav className="mt-4 flex gap-5" aria-label="Social links">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-gray-300"
            >
              <Icon size={25} />
            </a>
          ))}
        </nav>

        <Button className="mt-6 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <p className="mb-2 text-center text-xs text-gray-500 dark:text-gray-400">
          Scroll Down
        </p>
        <div className="relative mx-auto flex h-7 w-5 items-start justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div
            className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100"
            style={{ top: '6px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
