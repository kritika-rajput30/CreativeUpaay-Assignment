export const SECTION_TITLES = {
  todo: 'To Do',
  inprogress: 'On Progress',
  done: 'Done',
};

export const SECTION_COLORS = {
  todo: 'border-b-4 border-[#5030E5]',
  inprogress: 'border-b-4 border-[#FFA500]',
  done: 'border-b-4 border-[#8BC48A]',
};

export const AVATARS = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

export const SIDEBAR_PROJECTS = [
  { name: 'Mobile App', color: 'bg-green-500', active: true },
  { name: 'Website Redesign', color: 'bg-yellow-400', active: false },
  { name: 'Design System', color: 'bg-purple-400', active: false },
  { name: 'Wireframes', color: 'bg-blue-400', active: false },
];

export const PRIORITY_STYLES = {
  Low: 'bg-[#F7F0FA] text-[#D58D49] border border-[#D58D49] font-semibold',
  High: 'bg-[#FFD3D3] text-[#D8727D] border border-[#D8727D] font-semibold',
  Completed: 'bg-[#83C29D] text-white border border-[#68B266] font-semibold',
};

export const STATUS = {
  todo: 'todo',
  inprogress: 'inprogress',
  done: 'done',
};

export const SECTION_DATA = [
  {
    key: 'todo',
    title: 'To Do',
    color: SECTION_COLORS.todo,
    dot: 'bg-[#5030E5]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [AVATARS[0], AVATARS[1], AVATARS[2]],
        comments: 12,
        files: 0,
      },
      {
        priority: 'High',
        title: 'Research',
        description: 'User research helps you to create an optimal product for users.',
        avatars: [AVATARS[3], AVATARS[0]],
        comments: 10,
        files: 3,
      },
      {
        priority: 'High',
        title: 'Wireframes',
        description: 'Low fidelity wireframes include the most basic content and visuals.',
        avatars: [AVATARS[2]],
        comments: 8,
        files: 1,
      },
    ],
  },
  {
    key: 'inprogress',
    title: 'On Progress',
    color: SECTION_COLORS.inprogress,
    dot: 'bg-[#FFA500]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [AVATARS[0], AVATARS[1]],
        comments: 12,
        files: 0,
      },
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [AVATARS[0]],
        comments: 12,
        files: 0,
      },
    ],
  },
  {
    key: 'done',
    title: 'Done',
    color: SECTION_COLORS.done,
    dot: 'bg-[#8BC48A]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: `Brainstorming brings team members' diverse experience into play.`,
        avatars: [AVATARS[0], AVATARS[1]],
        comments: 12,
        files: 0,
      },
      {
        priority: 'Completed',
        title: 'Design System',
        description: 'It just needs to adapt the UI from what you did before',
        avatars: [AVATARS[2]],
        comments: 12,
        files: 0,
      },
    ],
  },
]; 