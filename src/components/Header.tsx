import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';
import { CalendarIcon, MessageQuestionIcon, NotificationIcon } from '../utils/icons';

export const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-[#E4E4E4] h-[64px] shadow-sm z-10">
    {/* Search bar */}
    <div className="flex-1 max-w-xs">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#F5F5F5] bg-[#F5F6FA] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#635DFF]/20 placeholder:text-[#787486]"
        />
        <SearchIcon className="absolute left-3 top-2.5 text-[#B1B5D1]" fontSize="small" />
      </div>
    </div>

    {/* Right section */}
    <div className="flex items-center gap-4 ml-8">
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        <CalendarIcon/>
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        <MessageQuestionIcon/> 
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
          <NotificationIcon/>
       </button>
      </div>
      <div className="flex items-center gap-2 ml-4 cursor-pointer">
        <div className="flex flex-col items-end leading-tight mr-2">
          <span className="font-semibold text-sm text-black">Palak Jain</span>
          <span className="text-xs text-gray-400">Rajasthan, India</span>
        </div>
        <Avatar src="https://randomuser.me/api/portraits/women/47.jpg" sx={{ width: 32, height: 32 }} />
        <ArrowDropDownIcon className="text-gray-400" />
      </div>
    </div>
  </header>
);
