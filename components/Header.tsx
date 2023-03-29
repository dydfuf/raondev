import Image from "next/image";
import { Anton } from "@next/font/google";
import classNames from "classnames";
import Link from "next/link";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="h-80 flex border-b-1 items-center px-20 gap-20">
      <Link href={"/"}>
        <button className="w-40 h-40 flex items-center justify-center object-contain">
          <Image src="/MainLogo.svg" width={40} height={40} alt="MainLogo" />
        </button>
      </Link>
      <Link href={"/"}>
        <span
          className={classNames(
            anton.className,
            "text-24 tracking-widest hidden mobile:block"
          )}
        >
          Raon.dev
        </span>
      </Link>
      <div className="flex items-center w-full">
        {/** TODO: 검색기능 추가 */}
        {/* <div className="flex w-full max-w-[300px] ml-auto mr-20 h-24 border-2 rounded-12 text-12 items-center">
          Search
        </div> */}
        <Link href="/aboutme" className="ml-auto shrink-0">
          <span className="text-16 underline">About me</span>
        </Link>
      </div>
    </header>
  );
}
