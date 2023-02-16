import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  return (
    <>
      <MarkdownRenderer markdownStr={post} />
    </>
  );
}
