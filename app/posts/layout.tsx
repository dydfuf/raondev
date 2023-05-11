import { BLOG_TITLE } from '@/constant/common';
import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    default: BLOG_TITLE,
    template: `${BLOG_TITLE} | %s`,
  },
  authors: [{ name: 'raon.c' }, { name: '최용열' }],
};

export default function layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
