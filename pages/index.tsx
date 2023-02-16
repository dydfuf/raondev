import fs from "fs";
import { GetStaticProps } from "next";

interface Props {
  paths: { id: string }[];
}

export default function index({ paths }: Props) {
  console.log({ paths });
  return (
    <div>
      Home
      <div>
        {paths.map((path) => (
          <li key={path.id}>{path.id}</li>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = fs.readdirSync("posts").map((file) => file.split(".")[0]);

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
