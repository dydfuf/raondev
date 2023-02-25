import ContentCard from "@/components/ContentCard";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";
import { getPostByName, getPostNameList } from "@/utils/post";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  postList: {
    name: string;
    content: string;
  }[];
}

export default function index({ postList }: Props) {
  return (
    <div>
      <div>
        <div className="w-full gap-20 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-20">
          {postList.map((post) => {
            const { name, content } = post;
            const { date, description, category, title } =
              parseMarkdownMetadata(content);

            return (
              <ContentCard
                key={name}
                title={title ?? ""}
                timeToRead="10min"
                description={description ?? ""}
                releaseDate={date ?? ""}
                categories={category?.split(",") ?? []}
                to={`/posts/${name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const postList = getPostNameList().map((postName) => ({
      name: postName,
      content: getPostByName(postName),
    }));

    return {
      props: { postList },
    };
  } catch {
    return {
      props: {},
      notFound: true,
    };
  }
};
