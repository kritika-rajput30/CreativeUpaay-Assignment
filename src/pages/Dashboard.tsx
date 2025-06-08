import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { addTask, moveTask } from '../features/tasks/tasksSlice';
import { addActivity } from '../features/activityLog/activityLogSlice';
import type { Task, TaskPriority } from '../features/tasks/types';
import { TaskForm } from '../components/TaskForm';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult, DroppableProvided, DraggableProvided } from '@hello-pangea/dnd';
import LinkIcon from '@mui/icons-material/Link';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { TaskCard } from '../components/TaskCard';
import AddIcon from '@mui/icons-material/Add';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { SECTION_TITLES, SECTION_COLORS, AVATARS, SECTION_DATA, STATUS, PRIORITY_STYLES } from '../constants';

const ListIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="20" height="20" fill="none" viewBox="0 0 20 20">
    <rect x="3" y="5" width="14" height="3" rx="1" fill="currentColor"/>
    <rect x="3" y="12" width="14" height="3" rx="1" fill="currentColor"/>
  </svg>
);

export const GridIcon = ({ className = " rounded-full" }: { className?: string }) => (
  <svg className={className} width="21" height="21" fill="none" viewBox="0 0 21 21">
    <rect x="3" y="3" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="13" y="3" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="3" y="13" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="13" y="13" width="5" height="5" rx="1" fill="currentColor"/>
  </svg>
);

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
      const sectionId = openSection as keyof typeof STATUS;
      const newTask: Task = {
        ...task,
        id: uuidv4(),
        dueDate: new Date().toISOString(),
        subtasks: [],
        tags: [],
        labels: []
      };
      dispatch(addTask({
        section: sectionId,
        task: newTask,
      }));
      dispatch(addActivity(`Added task "${task.title}" to ${SECTION_TITLES[sectionId]}`));
      setOpenSection(null);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    
    const sourceId = source.droppableId as keyof typeof STATUS;
    const destId = destination.droppableId as keyof typeof STATUS;
    
    dispatch(
      moveTask({
        sourceSection: sourceId,
        destSection: destId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    );
    dispatch(addActivity(`Moved task from ${SECTION_TITLES[sourceId]} to ${SECTION_TITLES[destId]}`));
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Title Row */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">Mobile App</h1>
          <span className="flex gap-3 mt-3 ml-3">
            <span className="bg-[#EEF2FF] rounded-lg w-6 h-6 flex items-center justify-center">
              <LinkIcon className="text-[#635DFF] w-4 h-4" fontSize="inherit" />
            </span>
            <span className="bg-[#EEF2FF] rounded-lg w-6 h-6 flex items-center justify-center">
              <EditOutlinedIcon className="text-[#635DFF] w-4 h-4" fontSize="inherit" />
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-xs font-semibold text-[#635DFF] px-2 py-1 rounded-lg bg-transparent">
            <AddIcon className="text-[#635DFF] w-4 h-4 bg-[#EEF2FF] rounded-lg" fontSize="inherit" />
            Invite
          </button>
          <div className="flex -space-x-2">
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/women/46.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar className="bg-[#F4D7DA] text-[#D25B68] text-xs font-bold border-2 border-white" sx={{ width: 32, height: 32 }}>+2</Avatar>
          </div>
        </div>
      </div>
      {/* Filter/Share Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
        <button className="bg-white border border-[#787486] rounded-lg px-2 py-2 text-xs font-medium flex items-center gap-2">
              <FilterAltOutlinedIcon fontSize="small" className="text-[#787486]" />
              Filter
              <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="bg-white border border-[#787486] rounded-lg px-2 py-2 text-xs font-medium flex items-center gap-2">
              <DateRangeOutlinedIcon fontSize="small" className="text-[#787486]" />
              Today
              <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>  
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-[#787486] rounded-lg px-4 py-2 text-xs font-medium flex items-center gap-2"><ShareOutlinedIcon fontSize="small" className="text-[#787486]" /> Share</button>
          <span className="w-px h-6 bg-black mx-2" />
          <button className="bg-primary rounded-lg p-2 w-8 h-8 flex items-center justify-center">
          <ListIcon className="text-white"   />
          </button>
          <button className="bg-white rounded-lg p-2 w-8 h-8 flex items-center justify-center">
        
            <GridIcon className="text-[#787486]"/>
          </button>
        </div>
      </div>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 w-full">
          {SECTION_DATA.map((section) => {
            const sectionId = section.key as keyof typeof STATUS;
            const tasks = tasksBySection[sectionId] || [];
            
            return (
              <div key={section.key} className={`flex-1 min-w-[320px] max-w-[400px] bg-[#F5F6FA] rounded-2xl p-4 ${SECTION_COLORS[sectionId]} flex flex-col`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${section.dot}`}></span>
                  <span className="font-semibold text-sm text-black">{section.title}</span>
                  <span className="bg-[#E0E0E0] text-xs font-semibold rounded px-2 py-0.5">{tasks.length}</span>
                  <button 
                    onClick={() => handleAddTask(section.key)}
                    className="ml-auto text-[#787486] cursor-pointer hover:text-[#635DFF]"
                  >
                    +
                  </button>
                </div>
                <div className={`h-1 w-full rounded-full mb-4 ${SECTION_COLORS[sectionId]}`}></div>
                
                <Droppable droppableId={section.key}>
                  {(provided: DroppableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex-1 min-h-[200px]"
                    >
                      {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided: DraggableProvided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard {...task} priority={task.priority} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
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