import {mockData, updateState} from "../dataStore/noteList";
import {createActiveTable} from "../elements/notesTable";

export const editItem = (id) => {
  console.log('editItem', id);
}

export const deleteItem = (id) => {
  const newArr = mockData.filter(listEl => listEl.id !== id);
  updateState(newArr);
  createActiveTable(newArr);

}

export const archiveItem = (id) => {
  console.log('archiveItem', id);
}


export const createHandler = (elem, action, id) => {
  switch (action) {
    case 'edit': elem.addEventListener('click', () => editItem(id)); break;
    case 'delete': elem.addEventListener('click', () => deleteItem(id)); break;
    case 'archive': elem.addEventListener('click', () => archiveItem(id)); break;
  }
}