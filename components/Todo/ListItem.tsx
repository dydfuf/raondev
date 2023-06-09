import classNames from 'classnames';
import Image from 'next/image';
import { TodoList } from './type';

interface Props extends TodoList {}

export default function ListItem({ label, status, description }: Props) {
  const ICON_SRC =
    status === 'DONE'
      ? '/icons/todo-done-checked.png'
      : '/icons/todo-not-checked.png';

  return (
    <li className="my-12">
      <div
        className={classNames(
          'w-full flex flex-col min-h-[80px] gap-10 p-16 rounded-8 justify-center',
          {
            'bg-blue-1/30': status === 'DONE',
            'bg-brown-1/50': status === 'TODO',
          }
        )}
      >
        <div className="flex gap-20">
          <div className="flex items-center justify-center">
            <Image width={32} height={32} src={ICON_SRC} alt="done-checked" />
          </div>
          <p
            className={classNames('font-bold text-28', {
              'text-gray-5': status === 'DONE',
              'text-gray-8': status === 'TODO',
            })}
          >
            {label}
          </p>
        </div>
        {description && (
          <p className="text-20 text-gray-9 font-medium mt-12">{description}</p>
        )}
      </div>
    </li>
  );
}
