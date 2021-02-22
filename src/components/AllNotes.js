import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import EditNoteModel from "./EditNoteModel";
const AllNotes = (props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [note, setNote] = useState();
  const handleClose = () => setIsEditModalOpen(false);
  const handleShow = () => setIsEditModalOpen(true);

  const editHandler = (e, note) => {
    e.preventDefault();
    setNote(note);
    setIsEditModalOpen(!isEditModalOpen);
  };
  return (
    <div>
      {isEditModalOpen && (
        <EditNoteModel
          handleClose={handleClose}
          handleShow={handleShow}
          note={note}
          isEditModalOpen={isEditModalOpen}
        />
      )}
      <ul>
        {props.notes.map((note, index) => (
          <li key={note.id}>
            {note.title}
            {note.description}
            {note.date}
            <Button onClick={(e) => editHandler(e, note)}>
              <i className="fas fa-pencil-alt"></i>
            </Button>
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