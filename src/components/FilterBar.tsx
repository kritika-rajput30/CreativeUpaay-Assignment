import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export interface FilterBarProps {
  priority: string;
  setPriority: (priority: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ priority, setPriority }) => (
  <div className="flex items-center gap-4 mb-6">
    <FormControl size="small" className="min-w-[120px]">
      <InputLabel id="priority-label">Priority</InputLabel>
      <Select
        labelId="priority-label"
        value={priority}
        label="Priority"
        onChange={e => setPriority(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    </FormControl>
  </div>
); 