import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  href: string;
  alt: string;
  src: string;
}

export default function RoundImageLink({ className, href, src, alt }: Props) {
  return (
    <div
      className={classNames(
        "w-full max-w-[160px] rounded-full border-1 aspect-square relative",
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image fill src={src} alt={alt} />
      </Link>
    </div>
  );
}
