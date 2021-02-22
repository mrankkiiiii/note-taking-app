import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions/index";
const AllNotes = (props) => {
  return (
    <div>
      <ul>
        {props.notes.map((note, index) => (
          <li key={note.id}>
            {note.title}
            {note.description}
            {note.date}
            <button onClick={()=> props.dispatch(deleteNote(note.id))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: state.notes.data,
});
export default connect(mapStateToProps)(AllNotes);
