import ContentCard from "@/components/ContentCard";
import { getPostList } from "@/utils/post";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  paths: { id: string }[];
}

export default function index({ paths }: Props) {
  return (
    <div>
      <div>
        <div className="w-full gap-20 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-20">
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
          <ContentCard
            title="this is title"
            timeToRead="10min"
            description="this is description hello world!"
            releaseDate="2023-02-21"
            hashtags={["hash", "tag"]}
          />
        </div>

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
    const posts = getPostList();
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
