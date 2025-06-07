
export const CARD_TYPES = {
  TASK: 'task',
  BUG: 'bug',
  FEATURE: 'feature',
  STORY: 'story'
};


export const CARD_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in-progress',
  DONE: 'done'
};


export const CARD_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent'
};


export const CARD_LABELS = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DESIGN: 'design',
  TESTING: 'testing',
  DOCUMENTATION: 'documentation'
};

export const CARD_ASSIGNEES = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Williams'
];

export const CARD_COLORS = {
  TASK: '#4CAF50',
  BUG: '#F44336',
  FEATURE: '#2196F3',
  STORY: '#9C27B0'
};

export const STATUS_COLORS = {
  TODO: '#FFA726',
  IN_PROGRESS: '#42A5F5',
  DONE: '#66BB6A'
};

export const PRIORITY_COLORS = {
  LOW: '#90A4AE',
  MEDIUM: '#FFA726',
  HIGH: '#EF5350',
  URGENT: '#D32F2F'
};

export const LABEL_COLORS = {
  FRONTEND: '#42A5F5',
  BACKEND: '#66BB6A',
  DESIGN: '#EC407A',
  TESTING: '#FFA726',
  DOCUMENTATION: '#7E57C2'
};

export const USER_AVATARS = {
  'John Doe': 'https://i.pravatar.cc/150?img=1',
  'Jane Smith': 'https://i.pravatar.cc/150?img=5',
  'Mike Johnson': 'https://i.pravatar.cc/150?img=3',
  'Sarah Williams': 'https://i.pravatar.cc/150?img=9'
};

export const SESSION_DATA = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  notifications: [
    {
      id: 1,
      title: 'New task assigned',
      message: 'You have been assigned to "Implement user authentication"',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      title: 'Task completed',
      message: 'Mike Johnson completed "Design new dashboard"',
      time: '5 hours ago',
      read: true
    }
  ],
  recentActivity: [
    {
      id: 1,
      user: 'Jane Smith',
      action: 'created a new task',
      target: 'Fix navigation bug',
      time: '1 hour ago'
    },
    {
      id: 2,
      user: 'Mike Johnson',
      action: 'completed task',
      target: 'Design new dashboard',
      time: '5 hours ago'
    }
  ]
}; 