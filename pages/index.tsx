import ContentCard from "@/components/ContentCard";
import DivideLine from "@/components/DivideLine";
import MainBanner from "@/components/MainBanner";
import { parseMarkdownMetadata } from "@/utils/parseMarkdownMetadata";
import { getPostByName, getPostNameList } from "@/utils/post";
import { GetStaticProps } from "next";
import readingTime from "reading-time";

interface Props {
  postList: {
    name: string;
    content: string;
  }[];
}

export default function index({ postList }: Props) {
  return (
    <div>
      <MainBanner />
      <DivideLine />
      <div className="w-full flex justify-center">
        <div className="w-full gap-20 grid grid-cols-1 p-20 max-w-[768px] sm:grid-cols-2">
          {postList.map((post) => {
            const { name, content } = post;
            const { date, description, category, title } =
              parseMarkdownMetadata(content);
            const stats = readingTime(content)

            return (
              <ContentCard
                key={name}
                title={title ?? ""}
                timeToRead={stats.text}
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
