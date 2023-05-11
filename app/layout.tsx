import Layout from '@/components/Layout';
import '../styles/globals.css';
import '../styles/github-markdown.css';
import { BLOG_TITLE } from '@/constant/common';

export const metadata = {
  title: BLOG_TITLE,
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
      </body>
    </html>
  );
}
