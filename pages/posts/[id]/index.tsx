import fs from "fs";

import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";

export default function index(props: any) {
  return <Post {...props} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = fs.readdirSync("posts").map((file) => file.split(".")[0]);

  const paths = posts.filter((file) => file.match(/\.md$/)).map((post) => ({ params: { id: post } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const post = fs.readFileSync(`posts/${context.params?.id}.md`).toString();

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
