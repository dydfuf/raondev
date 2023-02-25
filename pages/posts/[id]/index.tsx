import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostByName, getPostNameList } from "@/utils/post";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";
import Head from "next/head";

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
