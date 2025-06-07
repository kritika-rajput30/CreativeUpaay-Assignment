import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import { CARD_STATUS } from '../constants';

const KanbanBoard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Implement user authentication',
      description: 'Add login and registration functionality',
      type: 'feature',
      status: CARD_STATUS.TODO,
      priority: 'high',
      assignee: 'John Doe',
      labels: ['frontend', 'backend'],
      dueDate: '2024-03-15'
    },
    {
      id: 2,
      title: 'Fix navigation bug',
      description: 'Navigation menu not working on mobile devices',
      type: 'bug',
      status: CARD_STATUS.IN_PROGRESS,
      priority: 'urgent',
      assignee: 'Jane Smith',
      labels: ['frontend'],
      dueDate: '2024-03-10'
    },
    {
      id: 3,
      title: 'Design new dashboard',
      description: 'Create mockups for the new dashboard layout',
      type: 'task',
      status: CARD_STATUS.DONE,
      priority: 'medium',
      assignee: 'Mike Johnson',
      labels: ['design'],
      dueDate: '2024-03-05'
    }
  ]);

  // ... rest of the existing code ...
}; 