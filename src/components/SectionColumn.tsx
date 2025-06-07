import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskCard } from './TaskCard';
import type { TaskCardProps } from './TaskCard';
import Button from '@mui/material/Button';

export interface SectionColumnProps {
  sectionId: string;
  title: string;
  tasks: TaskCardProps[];
  onAddTask: () => void;
  onTaskClick?: (taskIndex: number) => void;
}

export const SectionColumn: React.FC<SectionColumnProps> = ({ sectionId, title, tasks, onAddTask, onTaskClick }) => (
  <div className="bg-white rounded-lg shadow-md p-4 min-w-[300px] flex flex-col h-full">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <Button variant="outlined" size="small" onClick={onAddTask}>+ Add</Button>
    </div>
    <Droppable droppableId={sectionId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex-1 flex flex-col gap-3 min-h-[60px]"
        >
          {tasks.map((task, idx) => (
            <TaskCard key={idx} {...task} onClick={() => onTaskClick?.(idx)} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
); 