import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks, setTagMap, setPriorityMap, setTodos } from '@/stores/todo/todoSlice';
import { getTaskList } from '@/utils/todo';
import type { TodoRootState, TodoAppDispatch } from '@/stores/todo/todoStore';

export function useTodos() {
  const dispatch = useDispatch<TodoAppDispatch>();
  const { tasks, tagMap, priorityMap, todos } = useSelector((state: TodoRootState) => state);

  const fetch = () => {
    const { tasks, tagMap, priorityMap, todos } = getTaskList();
    dispatch(setTasks(tasks));
    dispatch(setTagMap(tagMap));
    dispatch(setPriorityMap(priorityMap));
    dispatch(setTodos(todos));
  };

  useEffect(() => {
    if (!tasks.length) {
      fetch();
    }
  }, []);

  return { tasks, tagMap, priorityMap, todos, fetch };
}
