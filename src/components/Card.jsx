import React from 'react';
import { 
  Card as MuiCard, 
  CardContent, 
  Typography, 
  Chip,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Flag as FlagIcon,
  Label as LabelIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import {
  CARD_TYPES,
  CARD_STATUS,
  CARD_PRIORITY,
  CARD_LABELS,
  CARD_ASSIGNEES,
  CARD_COLORS,
  STATUS_COLORS,
  PRIORITY_COLORS,
  LABEL_COLORS
} from '../constants';

const getStatusColor = (status) => {
  return STATUS_COLORS[status.toUpperCase()] || '#90A4AE';
};

const getPriorityColor = (priority) => {
  return PRIORITY_COLORS[priority.toUpperCase()] || '#90A4AE';
};

const getLabelColor = (label) => {
  return LABEL_COLORS[label.toUpperCase()] || '#90A4AE';
};

const getTypeColor = (type) => {
  return CARD_COLORS[type.toUpperCase()] || '#90A4AE';
};

// ... rest of the existing code ... 