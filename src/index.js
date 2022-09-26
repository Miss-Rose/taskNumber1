import {createActiveTable} from "./elements/notesTable";
import {createArchivedTable} from "./elements/archivedTable";

const root = document.getElementById('root');

const container = document.createElement('div');
container.className = 'note_container';
root.appendChild(container);

const NotesTable = createActiveTable();
container.appendChild(NotesTable);


const categoryContainer = document.createElement('div');
categoryContainer.className = 'category_container';
root.appendChild(categoryContainer);

const CategoryTable = createArchivedTable();
categoryContainer.appendChild(CategoryTable);