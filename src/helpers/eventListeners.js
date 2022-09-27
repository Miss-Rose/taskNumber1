import {addNewItem, archiveAllItem, archiveItem, deleteItem, editItem, removeAllItem} from "./eventHandlers";

export const createHandler = (elem, action, id) => {
  switch (action) {
    case 'edit': elem.addEventListener('click', () => editItem(id)); break;
    case 'delete': elem.addEventListener('click', () => deleteItem(id)); break;
    case 'archive': elem.addEventListener('click', () => archiveItem(id)); break;
  }
}

export const addButtonsListeners = () => {
  const deleteAllBtn = document.querySelector('#deleteAllBtn');
  deleteAllBtn.addEventListener('click', () => removeAllItem());

  const archiveAllBtn = document.querySelector('#archiveAllBtn');
  archiveAllBtn.addEventListener('click', () => archiveAllItem());
}

export const createNotesListener = () => {
  const addBtn = document.querySelector('#createNewNotes');
  addBtn.addEventListener('click', () => addNewItem());
}

export const addCloseBtnListener = () => {
  const closeBtn = document.querySelector('.closeBtn');
  const modalWindow = document.querySelector('#modalWindow');
  closeBtn.addEventListener('click', () => {
    modalWindow.parentNode.removeChild(modalWindow);
  });
}
