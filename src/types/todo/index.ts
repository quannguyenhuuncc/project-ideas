export type Id = string;
export type Timestamp = number;
export type Order = number;
export type Color = string;
export type Icon = string;

type PriorityId = Id;
export type Priority = {
  id: PriorityId;
  name: string;
  color: Color;
  icon: Icon;
  order: Order;
};
export type PriorityMap = Map<PriorityId, Priority>;

type TagId = Id;
export type Tag = {
  id: TagId;
  name: string;
  color: Color;
  icon: Icon;
};
export type TagMap = Map<TagId, Tag>;

type TaskId = Id;
export interface Task {
  id: TaskId;
  title: string;
  description: string;
  startTime?: Timestamp;
  dueTime?: Timestamp;
  priorityId: PriorityId;
  tagIds: TagId[];
  order: Order;
  [key: string]: string | number | Priority | undefined | null | Array<string | number | Tag>;
}

export type VisibilityFieldTask = Map<keyof Task, boolean>;

export type TaskDetail = Task & {
  priority?: Priority;
  tags?: Tag[];
};

export type TaskList = TaskDetail[];
