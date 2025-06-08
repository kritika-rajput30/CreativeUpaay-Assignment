import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PRIORITY_STYLES } from '../constants';
import { FolderIcon, MessageIcon } from '../utils/icons';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskCardProps {
  title: string;
  description: string;
  priority: 'Low' | 'High' | 'Completed';
  dueDate?: string; 
  subtasks?: Subtask[];
  tags?: string[];
  labels?: string[];
  avatars?: string[];
  comments?: number;
  files?: number;
  onClick?: () => void;
  children?: React.ReactNode;
  isDragging?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, priority, dueDate, subtasks, tags, labels, avatars = [], comments = 12, files = 3, onClick, children, isDragging = false }) => {
  const isOverdue = dueDate && new Date(dueDate) < new Date();

  return (
    <div className={`bg-white rounded-xl shadow-card p-5 mb-4 cursor-pointer relative ${!isDragging ? 'hover:shadow-lg' : ''}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`px-3 py-1 rounded-md text-xs ${PRIORITY_STYLES[priority]}`}>{priority}</span>
        <MoreHorizIcon className="text-[#787486] cursor-pointer" />
      </div>
      <Typography variant="h6" className="font-bold text-base mb-1 text-black leading-tight">{title}</Typography>
      <Typography variant="body2" className="text-xs text-[#787486] mb-3">{description}</Typography>
      {subtasks && subtasks.length > 0 && (
        <List dense className="mt-2">
          {subtasks.map((subtask) => (
            <ListItem key={subtask.id} disablePadding>
              <Checkbox checked={subtask.completed} disabled size="small" />
              <ListItemText primary={subtask.title} />
            </ListItem>
          ))}
        </List>
      )}
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {avatars.slice(0, 4).map((src, idx) => (
            <Avatar key={idx} src={src} className="border-2 border-white" sx={{ width: 24, height: 24 }} />
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-[#787486]">
          <span className="flex items-center gap-1"><MessageIcon size={18}/> {comments} comments</span>
          <span className="flex items-center gap-1"><FolderIcon size={18}/> {files} files</span>
        </div>
      </div>
      {children}
    </div>
  );
}; 