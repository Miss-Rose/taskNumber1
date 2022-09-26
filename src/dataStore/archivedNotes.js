import {Categories} from "./noteList";
import {getActiveNotesByCategory, getArchivedNotesByCategory} from "../helpers/getCountByCategories";

export const createArchivedNotes = (currentData) => {
  let archivedNotes = [];

  Object.keys(Categories).forEach((items) => {
    archivedNotes.push({
      id: Math.random(),
      category: Categories[items],
      active: getActiveNotesByCategory(Categories[items], currentData),
      archived: getArchivedNotesByCategory(Categories[items], currentData),
    });
  });

  return archivedNotes;
}