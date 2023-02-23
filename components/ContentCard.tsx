interface Props {
  title: string;
  timeToRead: string;
  description: string;
  releaseDate: string;
  hashtags: string[];
}

export default function ContentCard({
  title,
  timeToRead,
  description,
  releaseDate,
  hashtags,
}: Props) {
  return (
    <div className="flex flex-col aspect-[1.5] rounded-20 bg-blue-3/[0.15] justify-start p-20">
      <div className="flex justify-center">
        <span className="text-32 font-bold text-gray-9">{title}</span>
      </div>
      <div className="text-12 flex justify-center items-center space-x-10 text-gray-5">
        <span>{timeToRead}</span>
        <div className="w-2 h-2 rounded-1 bg-gray-4" />
        <span>{releaseDate}</span>
      </div>
      <p className="text-gray-5 py-12">
        {description}
        {description}
        {description}
        {description}
        {description}
        {description}
        {description}
      </p>
      <div className="flex justify-end mt-auto space-x-10">
        {hashtags.map((hashtag) => (
          <span key={hashtag}>{`# ${hashtag}`}</span>
        ))}
      </div>
    </div>
  );
}
