import {createActiveTable} from "./elements/notesTable";
import {createArchivedTable} from "./elements/archivedTable";
import styles from './styles.css';
import {mockData} from "./dataStore/noteList";

function onPageLoaded() {
  const root = document.getElementById('root');
  root.className = styles["general_container"];

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
}

document.addEventListener("DOMContentLoaded", onPageLoaded);