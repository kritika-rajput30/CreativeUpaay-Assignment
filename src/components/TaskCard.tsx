import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskCardProps {
  title: string;
  description: string;
  priority: 'Low' | 'High' | 'Completed';
  dueDate?: string; // ISO string format
  subtasks?: Subtask[];
  tags?: string[];
  labels?: string[];
  avatars?: string[];
  comments?: number;
  files?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

const priorityStyles = {
  Low: 'bg-[#F7F0FA] text-[#D58D49] border border-[#D58D49] font-semibold',
  High: 'bg-[#FFD3D3] text-[#D8727D] border border-[#D8727D] font-semibold',
  Completed: 'bg-[#83C29D] text-white border border-[#68B266] font-semibold',
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, priority, dueDate, subtasks, tags, labels, avatars = [], comments = 12, files = 3, onClick, children }) => {
  const isOverdue = dueDate && new Date(dueDate) < new Date();

  return (
    <div className="bg-white rounded-xl shadow-card p-5 mb-4 cursor-pointer transition hover:shadow-lg relative">
      <div className="flex items-center justify-between mb-2">
        <span className={`px-3 py-1 rounded-full text-xs ${priorityStyles[priority]}`}>{priority}</span>
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
          <span className="flex items-center gap-1"><ChatBubbleOutlineOutlinedIcon fontSize="small" className="!text-base" /> {comments} comments</span>
          <span className="flex items-center gap-1"><InsertDriveFileOutlinedIcon fontSize="small" className="!text-base" /> {files} files</span>
        </div>
      </div>
      {children}
    </div>
  );
}; 