import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import EditNoteModel from "./EditNoteModel";
import DescriptionModel from "./DescriptionModel";
const AllNotes = (props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isdescriptionOpen, setIsdescriptionOpen] = useState(false);
  const [note, setNote] = useState();
  const [description, setDescription] = useState();
  const handleClose = () => setIsEditModalOpen(false);
  const handleShow = () => setIsEditModalOpen(true);
  const handleDescriptionClose = () => setIsdescriptionOpen(false);
  const handleDescriptionShow = () => setIsdescriptionOpen(true);

  const editHandler = (e, note) => {
    e.preventDefault();
    setNote(note);
    setIsEditModalOpen(!isEditModalOpen);
  };
  const descriptionHandler = (note) => {
    setDescription(note);
    setIsdescriptionOpen(!isdescriptionOpen);
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
      {isdescriptionOpen && (
        <DescriptionModel
          handleClose={handleDescriptionClose}
          handleShow={handleDescriptionShow}
          description={description}
          isdescriptionOpen={isdescriptionOpen}
        />
      )}
      <ul>
        {props.notes.map((note) => (
          <li key={note.id}>
            <span onClick={() => descriptionHandler(note)}>{note.title}</span>
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
