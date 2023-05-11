import Post from '@/components/Post';
import { BLOG_TITLE } from '@/constant/common';
import { parseMarkdownMetadata } from '@/utils/parseMarkdownMetadata';
import { getAdjacentPost, getPostByName } from '@/utils/post';
import React from 'react';
import readingTime from 'reading-time';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: Props) {
  const { id } = params;

  const post = getPostByName(id as string);

  const { content, ...rest } = parseMarkdownMetadata(post);

  const { prev, next } = getAdjacentPost(id as string);

  const stats = readingTime(content);

  const props = { post: content, metadata: rest as any, prev, next, stats };
  return <Post {...props} />;
}
// // Dynamic metadata
export async function generateMetadata({ params }: Props) {
  const { id } = params;

  const post = getPostByName(id as string);

  const { title } = parseMarkdownMetadata(post);

  return { title: `${BLOG_TITLE} | ${title}` };
}
