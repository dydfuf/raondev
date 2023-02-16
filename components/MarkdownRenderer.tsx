import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import remarkGfm from "remark-gfm";

interface Props {
  markdownStr: string;
}

export default function MarkdownRenderer({ markdownStr }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, style, ...props }: CodeProps) {
          const match = /language-(\w+)/.exec(className || "");

          if (inline) {
            return (
              <code className="before:none after:none" style={{ backgroundColor: "red" }} {...props}>
                {children}
              </code>
            );
          }

          if (match) {
            return (
              <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdownStr}
    </ReactMarkdown>
  );
}
