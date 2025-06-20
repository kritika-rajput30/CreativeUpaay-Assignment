import React from 'react';
import { SIDEBAR_PROJECTS } from '../constants';
import { LayoutIcon, MemberIcon, MessageIcon, SettingIcon, TaskIcon, TriangleCirclesLogo } from '../utils/icons';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { AddIcon } from '../utils/icons';



export const Sidebar: React.FC = () => (
  <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#E4E4E4] rounded-br-3xl flex flex-col justify-between z-30">
    <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
      <div className="flex items-center border-b gap-2 mb-10 p-4">
        <TriangleCirclesLogo />
        <span className="font-bold text-xl tracking-tight">Project M.</span>
        <KeyboardDoubleArrowLeftIcon className="ml-auto text-gray-400" fontSize="small" />
      </div>
      {/* Menu */}
      <nav className="flex flex-col gap-1 mb-2 p-3">
        <SidebarNavItem icon={<LayoutIcon/>} label="Home" />
        <SidebarNavItem icon={<MessageIcon/>} label="Messages" />
        <SidebarNavItem icon={<TaskIcon/>} label="Tasks" />
        <SidebarNavItem icon={<MemberIcon/>} label="Members" />
        <SidebarNavItem icon={<SettingIcon/>} label="Settings" />
      </nav>
      {/* Projects */}
      <div className="mb-8 p-3 ">
        <div className="flex border-t pt-6 items-center justify-between text-[10px] text-gray-400 mb-2 font-semibold tracking-widest uppercase">
          <span>MY PROJECTS</span>
          <AddIcon size={16}/>
        </div>
        <ul className="flex flex-col gap-1">
          {SIDEBAR_PROJECTS.map((project) => (
            <li
              key={project.name}
              className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                project.active
                  ? 'bg-[#F5F6FA] font-semibold text-black'
                  : 'hover:bg-gray-100 text-[#787486]'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${project.color}`} />
              {project.name}
              {project.active && <span className="ml-auto"><MoreMenu /></span>}
            </li>
          ))}
        </ul>
      </div>
      {/* Thoughts Time */}
      <div className="relative flex flex-col items-center mt-2 mb-4 p-3">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-yellow-300 opacity-30 blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="relative z-10 bg-[#F5F6FA] rounded-full p-2 flex items-center justify-center shadow">
            <EmojiObjectsOutlinedIcon className="text-yellow-400" fontSize="small" />
          </span>
        </div>
        <div className="w-full bg-[#F5F6FA] rounded-2xl p-4 flex flex-col items-center shadow mt-5">
          <div className="text-sm font-semibold text-black mb-1">Thoughts Time</div>
          <div className="text-xs text-gray-500 mb-3 text-center leading-snug">
            We don't have any notice for you, till then you can share your thoughts with your peers.
          </div>
          <button className="bg-white border border-[#D0D0D0] text-black rounded-lg px-4 py-2 text-xs font-semibold shadow-sm hover:bg-gray-100">
            Write a message
          </button>
        </div>
      </div>
    </div>
  </aside>
);

const SidebarNavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[#787486] hover:text-black hover:bg-gray-100 font-medium transition-colors">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const MoreMenu: React.FC = () => (
  <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="4" cy="10" r="1.5" fill="#A58AFF"/><circle cx="10" cy="10" r="1.5" fill="#A58AFF"/><circle cx="16" cy="10" r="1.5" fill="#A58AFF"/></svg>
  </span>
); 