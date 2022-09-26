export const getActiveNotesByCategory = (category, object) => {
    return object.filter((note) => note.active && note.category === category).length;
}

export const getArchivedNotesByCategory = (category, object) => {
  return object.filter((note) => !note.active && note.category === category).length;
}