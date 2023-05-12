import Layout from '@/components/Layout';
import '../styles/globals.css';
import '../styles/github-markdown.css';
import { BLOG_TITLE } from '@/constant/common';
import Analytics from '@/components/Analytics';

export const metadata = {
  title: {
    default: BLOG_TITLE,
    template: `${BLOG_TITLE} | %s`,
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
