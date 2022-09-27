import {mockData, updateState} from "../dataStore/noteList";
import {openModal} from "../elements/modalWindow";
import {addCloseBtnListener} from "./eventListeners";

export const addNewItem = () => {
  const root = document.getElementById('root');
  root.appendChild(openModal());
  addCloseBtnListener();
}

export const editItem = (id) => {
  const root = document.getElementById('root');
  root.appendChild(openModal());
  addCloseBtnListener();
}

export const deleteItem = (id) => {
  const newArr = mockData.filter(listEl => listEl.id !== id);
  updateState(newArr);
}

export const removeAllItem = () => {
  const newArr = mockData.filter(listEl => listEl.active !== true);
  updateState(newArr);
}

export const archiveItem = (id) => {
  const newArr = mockData.map(listEl => {
    if (listEl.id === id) {
      return { ...listEl, active : !listEl.active };
    } else return listEl;
  });
  updateState(newArr);
}

export const archiveAllItem = () => {
  const newArr = mockData.map(listEl => {
    if (listEl.active === true) {
      return {...listEl, active : !listEl.active};
    }else return listEl;
  });
  updateState(newArr);
}
