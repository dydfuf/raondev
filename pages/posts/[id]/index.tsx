import fs from "fs";

import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";

export default function index(props: any) {
  return <Post {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = fs.readdirSync(`${process.cwd()}/public/posts`).map((file) => file.split(".")[0]);

  const paths = posts.filter((file) => file.match(/\.md$/)).map((post) => ({ params: { id: post } }));

  return { paths: [{ params: { id: "test" } }], fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const post = fs.readFileSync(`${process.cwd()}/public/posts/${context.params?.id}.md`).toString();

    return {
      props: { post },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};
