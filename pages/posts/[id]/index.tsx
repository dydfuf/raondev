import fs from "fs";

import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostList } from "@/utils/post";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";

export default function index(props: any) {
  return <Post {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPostList();
  const paths = posts.map((post) => ({ params: { id: post } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const post = fs
      .readFileSync(`${process.cwd()}/public/posts/${context.params?.id}.md`)
      .toString();

    const { content, ...rest } = parseMarkdownMetadata(post);

    return {
      props: { post: content, metadata: rest },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};
