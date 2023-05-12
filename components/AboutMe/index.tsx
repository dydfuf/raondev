'use client';
import DivideLine from '../DivideLine';
import RoundImageLink from './RoundImageLink';
import NameTag from './NameTag';
import MainBanner from '../MainBanner';
import useScrollTop from '@/hooks/useScrollTop';

export default function AboutMe() {
  useScrollTop({});

  return (
    <div>
      <MainBanner />
      <DivideLine />
      {/* 프로필 및 링크 섹션 */}
      <section className="mt-40 flex flex-col items-center">
        <div className="w-full flex justify-evenly p-20 gap-x-20 gap-y-10 flex-wrap max-w-[768px]">
          {NAME_TAGS.map(nameTag => (
            <NameTag key={nameTag.label} {...nameTag} />
          ))}
        </div>
        <div className="w-full flex justify-evenly p-20 gap-x-20 max-w-[768px]">
          {ROUND_IMAGE_LINKS.map(roudImageLink => (
            <RoundImageLink key={roudImageLink.alt} {...roudImageLink} />
          ))}
        </div>
      </section>
      <DivideLine className="mt-40" />
      {/* 경력 섹션 */}
    </div>
  );
}

const ROUND_IMAGE_LINKS = [
  { href: 'https://github.com/dydfuf', src: '/github.png', alt: 'github-logo' },
  {
    href: 'https://www.linkedin.com/in/%EC%B5%9C%EC%9A%A9%EC%97%B4/',
    src: '/linkedin.png',
    alt: 'linkedin-logo',
  },
  {
    href: 'https://www.youtube.com/channel/UC_9Nh2Xrh6C9u2e_zlIdEYA',
    src: '/youtube.png',
    alt: 'youtube-logo',
  },
];

const NAME_TAGS = [
  { src: '/businessman.png', alt: 'businessman-logo', label: '최용열' },
  {
    src: '/email.png',
    alt: 'email-logo',
    label: '88dydfuf@naver.com',
  },
];
