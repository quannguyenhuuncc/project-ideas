import { Priority, Tag, Task, TaskList, VisibilityFieldTask, TagMap, PriorityMap } from '@/types/todo';
import { isClient } from '@/utils/utils';

export const getTodos = (): Task[] => {
  if (!isClient()) return [];
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos: Task[]): void => {
  if (isClient()) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

export const getTags = (): Tag[] => {
  if (!isClient()) return [];
  const tags = localStorage.getItem('tags');
  return tags ? JSON.parse(tags) : [];
};

export const saveTags = (tags: Tag[]): void => {
  if (isClient()) {
    localStorage.setItem('tags', JSON.stringify(tags));
  }
};

export const getPriorities = (): Priority[] => {
  if (!isClient()) return [];
  const priorities = localStorage.getItem('priorities');
  return priorities ? JSON.parse(priorities) : [];
};

export const savePriorities = (priorities: Priority[]): void => {
  if (isClient()) {
    localStorage.setItem('priorities', JSON.stringify(priorities));
  }
};

export const getVisibilityFieldTask = (): VisibilityFieldTask => {
  if (!isClient()) return new Map();
  const visibilityFieldTask = localStorage.getItem('visibilityFieldTask');
  return visibilityFieldTask ? JSON.parse(visibilityFieldTask) : new Map();
};

export const saveVisibilityFieldTask = (visibilityFieldTask: VisibilityFieldTask): void => {
  if (isClient()) {
    localStorage.setItem('visibilityFieldTask', JSON.stringify(visibilityFieldTask));
  }
};
export const getTaskList = (): {
  tasks: TaskList;
  tagMap: TagMap;
  priorityMap: PriorityMap;
  todos: Task[];
  visibilityFieldTask: VisibilityFieldTask;
} => {
  const todos = getTodos();
  const tagMap = new Map(getTags().map((tag) => [tag.id, tag]));
  const priorityMap = new Map(getPriorities().map((priority) => [priority.id, priority]));
  const visibilityFieldTask = getVisibilityFieldTask();
  return {
    tasks: todos.map((todo) => {
      const taskTags = todo.tagIds.map((tagId) => tagMap.get(tagId)).filter((tag) => tag !== undefined);
      const taskPriority = priorityMap.get(todo.priorityId);
      return {
        ...todo,
        tags: taskTags,
        priority: taskPriority,
      };
    }),
    tagMap,
    priorityMap,
    todos,
    visibilityFieldTask,
  };
};
