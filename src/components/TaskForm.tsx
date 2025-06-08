import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';
import Chip from '@mui/material/Chip';
import { AddIcon, CalendarIcon, LabelIcon, TagIcon, TaskIcon } from '../utils/icons';

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
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className: "rounded-2xl shadow-lg"
      }}
    >
      <DialogTitle className="flex items-center gap-2 text-xl font-semibold border-b border-gray-100 pb-4">
        <TaskIcon size={24} color="#635DFF" />
        {initialData ? 'Edit Task' : 'Add New Task'}
      </DialogTitle>
      <DialogContent className="flex flex-col gap-6 pt-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Title</label>
          <TextField
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
            autoFocus
            placeholder="Enter task title"
            variant="outlined"
            size="small"
            className="bg-[#F5F6FA] rounded-lg"
            InputProps={{
              className: "rounded-lg"
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <TextField
            value={description}
            onChange={e => setDescription(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            placeholder="Enter task description"
            variant="outlined"
            size="small"
            className="bg-[#F5F6FA] rounded-lg"
            InputProps={{
              className: "rounded-lg"
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Priority</label>
            <div className="flex gap-2">
              <button
                onClick={() => setPriority('Low')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  priority === 'Low' 
                    ? 'bg-[#635DFF] text-white' 
                    : 'border border-[#635DFF] text-[#635DFF] hover:bg-[#635DFF]/10'
                }`}
              >
                Low
              </button>
              <button
                onClick={() => setPriority('High')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  priority === 'High' 
                    ? 'bg-[#635DFF] text-white' 
                    : 'border border-[#635DFF] text-[#635DFF] hover:bg-[#635DFF]/10'
                }`}
              >
                High
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Due Date</label>
            <TextField
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              fullWidth
              size="small"
              className="bg-[#F5F6FA] rounded-lg"
              InputProps={{
                className: "rounded-lg",
                startAdornment: <div className="mr-2"><CalendarIcon size={20} color="#787486" /></div>
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Subtasks</label>
          <div className="flex gap-2">
            <TextField
              value={newSubtask}
              onChange={e => setNewSubtask(e.target.value)}
              fullWidth
              size="small"
              placeholder="Add a subtask"
              className="bg-[#F5F6FA] rounded-lg"
              InputProps={{
                className: "rounded-lg"
              }}
            />
            <button
              onClick={handleAddSubtask}
              className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white rounded-lg min-w-[100px] px-4 py-2 flex items-center justify-center gap-2 transition-colors"
            >
              <AddIcon size={16} color="white" />
              <span>Add</span>
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {subtasks.map((subtask) => (
              <div key={subtask.id} className="flex items-center gap-2 bg-[#F5F6FA] p-2 rounded-lg">
                <TextField
                  value={subtask.title}
                  disabled
                  fullWidth
                  size="small"
                  className="bg-transparent"
                  InputProps={{
                    className: "bg-transparent"
                  }}
                />
                <IconButton
                  onClick={() => handleRemoveSubtask(subtask.id)}
                  size="small"
                  className="text-gray-500 hover:text-red-500"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Tags</label>
          <div className="flex gap-2">
            <TextField
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              fullWidth
              size="small"
              placeholder="Add a tag"
              className="bg-[#F5F6FA] rounded-lg"
              InputProps={{
                className: "rounded-lg",
                startAdornment: <div className="mr-2"><TagIcon size={20} color="#787486" /></div>
              }}
            />
            <button
              onClick={handleAddTag}
              className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white rounded-lg min-w-[100px] px-4 py-2 flex items-center justify-center gap-2 transition-colors"
            >
              <AddIcon size={16} color="white" />
              <span>Add</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => handleRemoveTag(tag)}
                className="bg-[#F5F6FA] text-[#635DFF]"
                deleteIcon={<DeleteIcon className="text-[#787486]" />}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Labels</label>
          <div className="flex gap-2">
            <TextField
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
              fullWidth
              size="small"
              placeholder="Add a label"
              className="bg-[#F5F6FA] rounded-lg"
              InputProps={{
                className: "rounded-lg",
                startAdornment: <div className="mr-2"><LabelIcon size={20} color="#787486" /></div>
              }}
            />
            <button
              onClick={handleAddLabel}
              className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white rounded-lg min-w-[100px] px-4 py-2 flex items-center justify-center gap-2 transition-colors"
            >
              <AddIcon size={16} color="white" />
              <span>Add</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {labels.map((label) => (
              <Chip
                key={label}
                label={label}
                onDelete={() => handleRemoveLabel(label)}
                className="bg-[#635DFF] text-white"
                deleteIcon={<DeleteIcon className="text-white" />}
              />
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions className="border-t border-gray-100 p-4">
        <button
          onClick={onClose}
          className="text-[#787486] hover:bg-gray-100 rounded-lg px-6 py-2 text-sm font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#635DFF] hover:bg-[#635DFF]/90 text-white rounded-lg px-6 py-2 text-sm font-medium transition-colors"
        >
          {initialData ? 'Save Changes' : 'Create Task'}
        </button>
      </DialogActions>
    </Dialog>
  );
}; 