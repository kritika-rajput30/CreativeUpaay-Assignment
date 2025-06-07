import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';

export const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-[#E4E4E4] h-[80px] shadow-sm z-10">
    {/* Search bar */}
    <div className="flex items-center w-1/2 max-w-lg">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#F5F5F5] bg-[#F5F5F5] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#635DFF]/20 placeholder:text-[#787486]"
        />
        <SearchIcon className="absolute left-3 top-2.5 text-gray-400" fontSize="small" />
      </div>
    </div>

    {/* Right section */}
    <div className="flex items-center gap-6">
            <CalendarTodayOutlinedIcon className="text-gray-500 hover:text-black cursor-pointer transition-colors" fontSize="small" />

      <HelpOutlineIcon className="text-gray-500 hover:text-black cursor-pointer transition-colors" fontSize="small" />
      <NotificationsNoneOutlinedIcon className="text-gray-500 hover:text-black cursor-pointer transition-colors" fontSize="small" />
      <div className="flex items-center gap-3 ml-2 cursor-pointer">
        <Avatar src="https://randomuser.me/api/portraits/women/47.jpg" sx={{ width: 40, height: 40 }} />
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-sm text-black">Palak Jain</span>
          <span className="text-xs text-gray-400">Rajasthan, India</span>
        </div>
        <ArrowDropDownIcon className="text-gray-500" />
      </div>
    </div>
  </header>
);
