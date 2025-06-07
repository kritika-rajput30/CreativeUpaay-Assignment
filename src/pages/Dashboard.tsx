import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { addTask, moveTask } from '../features/tasks/tasksSlice';
import { addActivity } from '../features/activityLog/activityLogSlice';
import type { Task, TaskPriority } from '../features/tasks/types';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { SectionColumn } from '../components/SectionColumn';
import { TaskForm } from '../components/TaskForm';
import { FilterBar } from '../components/FilterBar';
import { v4 as uuidv4 } from 'uuid';
import LinkIcon from '@mui/icons-material/Link';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Avatar from '@mui/material/Avatar';
import { TaskCard } from '../components/TaskCard';

const sectionTitles: Record<string, string> = {
  todo: 'To Do',
  inprogress: 'On Progress',
  done: 'Done',
};

const sectionColors: Record<string, string> = {
  todo: 'border-b-4 border-[#5030E5]',
  inprogress: 'border-b-4 border-[#FFA500]',
  done: 'border-b-4 border-[#8BC48A]',
};

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

const sectionData = [
  {
    key: 'todo',
    title: 'To Do',
    color: 'border-b-4 border-[#5030E5]',
    dot: 'bg-[#5030E5]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [
          'https://randomuser.me/api/portraits/men/32.jpg',
          'https://randomuser.me/api/portraits/women/44.jpg',
          'https://randomuser.me/api/portraits/men/45.jpg',
        ],
        comments: 12,
        files: 0,
      },
      {
        priority: 'High',
        title: 'Research',
        description: 'User research helps you to create an optimal product for users.',
        avatars: [
          'https://randomuser.me/api/portraits/women/46.jpg',
          'https://randomuser.me/api/portraits/men/32.jpg',
        ],
        comments: 10,
        files: 3,
      },
      {
        priority: 'High',
        title: 'Wireframes',
        description: 'Low fidelity wireframes include the most basic content and visuals.',
        avatars: [
          'https://randomuser.me/api/portraits/men/45.jpg',
        ],
        comments: 8,
        files: 1,
      },
    ],
  },
  {
    key: 'inprogress',
    title: 'On Progress',
    color: 'border-b-4 border-[#FFA500]',
    dot: 'bg-[#FFA500]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [
          'https://randomuser.me/api/portraits/men/32.jpg',
          'https://randomuser.me/api/portraits/women/44.jpg',
        ],
        comments: 12,
        files: 0,
      },
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [
          'https://randomuser.me/api/portraits/men/32.jpg',
        ],
        comments: 12,
        files: 0,
      },
    ],
  },
  {
    key: 'done',
    title: 'Done',
    color: 'border-b-4 border-[#8BC48A]',
    dot: 'bg-[#8BC48A]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [
          'https://randomuser.me/api/portraits/men/32.jpg',
          'https://randomuser.me/api/portraits/women/44.jpg',
        ],
        comments: 12,
        files: 0,
      },
      {
        priority: 'Completed',
        title: 'Design System',
        description: 'It just needs to adapt the UI from what you did before',
        avatars: [
          'https://randomuser.me/api/portraits/men/45.jpg',
        ],
        comments: 12,
        files: 0,
      },
    ],
  },
];

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
      const newTask = { ...task, id: uuidv4() };
      dispatch(addTask({
        section: openSection,
        task: newTask,
      }));
      dispatch(addActivity(`Added task "${task.title}" to ${sectionTitles[openSection]}`));
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
    dispatch(addActivity(`Moved task from ${sectionTitles[source.droppableId]} to ${sectionTitles[destination.droppableId]}`));
  };

  return (
    <div className="min-h-screen w-full bg-[#f9fafb]">
      {/* Title Row */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-black tracking-tight">Mobile App</h1>
          <span className="flex gap-2">
            <span className="bg-primary rounded-lg p-1 cursor-pointer"><LinkIcon fontSize="small" className="text-white" /></span>
            <span className="bg-primary rounded-lg p-1 cursor-pointer"><EditOutlinedIcon fontSize="small" className="text-white" /></span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-transparent text-primary text-xs font-semibold rounded-lg px-4 py-2">Invite</button>
          <div className="flex -space-x-2">
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://randomuser.me/api/portraits/women/46.jpg" className="border-2 border-white" sx={{ width: 32, height: 32 }} />
            <Avatar className="bg-[#F5F6FA] text-primary text-xs font-bold border-2 border-white" sx={{ width: 32, height: 32 }}>+2</Avatar>
          </div>
        </div>
      </div>
      {/* Filter/Share Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
          <button className="bg-white border border-[#E4E4E4] rounded-lg px-4 py-2 text-xs font-medium flex items-center gap-2">Filter <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button className="bg-white border border-[#E4E4E4] rounded-lg px-4 py-2 text-xs font-medium flex items-center gap-2">Today <svg width="16" height="16" fill="none"><path d="M4 6l4 4 4-4" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-[#E4E4E4] rounded-lg px-4 py-2 text-xs font-medium flex items-center gap-2"><ShareOutlinedIcon fontSize="small" className="text-[#787486]" /> Share</button>
          <span className="w-px h-6 bg-[#E4E4E4] mx-2" />
          <button className="bg-primary rounded-lg p-2"><ViewModuleOutlinedIcon fontSize="small" className="text-white" /></button>
          <button className="bg-white border border-[#E4E4E4] rounded-lg p-2"><ViewListOutlinedIcon fontSize="small" className="text-[#787486]" /></button>
        </div>
      </div>
      {/* Kanban Board */}
      <div className="flex gap-6 w-full">
        {sectionData.map((section) => (
          <div key={section.key} className={`flex-1 min-w-[320px] max-w-[400px] bg-[#F5F6FA] rounded-2xl p-4 ${section.color} flex flex-col`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2.5 h-2.5 rounded-full ${section.dot}`}></span>
              <span className="font-semibold text-sm text-black">{section.title}</span>
              <span className="bg-[#E0E0E0] text-xs font-semibold rounded px-2 py-0.5">{section.cards.length}</span>
              <span className="ml-auto text-[#787486] cursor-pointer">+</span>
            </div>
            <div className={`h-1 w-full rounded-full mb-4 ${section.color}`}></div>
            {section.cards.map((card, idx) => (
              <TaskCard key={idx} {...card} priority={card.priority as 'Low' | 'High' | 'Completed'} />
            ))}
          </div>
        ))}
      </div>
      <TaskForm
        open={!!openSection}
        onClose={() => setOpenSection(null)}
        onSubmit={handleTaskSubmit}
      />
    </div>
  );
}; 