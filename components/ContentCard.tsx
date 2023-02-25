import Link from "next/link";
import Category from "./Category";

interface Props {
  title: string;
  timeToRead: string;
  description: string;
  releaseDate: string;
  categories: string[];
  to: string;
}

export default function ContentCard({
  title,
  timeToRead,
  description,
  releaseDate,
  categories,
  to,
}: Props) {
  return (
    <div className="flex flex-col aspect-[1.5] rounded-20 bg-blue-3/[0.15] justify-start p-20">
      <div className="flex justify-center">
        <Link href={to}>
          <span className="text-24 font-bold text-gray-9">{title}</span>
        </Link>
      </div>
      <div className="text-12 flex justify-center items-center space-x-10 text-gray-5 pt-8">
        <span>{timeToRead}</span>
        <div className="w-2 h-2 rounded-1 bg-gray-4" />
        <span>{releaseDate}</span>
      </div>
      <p className="text-gray-5 py-12">{description}</p>
      <div className="flex justify-start mt-auto flex-wrap gap-4">
        {categories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
