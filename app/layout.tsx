import '../styles/globals.css';
import '../styles/github-markdown.css';
import '@radix-ui/themes/styles.css';

import Layout from '@/components/Layout';
import { BLOG_TITLE } from '@/constant/common';
import Analytics from '@/components/Analytics';
import { Metadata } from 'next';
import Head from './head';
import { Theme, ThemePanel } from '@radix-ui/themes';

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
    images: [
      {
        url: 'https://raondev.vercel.app/og.png',
        width: 400,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Theme radius="large" scaling="100%">
          <Layout>{children}</Layout>
          <Analytics />
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
