import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

export const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
    <div className="flex items-center gap-4 w-1/2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
        <SearchIcon className="absolute left-2 top-2.5 text-gray-400" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="outlined" className="rounded-lg">Invite</Button>
      <div className="flex -space-x-2">
        {avatars.map((src, idx) => (
          <Avatar key={idx} src={src} className="border-2 border-white" sx={{ width: 32, height: 32 }} />
        ))}
        <Avatar className="bg-violet-200 text-violet-700 text-xs font-bold" sx={{ width: 32, height: 32 }}>+2</Avatar>
      </div>
      <CalendarTodayIcon className="text-gray-400" />
      <NotificationsNoneIcon className="text-gray-400" />
      <div className="flex items-center gap-2 ml-4">
        <Avatar src="https://randomuser.me/api/portraits/women/47.jpg" sx={{ width: 40, height: 40 }} />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Palak Jain</span>
          <span className="text-xs text-gray-400">Rajasthan, India</span>
        </div>
      </div>
    </div>
  </header>
); 