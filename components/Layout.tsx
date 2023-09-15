import { PropsWithChildren } from 'react';
import Header from './Header';
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      className={`h-screen flex flex-col bg-[#fafafa] ${notoSansKr.className}`}
    >
      <Header />
      <div className="flex-1 flex flex-col overflow-auto" id="scrollEl">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
