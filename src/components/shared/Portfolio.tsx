import React from 'react';
import Image from 'next/image';
import styles from '@/styles/modules/Portfolio.module.scss';
import Link from 'next/link';
import { FiLink as LinkIcon } from 'react-icons/fi';
import { UrlObject } from 'url';
import classNames from 'classnames';

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  href: string | UrlObject; // can be internal route or external URL
};

function isExternalHref(href: string | UrlObject): href is string {
  return typeof href === 'string' && /^https?:\/\//i.test(href);
}

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  const TitleLink = () =>
    isExternalHref(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['portfolio-title']}
      >
        <span>{title}</span>
      </a>
    ) : (
      <Link href={href} className={styles['portfolio-title']} aria-label={String(title)}>
        <span>{title}</span>
      </Link>
    );

  const IconLink = () =>
    isExternalHref(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['portfolio-link']}
        aria-label={`Open ${title}`}
      >
        <span className="inline-flex">
          <LinkIcon className="h-5 text-white" />
        </span>
      </a>
    ) : (
      <Link href={href} className={styles['portfolio-link']} aria-label={`Open ${title}`}>
        <span className="inline-flex">
          <LinkIcon className="h-5 text-white" />
        </span>
      </Link>
    );

  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-700')}>
      <Image
        src={imageUrl}
        width={512}
        height={384}
        alt={title}
        className="h-auto w-full"
        priority={false}
      />
      <div className={styles['portfolio-overlay']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <TitleLink />
        <IconLink />
      </div>
    </div>
  );
};

export default Portfolio;
