import {createActiveTable} from "./elements/notesTable";
import {createArchivedTable} from "./elements/archivedTable";
import './styles.css';
import {mockData} from "./dataStore/noteList";
import {addButtonsListeners, createNotesListener} from "./helpers/eventListeners";

function onPageLoaded() {
  const root = document.getElementById('root');
  root.className = "general_container";

  //TABLE 1
  const container = document.createElement('div');
  container.classList.add("note_container");
  root.appendChild(container);
  const NotesTable = createActiveTable(mockData);
  container.appendChild(NotesTable);


  //Button Add Notes
  const addBtnCnt = document.createElement('div');
  addBtnCnt.classList.add("add_container");
  root.appendChild(addBtnCnt);
  const addBtn = document.createElement('button');
  addBtn.id = 'createNewNotes';
  addBtn.innerText = 'Create Notes';
  addBtnCnt.appendChild(addBtn);


  // TABLE 2
  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add("category_container");
  root.appendChild(categoryContainer);
  const CategoryTable = createArchivedTable(mockData);
  categoryContainer.appendChild(CategoryTable);


  createNotesListener();
  addButtonsListeners();
}
document.addEventListener("DOMContentLoaded", onPageLoaded);