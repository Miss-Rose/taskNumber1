export const Categories = {
  task: 'Task',
  thought: 'Random Thought',
  idea: 'Idea',
  quote: 'Quite'
};

export const mockData = [
  {
    id: '1',
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: Categories.task,
    content: 'Tomatoes, bread',
    dates: [],
    active: true
  },
  {
    id: '2',
    name: 'The theory of evolution',
    created: 'April 27, 2021',
    category: Categories.thought,
    content: 'The evolution...',
    dates: [],
    active: true
  },
  {
    id: '3',
    name: 'New Feature',
    created: 'May 05, 2021',
    category: Categories.idea,
    content: 'Implement new...',
    dates: ['3/5/2021', '5/5/2021'],
    active: true
  },
  {
    id: '4',
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: Categories.quote,
    content: 'Power doesn\'t co...',
    dates: [],
    active: true
  },
  {
    id: '5',
    name: 'Books',
    created: 'May 15, 2021',
    category: Categories.task,
    content: 'The Lean Startup...',
    dates: [],
    active: true
  },
  {
    id: '6',
    name: 'Walk',
    created: 'Sep 12, 2021',
    category: Categories.task,
    content: 'Walk 10km...',
    dates: [],
    active: false
  },
  {
    id: '7',
    name: 'New Idea',
    created: 'Jun 25, 2021',
    category: Categories.idea,
    content: 'The Idea is...',
    dates: [],
    active: false
  }
];
