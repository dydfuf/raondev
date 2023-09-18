import { PropsWithChildren } from 'react';
import Header from './Header';
import { Noto_Sans_KR } from 'next/font/google';
import { Flex } from '@radix-ui/themes';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Flex direction={'column'} className={`h-screen ${notoSansKr.className}`}>
      <Header />
      <Flex
        direction={'column'}
        className="flex-1 overflow-auto"
        id="scrollEl"
        style={{ backgroundColor: 'var(--gray-a1)' }}
      >
        <main className="flex-1">{children}</main>
      </Flex>
    </Flex>
  );
}
