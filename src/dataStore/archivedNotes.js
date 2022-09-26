import {Categories} from "./noteList";
import {getActiveNotesByCategory, getArchivedNotesByCategory} from "../helpers/getCountByCategories";

export const createArchivedNotes = (currentData) => {
  let archivedNotes = [];

  Object.keys(Categories).forEach((items) => {
    getArchivedNotesByCategory(Categories[items], currentData) !== 0 ?
    archivedNotes.push({
      id: Math.random(),
      category: Categories[items],
      active: getActiveNotesByCategory(Categories[items], currentData),
      archived: getArchivedNotesByCategory(Categories[items], currentData),
    }) : null;
  });

  return archivedNotes;
}