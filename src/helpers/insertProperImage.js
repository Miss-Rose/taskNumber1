import task from "../assets/task.png";
import thought from "../assets/thought.png";
import idea from "../assets/idea.png";
import quote from "../assets/quote.png";

import archivePng from '../assets/archive.png';
import removePng from '../assets/delete.png';
import editPng from '../assets/edit.png';

export const insertProperImage = (filter, elem) => {
      switch (filter) {
      case 'Task' : elem.innerHTML = `<img src=${task} alt="task">`; break;
      case 'Random Thought' : elem.innerHTML = `<img src=${thought} alt="thought">`; break;
      case 'Idea' : elem.innerHTML = `<img src=${idea} alt="idea">`; break;
      case 'Quite' : elem.innerHTML = `<img src=${quote} alt="quote">`; break;
      case 'edit' : elem.innerHTML = `<img src=${editPng} alt=${filter}>`; break;
      case 'delete' : elem.innerHTML = `<img src=${removePng} alt=${filter}>`; break;
      case 'archive' : elem.innerHTML = `<img src=${archivePng} alt=${filter}>`; break;
    }
}