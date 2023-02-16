import fs from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  paths: { id: string }[];
}

export default function index({ paths }: Props) {
  return (
    <div>
      Home
      <div>
        {paths.map((path) => (
          <Link key={path.id} href={`/posts/${path.id}`}>
            {path.id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = fs.readdirSync(`${process.cwd()}/public/posts`).map((file) => file.split(".")[0]);

    const paths = posts.map((post) => ({ id: post }));

    return {
      props: { paths },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};
