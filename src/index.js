import {createActiveTable} from "./elements/notesTable";
import {createArchivedTable} from "./elements/archivedTable";
import './styles.css';
import {mockData} from "./dataStore/noteList";
import {removeAllItem, archiveAllItem} from "./helpers/createHandler";

function onPageLoaded() {
  const root = document.getElementById('root');
  root.className = "general_container";

  //TABLE 1
  const container = document.createElement('div');
  container.classList.add("note_container");
  root.appendChild(container);

  const NotesTable = createActiveTable(mockData);
  container.appendChild(NotesTable);


  // TABLE 2
  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add("category_container");
  root.appendChild(categoryContainer);

  const CategoryTable = createArchivedTable(mockData);
  categoryContainer.appendChild(CategoryTable);


  // button listeners
  const deleteAllBtn = document.querySelector('#deleteAllBtn');
  deleteAllBtn.addEventListener('click', () => removeAllItem());
  const archiveAllBtn = document.querySelector('#archiveAllBtn');
  archiveAllBtn.addEventListener('click', () => archiveAllItem())
}

document.addEventListener("DOMContentLoaded", onPageLoaded);