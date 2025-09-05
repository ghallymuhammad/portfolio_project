import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
// ❌ Link not needed anymore for these icon links
// import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import CommentBox from '@/components/partials/CommentBox';
import RecentComment from '@/components/partials/RecentComment';
import { Post } from '@/types';
import { GetServerSideProps } from 'next';
import { posts } from '@/data/posts';

type Props = {
  post: Post;
};

const BlogSingle: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <AppLayout title="Blog">
      <div className="container mb-10">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{post.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
            <span>{post.authorName}</span>
          </p>
        </div>

        <div>
          <div className="mt-10 overflow-hidden rounded-xl">
            {/* layout="responsive" is deprecated in newer Next; width/height is fine */}
            <Image
              src={post.imageUrl}
              height={720}
              width={1280}
              alt={post.title}
            />
          </div>

          <article
            className="prose mt-10 max-w-full dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* SOCIAL / SHARE ICONS — use plain <a>, not <Link> */}
          <div className="mt-10 flex items-center">
            <a href="#" aria-label="Share on Twitter" className="mr-3">
              <FiTwitter />
            </a>
            <a href="#" aria-label="Share on Facebook" className="mx-3">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Share on LinkedIn" className="mx-3">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="Share by Email" className="mx-3">
              <FiMail />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="mt-10">
              <RecentComment />
            </div>
            <div className="mt-10">
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const post = posts.find((p) => p.id === Number(id));
  if (post) {
    return { props: { post } };
  }
  return { notFound: true };
};

export default BlogSingle;
