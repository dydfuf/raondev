interface Props {
  category: string;
}

export default function Category({ category }: Props) {
  return (
    <div className="h-24 flex items-center justify-center min-w-[52px] bg-gray-4/50 rounded-16 px-8 text-10 font-extrabold">
      <span>{category}</span>
    </div>
  );
}
