import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/index";
const submitHandler = (props, event) => {
  event.preventDefault();
  let obj = {
    title: event.target.title.value,
    description: event.target.description.value,
    date: event.target.date.value,
  };
  props.dispatch(addNote(obj));
  event.target.title.value = "";
  event.target.description.value = "";
  event.target.date.value = "";
};
const AddNoteModel = (props) => {
  return (
    <form onSubmit={(event) => submitHandler(props, event)}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="description" name="description" />
      <input type="date" name="date" />
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddNoteModel);
