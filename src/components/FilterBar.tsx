import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CalendarIcon, FilterIcon } from '../utils/icons';

export interface FilterOptions {
  priority: string;
  dueDate: Date | null;
  searchQuery: string;
  tags: string[];
}

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  availableTags: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  availableTags,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePriorityChange = (priority: string) => {
    onFilterChange({ ...filters, priority });
  };

  const handleDateChange = (date: Date | null) => {
    onFilterChange({ ...filters, dueDate: date });
    setIsDatePickerOpen(false); // Close date picker after selection
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: event.target.value });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];
    onFilterChange({ ...filters, tags: newTags });
  };

  const handleTodayClick = () => {
    setIsDatePickerOpen(true);
  };

  const openFilterPopover = Boolean(anchorEl);
  const filterPopoverId = openFilterPopover ? 'filter-popover' : undefined;

  return (
    <div className="flex items-center gap-3">
      <Button
        aria-describedby={filterPopoverId}
        variant="outlined"
        onClick={handleClick}
        className="bg-white border border-[#787486] rounded-lg px-2 py-2 text-xs font-medium flex items-center gap-2 text-[#787486] normal-case hover:bg-gray-50"
        startIcon={<FilterIcon size={16} color="#787486" />}
        endIcon={<KeyboardArrowDownIcon fontSize="small" className="text-[#787486]" />}
      >
        Filter
      </Button>
<div className='hidden relative'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Due Date"
          value={filters.dueDate}
          onChange={handleDateChange}
          open={isDatePickerOpen} // Control open state programmatically
          onClose={() => setIsDatePickerOpen(false)} // Close when date picker is dismissed
          className=' absolute top-20'
          slotProps={{
            textField: {
              readOnly: true, // Make the text field read-only
              onClick: () => setIsDatePickerOpen(true), // Open on click
              size: 'small',
              className: 'hidden', // Hide the text field for visual purposes
            },
          }}
        />
      </LocalizationProvider>
</div>
      <Button
        variant="outlined"
        onClick={handleTodayClick}
        className="bg-white border rounded-full px-2 py-2 text-xs font-medium flex items-center gap-2 text-[#787486] normal-case hover:bg-gray-50"
        startIcon={<CalendarIcon size={16} color="#787486" />}
        endIcon={<KeyboardArrowDownIcon fontSize="small"  />}
      >
        Today
      </Button>

      <Popover
        id={filterPopoverId}
        open={openFilterPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          className: 'p-4 shadow-lg rounded-lg bg-white mt-2',
        }}
      >
        <div className="flex flex-col gap-4 min-w-[250px]">
          <FormControl size="small" fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              value={filters.priority}
              label="Priority"
              onChange={(e) => handlePriorityChange(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>

          

          <Box className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onClick={() => handleTagToggle(tag)}
                color={filters.tags.includes(tag) ? 'primary' : 'default'}
                variant={filters.tags.includes(tag) ? 'filled' : 'outlined'}
                className="cursor-pointer"
              />
            ))}
          </Box>
        </div>
      </Popover>
    </div>
  );
}; 