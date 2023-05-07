import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  label: string;
}

export default function NameTag({ src, alt, label }: Props) {
  return (
    <div className="min-w-[320px] h-60 border-2 rounded-12 flex items-center p-20 bg-white">
      <span className="font-bold text-24 flex w-full gap-16">
        <div className="w-40 rounded-full border-1 aspect-square relative shrink-0">
          <Image fill src={src} alt={alt} />
        </div>
        <div className="flex justify-center w-full">{label}</div>
      </span>
    </div>
  );
}
