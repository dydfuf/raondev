import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-code:before:hidden prose-code:after:hidden prose-pre:p-0 prose-pre:bg-[transparent] flex flex-col">
      <main className="flex-1 w-screen">{children}</main>
    </div>
  );
}
