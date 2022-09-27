import {createActiveTable} from "../elements/notesTable";
import {createArchivedTable} from "../elements/archivedTable";
import {addButtonsListeners} from "../helpers/eventListeners";

export const Categories = {
  task: 'Task',
  thought: 'Random Thought',
  idea: 'Idea',
  quote: 'Quite'
};

export let mockData = [
  {
    id: '1bjkj',
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: Categories.task,
    content: 'Tomatoes, bread',
    dates: [],
    active: true
  },
  {
    id: '2fgfh',
    name: 'The theory of evolution',
    created: 'April 27, 2021',
    category: Categories.thought,
    content: 'The evolution...',
    dates: [],
    active: true
  },
  {
    id: '3fhdty',
    name: 'New Feature',
    created: 'May 05, 2021',
    category: Categories.idea,
    content: 'Implement new...',
    dates: ['3/5/2021', '5/5/2021'],
    active: true
  },
  {
    id: '4qwsfc',
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: Categories.quote,
    content: 'Power doesn\'t co...',
    dates: [],
    active: true
  },
  {
    id: '5pmng',
    name: 'Books',
    created: 'May 15, 2021',
    category: Categories.task,
    content: 'The Lean Startup...',
    dates: [],
    active: true
  },
  {
    id: '6nvjgb',
    name: 'Walk',
    created: 'Sep 12, 2021',
    category: Categories.task,
    content: 'Walk 10km...',
    dates: [],
    active: false
  },
  {
    id: '7dpgbn',
    name: 'New Idea',
    created: 'Jun 25, 2021',
    category: Categories.idea,
    content: 'The Idea is...',
    dates: [],
    active: false
  }
];

export const updateState = (newState) => {
  mockData = [...newState];

  const oldTable1 = document.querySelector('.notesTable');
  const newTable1 = createActiveTable(mockData);
  const containerT1 = document.querySelector('.note_container');
  containerT1.replaceChild(newTable1, oldTable1);


  const oldTable2 = document.querySelector('.archivedTable');
  const newTable2 = createArchivedTable(mockData);
  const containerT2 = document.querySelector('.category_container');
  containerT2.replaceChild(newTable2, oldTable2);
  addButtonsListeners();
}

