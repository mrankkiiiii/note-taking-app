const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

export const addNote = (data) => ({
  type: ADD_NOTE,
  data,
  id: Math.random(),
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
});

export const editNote = (data) => ({
  type: EDIT_NOTE,
  data,
});
