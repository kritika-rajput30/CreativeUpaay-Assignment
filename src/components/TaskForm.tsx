import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';
import Chip from '@mui/material/Chip';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: { title: string; description: string; priority: 'Low' | 'High'; dueDate?: string; subtasks?: Subtask[]; tags?: string[]; labels?: string[] }) => void;
  initialData?: { title: string; description: string; priority: 'Low' | 'High'; dueDate?: string; subtasks?: Subtask[]; tags?: string[]; labels?: string[] };
}

export const TaskForm: React.FC<TaskFormProps> = ({ open, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [priority, setPriority] = useState<'Low' | 'High'>(initialData?.priority || 'Low');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [subtasks, setSubtasks] = useState<Subtask[]>(initialData?.subtasks || []);
  const [newSubtask, setNewSubtask] = useState('');
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [newTag, setNewTag] = useState('');
  const [labels, setLabels] = useState<string[]>(initialData?.labels || []);
  const [newLabel, setNewLabel] = useState('');

  const handleAddSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks([...subtasks, { id: uuidv4(), title: newSubtask, completed: false }]);
      setNewSubtask('');
    }
  };

  const handleRemoveSubtask = (id: string) => {
    setSubtasks(subtasks.filter(subtask => subtask.id !== id));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleAddLabel = () => {
    if (newLabel.trim() && !labels.includes(newLabel)) {
      setLabels([...labels, newLabel]);
      setNewLabel('');
    }
  };

  const handleRemoveLabel = (label: string) => {
    setLabels(labels.filter(l => l !== label));
  };

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit({ title, description, priority, dueDate, subtasks, tags, labels });
      setTitle('');
      setDescription('');
      setPriority('Low');
      setDueDate('');
      setSubtasks([]);
      setTags([]);
      setLabels([]);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent className="flex flex-col gap-4 min-w-[300px]">
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
          autoFocus
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
          multiline
          minRows={2}
        />
        <TextField
          select
          label="Priority"
          value={priority}
          onChange={e => setPriority(e.target.value as 'Low' | 'High')}
          fullWidth
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <div className="flex flex-col gap-2">
          <TextField
            label="Add Subtask"
            value={newSubtask}
            onChange={e => setNewSubtask(e.target.value)}
            fullWidth
          />
          <Button onClick={handleAddSubtask} variant="outlined" size="small">Add Subtask</Button>
          {subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-2">
              <TextField value={subtask.title} disabled fullWidth />
              <IconButton onClick={() => handleRemoveSubtask(subtask.id)} size="small">
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <TextField
            label="Add Tag"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            fullWidth
          />
          <Button onClick={handleAddTag} variant="outlined" size="small">Add Tag</Button>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Chip key={tag} label={tag} onDelete={() => handleRemoveTag(tag)} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <TextField
            label="Add Label"
            value={newLabel}
            onChange={e => setNewLabel(e.target.value)}
            fullWidth
          />
          <Button onClick={handleAddLabel} variant="outlined" size="small">Add Label</Button>
          <div className="flex flex-wrap gap-1">
            {labels.map((label) => (
              <Chip key={label} label={label} onDelete={() => handleRemoveLabel(label)} color="primary" />
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">{initialData ? 'Save' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
}; 