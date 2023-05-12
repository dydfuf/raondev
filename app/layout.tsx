import Layout from '@/components/Layout';
import '../styles/globals.css';
import '../styles/github-markdown.css';
import { BLOG_TITLE } from '@/constant/common';
import Analytics from '@/components/Analytics';
import { Metadata } from 'next';

const description =
  '안녕하세요. Raon.dev의 개발 블로그 입니다. 주로 Front-end 관련 글을 작성합니다. Youtube 에서 라이브 방송을 합니다.';

export const metadata: Metadata = {
  title: {
    default: BLOG_TITLE,
    template: `${BLOG_TITLE} | %s`,
  },
  description,
  openGraph: {
    title: BLOG_TITLE,
    description,
    url: 'https://raondev.vercel.app',
    siteName: BLOG_TITLE,
    locale: 'ko-Kr',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
