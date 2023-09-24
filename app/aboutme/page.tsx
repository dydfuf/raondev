import React from 'react';
import MainBanner from '../MainBanner.server';
import NameCard from './NameCard.server';

export const metadata = {
  title: 'about me',
};

export default function page() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <MainBanner />
      <NameCard />
    </div>
  );
}
