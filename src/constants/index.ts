export const STATUS = {
  todo: 'todo',
  inprogress: 'inprogress',
  done: 'done',
} as const;

export const SECTION_TITLES = {
  [STATUS.todo]: 'To Do',
  [STATUS.inprogress]: 'In Progress',
  [STATUS.done]: 'Done',
} as const;

export const SECTION_COLORS = {
  [STATUS.todo]: 'bg-[#F5F6FA]',
  [STATUS.inprogress]: 'bg-[#F5F6FA]',
  [STATUS.done]: 'bg-[#F5F6FA]',
} as const;

export const PRIORITY_STYLES = {
  Low: 'bg-[#DFA874] text-white',
  High: 'bg-[#D8727D] text-white',
  Completed: 'bg-[#68B266] text-white',
} as const;

export const AVATARS = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

export const SECTION_DATA = [
  {
    key: STATUS.todo,
    title: SECTION_TITLES[STATUS.todo],
    dot: 'bg-[#DFA874]',
    cards: [
      {
        priority: 'Low',
        title: 'Brainstorming',
        description: 'Brainstorming brings team members\' diverse experience into play.',
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
    key: STATUS.inprogress,
    title: SECTION_TITLES[STATUS.inprogress],
    dot: 'bg-[#D8727D]',
    cards: [
      {
        priority: 'Low',
        title: 'Onboarding Illustrations',
        description: 'Create illustrations for the onboarding process.',
        avatars: [AVATARS[0], AVATARS[1]],
        comments: 12,
        files: 0,
      },
      {
        priority: 'Low',
        title: 'Moodboard',
        description: 'Create a moodboard for the new design system.',
        avatars: [AVATARS[0]],
        comments: 12,
        files: 0,
      },
    ],
  },
  {
    key: STATUS.done,
    title: SECTION_TITLES[STATUS.done],
    dot: 'bg-[#68B266]',
    cards: [
      {
        priority: 'Low',
        title: 'Mobile App Design',
        description: 'Design the mobile app interface and interactions.',
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
] as const;

export const SIDEBAR_PROJECTS = [
  {
    name: 'Mobile App',
    color: 'bg-[#7AC555]',
    active: true,
  },
  {
    name: 'Website Redesign',
    color: 'bg-[#FFA500]',
    active: false,
  },
  {
    name: 'Design System',
    color: 'bg-[#E4CCFD]',
    active: false,
  },
  {
    name: 'Wireframes',
    color: 'bg-[#76A5EA]',
    active: false,
  },
] as const; 