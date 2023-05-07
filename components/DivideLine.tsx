import classNames from "classnames";

interface Props {
  className?: string;
}

export default function DivideLine({ className }: Props) {
  return <div className={classNames("w-full h-2 bg-[#e5e7eb]", className)} />;
}
