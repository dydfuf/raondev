import ListItem from './ListItem';
import { TodoList } from './type';

interface Props {
  lists: TodoList[];
}

export default function Todo({ lists }: Props) {
  const done = lists.filter(todo => todo.status === 'DONE');
  const todo = lists.filter(todo => todo.status === 'TODO');

  return (
    <>
      <div className="flex gap-12 text-20">
        <span>DONE : {done.length}</span>
        <span>TODO : {todo.length}</span>
      </div>
      <ul>
        {[...todo, ...done].map((todoList, idx) => (
          <ListItem key={`${idx}-${todoList.label}`} {...todoList} />
        ))}
      </ul>
    </>
  );
}
