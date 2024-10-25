import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskList, TagMap, PriorityMap, VisibilityFieldTask } from '@/types/todo';

interface TodoState {
  tasks: TaskList;
  tagMap: TagMap;
  priorityMap: PriorityMap;
  todos: Task[];
  visibilityFieldTask: VisibilityFieldTask;
}

const initialState: TodoState = {
  tasks: [],
  tagMap: new Map(),
  priorityMap: new Map(),
  todos: [],
  visibilityFieldTask: new Map(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TaskList>) => {
      state.tasks = action.payload;
    },
    setTagMap: (state, action: PayloadAction<TagMap>) => {
      state.tagMap = action.payload;
    },
    setPriorityMap: (state, action: PayloadAction<PriorityMap>) => {
      state.priorityMap = action.payload;
    },
    setTodos: (state, action: PayloadAction<Task[]>) => {
      state.todos = action.payload;
    },
    setVisibilityFieldTask: (state, action: PayloadAction<VisibilityFieldTask>) => {
      state.visibilityFieldTask = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.todos.push(action.payload);
      state.tasks = state.todos.map(todo => ({
        ...todo,
        tags: todo.tagIds.map(id => state.tagMap.get(id)).filter((tag): tag is NonNullable<typeof tag> => tag !== undefined),
        priority: state.priorityMap.get(todo.priorityId) ?? undefined,
      }));
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        state.tasks = state.todos.map(todo => ({
          ...todo,
          tags: todo.tagIds.map(id => state.tagMap.get(id)).filter((tag): tag is NonNullable<typeof tag> => tag !== undefined),
          priority: state.priorityMap.get(todo.priorityId) ?? undefined,
        }));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.tasks = state.todos.map(todo => ({
        ...todo,
        tags: todo.tagIds.map(id => state.tagMap.get(id)).filter((tag): tag is NonNullable<typeof tag> => tag !== undefined),
        priority: state.priorityMap.get(todo.priorityId) ?? undefined,
      }));
    },
  },
});

export const {
  setTasks,
  setTagMap,
  setPriorityMap,
  setTodos,
  setVisibilityFieldTask,
  addTask,
  updateTask,
  deleteTask,
} = todoSlice.actions;

export default todoSlice.reducer;
