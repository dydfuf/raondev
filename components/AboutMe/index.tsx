import Image from "next/image";
import classNames from "classnames";
import { Black_Han_Sans } from "@next/font/google";
import Link from "next/link";
import DivideLine from "../DivideLine";
import RoundImageLink from "./RoundImageLink";
import NameTag from "./NameTag";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export default function AboutMe() {
  return (
    <div>
      <section className="w-full h-[400px] relative">
        <Image
          src="/about_me_bg.jpg"
          fill
          alt="background"
          style={{ objectFit: "cover" }}
          className="blur-[3px]"
        />
        <div className="absolute inest-0 flex flex-col items-center justify-center w-full h-full">
          <h1
            className={classNames(
              blackHanSans.className,
              "text-[2.5rem] tracking-widest hidden mobile:block whitespace-pre-line text-center"
            )}
          >
            {`-Raon.dev-\n개발 블로그 입니다`}
          </h1>
          <div className="w-80 h-10 shrink-0 bg-black my-[1rem]" />
          <h2 className="text-[1.4rem] font-bold my-[0.8rem]">
            주로 Front-end 관련 글을 작성합니다
          </h2>
          <h2 className="text-[1.2rem] font-bold">
            <Link
              href="https://www.youtube.com/channel/UC_9Nh2Xrh6C9u2e_zlIdEYA"
              className="text-[#ff0000]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Youtube `}
            </Link>
            에서 라이브 방송을 합니다
          </h2>
        </div>
      </section>
      <DivideLine />
      <section>
        <div className="w-full flex justify-evenly p-20 gap-x-20 gap-y-10 flex-wrap">
          {NAME_TAGS.map((nameTag) => (
            <NameTag key={nameTag.label} {...nameTag} />
          ))}
        </div>
        <div className="w-full flex justify-evenly p-20 gap-x-20">
          {ROUND_IMAGE_LINKS.map((roudImageLink) => (
            <RoundImageLink key={roudImageLink.alt} {...roudImageLink} />
          ))}
        </div>
      </section>
    </div>
  );
}

const ROUND_IMAGE_LINKS = [
  { href: "https://github.com/dydfuf", src: "/github.png", alt: "github-logo" },
  {
    href: "https://www.linkedin.com/in/%EC%B5%9C%EC%9A%A9%EC%97%B4/",
    src: "/linkedin.png",
    alt: "linkedin-logo",
  },
  {
    href: "https://www.linkedin.com/in/%EC%B5%9C%EC%9A%A9%EC%97%B4/",
    src: "/youtube.png",
    alt: "youtube-logo",
  },
];

const NAME_TAGS = [
  { src: "/businessman.png", alt: "businessman-logo", label: "최용열" },
  {
    src: "/email.png",
    alt: "email-logo",
    label: "88dydfuf@naver.com",
  },
];
