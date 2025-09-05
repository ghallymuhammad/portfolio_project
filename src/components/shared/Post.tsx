import Image from 'next/image';
import React from 'react';
import styles from '@/styles/modules/Post.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  thumbnailUrl: string;
  title: string;
  publishedAt: string; // e.g., "2025-08-31" or a human string like "Aug 31, 2025"
  href: string; // internal route like "/blog/1"
};

const Post = ({ thumbnailUrl, title, publishedAt, href }: Props) => {
  return (
    <div className={classNames(styles['post'], 'bg-white dark:bg-gray-700')}>
      {/* Link wraps a single child (Image) */}
      <Link href={href} className={styles['post-image']} aria-label={`Open post: ${title}`}>
        <Image
          src={thumbnailUrl}
          width={512}
          height={384}
          alt={title}
          className="h-auto w-full"
          priority={false}
        />
      </Link>

      <div className="p-6">
        <Link
          href={href}
          className="block text-xl font-semibold hover:text-primary-500 hover:underline"
          aria-label={`Open post: ${title}`}
        >
          <span>{title}</span>
        </Link>

        <time className="mt-2 inline-block text-gray-500" dateTime={publishedAt}>
          {publishedAt}
        </time>
      </div>
    </div>
  );
};

export default Post;
