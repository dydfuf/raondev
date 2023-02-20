import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  return (
    <article className="prose prose-code:before:hidden prose-code:after:hidden prose-pre:p-0 prose-pre:bg-[transparent] markdown-body">
      <MarkdownRenderer markdownStr={post} />
    </article>
  );
}
