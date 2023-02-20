import { PropsWithChildren } from "react";
import Header from "./Header";
import { Noto_Sans_KR } from "@next/font/google";
import classnames from "classnames";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      className={
        (classnames("h-screen flex flex-col min-w-[800px]"),
        notoSansKr.className)
      }
    >
      <Header />
      <div className="flex-1 flex flex-col overflow-auto">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
