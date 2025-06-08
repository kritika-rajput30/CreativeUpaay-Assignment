import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
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
  const [anchorElFilter, setAnchorElFilter] = useState<HTMLButtonElement | null>(null); // For "Filter" button popover
  const [anchorElToday, setAnchorElToday] = useState<HTMLButtonElement | null>(null); // For "Today" button DatePicker popover

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  const handlePriorityChange = (priority: string) => {
    onFilterChange({ ...filters, priority });
  };

  const handleDateChange = (date: Date | null) => {
    onFilterChange({ ...filters, dueDate: date });
    // Close the DatePicker popover after date selection
    setAnchorElToday(null); 
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

  const handleTodayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onFilterChange({ ...filters, dueDate: new Date() }); // Set date to today
    setAnchorElToday(event.currentTarget); // Open the DatePicker popover
  };

  const handleTodayPopoverClose = () => {
    setAnchorElToday(null);
  };

  const openFilterPopover = Boolean(anchorElFilter);
  const filterPopoverId = openFilterPopover ? 'filter-popover' : undefined;

  const openTodayPopover = Boolean(anchorElToday);
  const todayPopoverId = openTodayPopover ? 'today-popover' : undefined;

  return (
    <div className="flex items-center gap-3">
      {/* Filter Button */}
      <button
        aria-describedby={filterPopoverId}
        onClick={handleFilterClick}
        className="bg-white border border-gray-400 rounded-lg px-2 py-2 text-xs font-medium flex items-center gap-2 normal-case hover:bg-gray-50"
      ><FilterIcon size={16} color="#787486" />
        Filter<KeyboardArrowDownIcon fontSize="small" className="text-[#787486]" />
      </button>

      {/* Today Button */}
      <button
        aria-describedby={todayPopoverId}
        onClick={handleTodayClick}
        className="bg-white border border-gray-400 rounded-lg px-2 py-2 text-xs font-medium flex items-center gap-2 normal-case hover:bg-gray-50"
       
      ><CalendarIcon size={16} color="#787486" />
        Today<KeyboardArrowDownIcon fontSize="small" className="" />
      </button>

      {/* Filter Popover Content (Priority, Search, Tags) */}
      <Popover
        id={filterPopoverId}
        open={openFilterPopover}
        anchorEl={anchorElFilter}
        onClose={handleFilterClose}
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

      {/* Dedicated DatePicker Popover for "Today" button */}
      <Popover
        id={todayPopoverId}
        open={openTodayPopover}
        anchorEl={anchorElToday}
        onClose={handleTodayPopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          className: 'shadow-lg rounded-lg bg-white mt-2', // No padding here, StaticDatePicker handles its own.
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={filters.dueDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}; 