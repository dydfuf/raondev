import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAdjacentPost, getPostByName, getPostNameList } from "@/utils/post";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";
import Head from "next/head";
import readingTime from "reading-time";

export default function index(props: any) {
  const {
    metadata: { title },
  } = props;

  return (
    <>
      <Head>
        <title>{`Raon.dev | ${title}`}</title>
      </Head>
      <Post {...props} />
    </>
  );
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

    const { prev, next } = getAdjacentPost(context.params?.id as string);

    const stats = readingTime(content)

    return {
      props: { post: content, metadata: rest, prev, next, stats },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};
