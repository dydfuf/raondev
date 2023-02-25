import fs from "fs";

import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostByName, getPostNameList } from "@/utils/post";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";

export default function index(props: any) {
  return <Post {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPostNameList();
  const paths = posts.map((post) => ({ params: { id: post } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const post = getPostByName(context.params?.id as string);

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
