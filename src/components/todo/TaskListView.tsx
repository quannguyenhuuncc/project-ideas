import { useTodos } from '@/hooks/todo/useTodos';
import { Task } from '@/types/todo';

interface TaskListViewProps {
  tasks: Task[];
}

export const TaskListView: React.FC<TaskListViewProps> = ({ tasks }) => {
  const { tagMap, priorityMap } = useTodos();

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Tags: {task.tagIds.map(id => tagMap.get(id)?.name).join(', ')}</p>
          <p>Priority: {priorityMap.get(task.priorityId)?.name}</p>
        </div>
      ))}
    </div>
  );
};

