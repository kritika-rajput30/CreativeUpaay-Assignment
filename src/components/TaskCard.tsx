import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

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
  onClick?: () => void;
  children?: React.ReactNode;
}

const priorityColor = {
  Low: 'bg-yellow-100 text-yellow-800',
  High: 'bg-red-100 text-red-800',
  Completed: 'bg-green-100 text-green-800',
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, priority, dueDate, subtasks, tags, labels, onClick, children }) => {
  const isOverdue = dueDate && new Date(dueDate) < new Date();

  return (
    <Card className={`mb-4 cursor-pointer shadow-sm border-0 ${priorityColor[priority]}`} onClick={onClick}>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <Chip label={priority} size="small" className={priorityColor[priority]} />
          {dueDate && (
            <Typography variant="caption" color="text.secondary">
              Due: {new Date(dueDate).toLocaleDateString()}
            </Typography>
          )}
        </div>
        {isOverdue && (
          <Chip label="Overdue" color="error" size="small" className="mb-2" />
        )}
        <Typography variant="h6" className="font-semibold mb-1">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        {subtasks && subtasks.length > 0 && (
          <List dense className="mt-2">
            {subtasks.map((subtask) => (
              <ListItem key={subtask.id} disablePadding>
                <Checkbox checked={subtask.completed} disabled />
                <ListItemText primary={subtask.title} />
              </ListItem>
            ))}
          </List>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </div>
        )}
        {labels && labels.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {labels.map((label) => (
              <Chip key={label} label={label} size="small" color="primary" />
            ))}
          </div>
        )}
        {children}
      </CardContent>
    </Card>
  );
}; 