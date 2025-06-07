import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { addTask, moveTask } from '../features/tasks/tasksSlice';
import type { Task, TaskPriority } from '../features/tasks/types';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { SectionColumn } from '../components/SectionColumn';
import { TaskForm } from '../components/TaskForm';
import { FilterBar } from '../components/FilterBar';
import { v4 as uuidv4 } from 'uuid';

const sectionTitles = {
  todo: 'To Do',
  inprogress: 'On Progress',
  done: 'Done',
};

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const tasksBySection = useSelector((state: RootState) => state.tasks.tasksBySection);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [filterPriority, setFilterPriority] = useState('');

  const handleAddTask = (section: string) => {
    setOpenSection(section);
  };

  const handleTaskSubmit = (task: { title: string; description: string; priority: TaskPriority }) => {
    if (openSection) {
      dispatch(addTask({
        section: openSection,
        task: { ...task, id: uuidv4() },
      }));
      setOpenSection(null);
    }
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    dispatch(
      moveTask({
        sourceSection: source.droppableId,
        destSection: destination.droppableId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Mobile App</h1>
      <FilterBar priority={filterPriority} setPriority={setFilterPriority} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          {Object.entries(sectionTitles).map(([section, title]) => (
            <SectionColumn
              key={section}
              sectionId={section}
              title={title}
              tasks={tasksBySection[section].filter(
                t => !filterPriority || t.priority === filterPriority
              ).map((task, idx) => ({
                ...task,
                priority: task.priority,
                title: task.title,
                description: task.description,
                // Draggable wrapper will be added below
                children: (
                  <Draggable draggableId={task.id} index={idx} key={task.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {/* TaskCard content is rendered by SectionColumn */}
                      </div>
                    )}
                  </Draggable>
                ),
              }))}
              onAddTask={() => handleAddTask(section)}
            />
          ))}
        </div>
      </DragDropContext>
      <TaskForm
        open={!!openSection}
        onClose={() => setOpenSection(null)}
        onSubmit={handleTaskSubmit}
      />
    </div>
  );
}; 