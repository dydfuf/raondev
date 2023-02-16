import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="prose prose-code:before:hidden prose-code:after:hidden">{children}</div>;
}
