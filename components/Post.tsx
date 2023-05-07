import Image from "next/image";
import Link from "next/link";
import { ReadTimeResults } from "reading-time";
import Category from "./Category";
import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: string;
  metadata: Record<string, string>;
  prev: string;
  next: string;
  stats: ReadTimeResults;
}

export default function Post({ post, metadata, prev, next, stats }: Props) {
  const { title, date, category } = metadata;
  const categories = category.split(",");

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex py-40 flex-col w-full max-w-[768px] px-20 h-full">
        <p className="text-40 font-bold">{title}</p>
        <div className="flex items-center space-x-10 text-gray-5 pl-8 pt-20 w-full">
          <span>{stats.text}</span>
          <div className="w-2 h-2 rounded-1 bg-gray-4" />
          <span>{date}</span>
        </div>
        <div className="flex justify-start flex-wrap gap-4 pt-20">
          {categories.map((category) => (
            <Category key={category} category={category} />
          ))}
        </div>
        <article className="pt-60 markdown-body !bg-[#fafafa]">
          <MarkdownRenderer markdownStr={post} />
        </article>
        <div className="flex mt-auto w-full pt-40">
          {prev && (
            <Link href={`/posts/${prev}`} className="mr-auto">
              <div className="flex items-center px-12 h-32 border-1 border-brown-1/50 bg-brown-2/10 rounded-20 space-x-12">
                <Image
                  className="rotate-180"
                  src="/arrow-right.svg"
                  width="16"
                  height="16"
                  alt="next-arrow"
                />
                <span className="font-bold">{` ${prev}`}</span>
              </div>
            </Link>
          )}
          {next && (
            <Link href={`/posts/${next}`} className="ml-auto">
              <div className="flex items-center px-12 h-32 border-1 border-brown-1/50 bg-brown-2/10 rounded-20 space-x-12">
                <span className="font-bold">{`${next}`}</span>
                <Image
                  src="/arrow-right.svg"
                  width="16"
                  height="16"
                  alt="next-arrow"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
