# Task Management Application

A modern task management application built with React, TypeScript, and Redux Toolkit. This application allows users to manage tasks across different sections (To Do, In Progress, Done) with features like drag-and-drop, task filtering, and real-time updates.

## Features

- Task management across multiple sections
- Drag and drop functionality for task organization
- Task filtering by priority, due date, and tags
- Subtask management
- Tag and label support
- Activity logging
- Responsive design
- Local storage persistence

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- Material-UI for components
- Tailwind CSS for styling
- React Beautiful DnD for drag and drop
- UUID for unique identifiers

## Project Structure

```
src/
├── app/
│   └── store.ts                 # Redux store configuration
├── components/
│   ├── FilterBar.tsx           # Task filtering component
│   ├── SectionColumn.tsx       # Individual section column
│   ├── TaskCard.tsx            # Task card component
│   └── TaskForm.tsx            # Task creation/editing form
├── features/
│   ├── activityLog/
│   │   └── activityLogSlice.ts # Activity logging state management
│   └── tasks/
│       └── tasksSlice.ts       # Task state management
├── pages/
│   └── Dashboard.tsx           # Main application page
├── utils/
│   ├── icons/
│   │   └── index.tsx           # Custom icon components
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── constants.ts                # Application constants
└── index.tsx                   # Application entry point
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## State Management

The application uses Redux Toolkit for state management with the following main slices:

- `tasksSlice`: Manages task data and operations
- `activityLogSlice`: Tracks user activities

## Task Structure

Each task contains:
- Title
- Description
- Priority (Low/High)
- Due date
- Subtasks
- Tags
- Labels


## Author

Kritika Vijaysingh Rajput
📧 kritikarajput203@gmail.com


