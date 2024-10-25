'use client';
import { TodoProvider } from '@/providers/todo/TodoProvider';

export default function TodoLayout({ children }: { children: React.ReactNode }) {
  return <TodoProvider>{children}</TodoProvider>;
}