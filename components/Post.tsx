import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: string;
  metadata: Record<string, string>;
}

export default function Post({ post, metadata }: Props) {
  const { title } = metadata;

  return (
    <article className="prose prose-code:before:hidden prose-code:after:hidden prose-pre:p-0 prose-pre:bg-[transparent] markdown-body">
      <h1>{title}</h1>
      <MarkdownRenderer markdownStr={post} />
    </article>
  );
}
