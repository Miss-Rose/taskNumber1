import {Categories, mockData} from "./noteList";
import {getActiveNotesByCategory, getArchivedNotesByCategory} from "../helpers/getCountByCategories";

const archivedNotes = [];

export const createArchivedNotes = () => {

  Object.keys(Categories).forEach((items) => {
    archivedNotes.push({
      id: Math.random(),
      category: Categories[items],
      active: getActiveNotesByCategory(Categories[items], mockData),
      archived: getArchivedNotesByCategory(Categories[items], mockData),
    });
  });

  return archivedNotes;
}