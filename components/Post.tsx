import Category from "./Category";
import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: string;
  metadata: Record<string, string>;
}

export default function Post({ post, metadata }: Props) {
  const { title, date, category } = metadata;
  const categories = category.split(",");

  return (
    <div className="flex justify-center w-full ">
      <div className="flex py-40 flex-col w-768">
        <p className="text-40 font-bold">{title}</p>
        <div className="flex items-center space-x-10 text-gray-5 pl-8 pt-20 w-full">
          <span>{"10min"}</span>
          <div className="w-2 h-2 rounded-1 bg-gray-4" />
          <span>{date}</span>
        </div>
        <div className="flex justify-start mt-auto flex-wrap gap-4 pt-20">
          {categories.map((category) => (
            <Category key={category} category={category} />
          ))}
        </div>
        <article className="pt-60 max-w-[none] prose prose-code:before:hidden prose-code:after:hidden prose-pre:p-0 prose-pre:bg-[transparent] markdown-body">
          <MarkdownRenderer markdownStr={post} />
        </article>
      </div>
    </div>
  );
}
