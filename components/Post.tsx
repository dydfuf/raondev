import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  console.log({ post });
  return (
    <>
      <MarkdownRenderer markdownStr={post} />
    </>
  );
}
