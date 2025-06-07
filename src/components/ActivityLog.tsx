import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export interface ActivityLogProps {
  activities: string[];
}

export const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mt-6">
    <h2 className="text-lg font-bold mb-2">Activity Log</h2>
    <List>
      {activities.map((activity, idx) => (
        <ListItem key={idx}>
          <ListItemText primary={activity} />
        </ListItem>
      ))}
    </List>
  </div>
); 