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
        {title}
      </a>
    ) : (
      <Link href={href} className={styles['portfolio-title']} legacyBehavior>
        {title}
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
        <LinkIcon className="h-5 text-white" />
      </a>
    ) : (
      <Link
        href={href}
        className={styles['portfolio-link']}
        aria-label={`Open ${title}`}
        legacyBehavior>
        <LinkIcon className="h-5 text-white" />
      </Link>
    );

  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-700')}>
      {/* layout="responsive" is deprecated; width/height + responsive classes */}
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
