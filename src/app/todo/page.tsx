'use client';

import { TaskBoardView } from "@/components/todo/TaskBoardview";
import { TaskListView } from "@/components/todo/TaskListView";
import { Button } from "@/components/ui/button";
import { useTodos } from "@/hooks/todo/useTodos";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
export default function TodoPage() {
  const [viewMode, setViewMode] = useState<'list' | 'board'>('list'); 
  const { tasks } = useTodos();
  return <>
  <div className="flex justify-center items-center gap-4">
    <Button variant={viewMode === 'board' ? 'default' : 'outline'} onClick={() => setViewMode('board')}>Board</Button>
    <Button variant={viewMode === 'list' ? 'default' : 'outline'} onClick={() => setViewMode('list')}>List</Button>
  </div>

  {/* Add Task Button */}
  <div className="flex justify-center items-center">
    <Button variant="default" onClick={() => {}}>Add Task</Button>
  </div>

  {viewMode === 'list' ? <TaskListView tasks={tasks} /> : <TaskBoardView tasks={tasks} />}

  {/* Add Task Sheet */}
  <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Add Task</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  </>;
}
