import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { addTask, moveTask } from '../features/tasks/tasksSlice';
import { addActivity } from '../features/activityLog/activityLogSlice';
import type { Task, TaskPriority } from '../utils/types';
import { TaskForm } from '../components/TaskForm';
import { FilterBar, type FilterOptions } from '../components/FilterBar';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult, DroppableProvided, DraggableProvided } from '@hello-pangea/dnd';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { TaskCard } from '../components/TaskCard';
import AddIcon from '@mui/icons-material/Add';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { SECTION_TITLES, SECTION_COLORS, AVATARS, SECTION_DATA, STATUS, PRIORITY_STYLES } from '../constants';
import { Add2Icon, GridIcon, LinkIcon, ListIcon, MemberIcon, PenIcon, ShareIcon } from '../utils/icons';



export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const tasksBySection = useSelector((state: RootState) => state.tasks.tasksBySection);
  const [openSection, setOpenSection] = useState<keyof typeof STATUS | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    priority: '',
    dueDate: null,
    searchQuery: '',
    tags: [],
  });

  // Get all unique tags from tasks
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    Object.values(tasksBySection).forEach(tasks => {
      tasks.forEach(task => {
        task.tags?.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags);
  }, [tasksBySection]);

  // Filter tasks based on current filters
  const filteredTasksBySection = useMemo(() => {
    const filtered: typeof tasksBySection = {
      todo: [],
      inprogress: [],
      done: [],
    };

    Object.entries(tasksBySection).forEach(([section, tasks]) => {
      filtered[section as keyof typeof tasksBySection] = tasks.filter(task => {
        // Priority filter
        if (filters.priority && task.priority !== filters.priority) {
          return false;
        }

        // Due date filter
        if (filters.dueDate && task.dueDate) {
          const taskDate = new Date(task.dueDate);
          const filterDate = new Date(filters.dueDate);
          if (taskDate.toDateString() !== filterDate.toDateString()) {
            return false;
          }
        }

        // Search query filter
        if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase();
          const matchesTitle = task.title.toLowerCase().includes(query);
          const matchesDescription = task.description.toLowerCase().includes(query);
          if (!matchesTitle && !matchesDescription) {
            return false;
          }
        }

        // Tags filter
        if (filters.tags.length > 0) {
          const hasMatchingTag = task.tags?.some(tag => filters.tags.includes(tag));
          if (!hasMatchingTag) {
            return false;
          }
        }

        return true;
      });
    });

    return filtered;
  }, [tasksBySection, filters]);

  const handleAddTask = (section: string) => {
    setOpenSection(section as keyof typeof STATUS);
  };

  const handleTaskSubmit = (task: { title: string; description: string; priority: TaskPriority }) => {
    if (openSection) {
      const newTask: Task = {
        ...task,
        id: uuidv4(),
        dueDate: new Date().toISOString(),
        subtasks: [],
        tags: [],
        labels: []
      };
      dispatch(addTask({
        section: openSection,
        task: newTask,
      }));
      dispatch(addActivity(`Added task "${task.title}" to ${SECTION_TITLES[openSection]}`));
      setOpenSection(null);
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log('Drag result:', result);
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
            <span className="bg-violet-300 rounded-lg w-6 h-6 flex items-center justify-center">
            <LinkIcon size={18} color='blue'/>
            </span>
            <span className="bg-violet-300 rounded-lg w-6 h-6 flex items-center justify-center">
<PenIcon size={18} color='blue'/>            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-xs font-semibold text-[#635DFF] px-2 py-1 rounded-lg bg-transparent">
           <p className=' bg-violet-200 rounded-sm'><Add2Icon color='blue' size={16} /></p> 
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
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        availableTags={availableTags}
      />
        <div className="flex items-center gap-3">
          <button className="bg-white border border-[#787486] rounded-lg px-4 py-2 text-xs font-medium flex items-center gap-2"><ShareIcon size={12}/> Share</button>
          <span className="w-px h-6 bg-black mx-2" />
          <button className="bg-primary rounded-lg p-2 w-8 h-8 flex items-center justify-center">
          <ListIcon className=' text-white' />
          </button>
          <button className="bg-white rounded-lg p-2 w-8 h-8 flex items-center justify-center">
        
            <GridIcon/>
          </button>
        </div>
      </div>
           

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 w-full">
          {SECTION_DATA.map((section) => {
            const sectionId = section.key as keyof typeof STATUS;
            const tasks = filteredTasksBySection[sectionId] || [];
            
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
                
                <Droppable droppableId={section.key} type="TASK">
                  {(provided: DroppableProvided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`flex-1 min-h-[200px] ${snapshot.isDraggingOver ? 'border-2 border-dashed border-purple-400 rounded-xl' : ''}`}
                    >
                      {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index} {...({ type: "TASK" } as any)}>
                          {(provided: DraggableProvided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                zIndex: snapshot.isDragging ? 9999 : 'auto',
                                willChange: 'transform',
                              }}
                            >
                              <div
                                style={{
                                  transform: snapshot.isDragging ? 'rotate(2deg)' : 'none',
                                  transition: 'transform 0.2s ease-in-out',
                                }}
                              >
                                <TaskCard {...task} priority={task.priority} isDragging={snapshot.isDragging} />
                              </div>
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