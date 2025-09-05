import Image from 'next/image';
import React from 'react';
import styles from '@/styles/modules/Post.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  thumbnailUrl: string;
  title: string;
  publishedAt: string;
  href: string; // internal route like "/blog/1"
};

const Post = ({ thumbnailUrl, title, publishedAt, href }: Props) => {
  return (
    <div className={classNames(styles['post'], 'bg-white dark:bg-gray-700')}>
      {/* Link wraps the image; class goes on Link (no inner <a>) */}
      <Link href={href} className={styles['post-image']} legacyBehavior>
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
          legacyBehavior>
          {title}
        </Link>
        <time className="mt-2 inline-block text-gray-500">{publishedAt}</time>
      </div>
    </div>
  );
};

export default Post;
