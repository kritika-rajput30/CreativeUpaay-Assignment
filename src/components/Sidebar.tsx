import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const projects = [
  { name: 'Mobile App', color: 'primary', active: true },
  { name: 'Website Redesign', color: 'accent-yellow', active: false },
  { name: 'Design System', color: 'accent-pink', active: false },
  { name: 'Wireframes', color: 'accent-blue', active: false },
];

export const Sidebar: React.FC = () => (
  <aside className="w-64 bg-sidebar h-screen flex flex-col border-r border-border px-6 py-8">
    <div className="flex items-center gap-2 mb-10">
      <span className="w-3 h-3 rounded-full bg-primary"></span>
      <span className="font-bold text-xl tracking-tight">Project M.</span>
    </div>
    <nav className="flex flex-col gap-1 mb-8">
      <SidebarNavItem icon={<HomeIcon fontSize="small" />} label="Home" />
      <SidebarNavItem icon={<MessageIcon fontSize="small" />} label="Messages" />
      <SidebarNavItem icon={<AssignmentIcon fontSize="small" />} label="Tasks" />
      <SidebarNavItem icon={<GroupIcon fontSize="small" />} label="Members" />
      <SidebarNavItem icon={<SettingsIcon fontSize="small" />} label="Settings" />
    </nav>
    <div className="mb-8">
      <div className="text-xs text-gray-400 mb-2 font-semibold tracking-wide">MY PROJECTS</div>
      <ul className="flex flex-col gap-1">
        {projects.map((project) => (
          <li key={project.name} className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${project.active ? 'bg-primary/10 border-l-4 border-primary text-primary font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}>
            <FiberManualRecordIcon fontSize="small" className={`!text-${project.color}`} />
            {project.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto bg-primary/10 rounded-xl p-4 flex flex-col items-center">
      <div className="bg-white rounded-full p-2 mb-2 shadow">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#F6F6F6"/><path d="M12 7v5l3 3" stroke="#A58AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div className="text-xs text-gray-700 mb-2 text-center">Thoughts Time<br/>We don't have any notice for you, till then you can share your thoughts with your peers.</div>
      <button className="bg-primary text-white rounded-lg px-4 py-2 text-xs font-semibold">Write a message</button>
    </div>
  </aside>
);

const SidebarNavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-700 font-medium">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
); 