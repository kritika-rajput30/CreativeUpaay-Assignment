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

export const SECTION_DATA = [
  {
    key: STATUS.todo,
    title: SECTION_TITLES[STATUS.todo],
    dot: 'bg-[#DFA874]',
    cards: [],
  },
  {
    key: STATUS.inprogress,
    title: SECTION_TITLES[STATUS.inprogress],
    dot: 'bg-[#D8727D]',
    cards: [],
  },
  {
    key: STATUS.done,
    title: SECTION_TITLES[STATUS.done],
    dot: 'bg-[#68B266]',
    cards: [],
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