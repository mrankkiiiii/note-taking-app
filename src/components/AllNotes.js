import React, { useState } from "react";
import { connect } from "react-redux";
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
      {props.notes.length === 0 ? (
        <div style={{textAlign: "center"}}>No pending notes</div>
      ) : (
        <ul>
          {props.notes.map((note) => (
            <li key={note.id}>
              <span
                className="list-icon"
                onClick={(e) => editHandler(e, note)}
                title="Click to edit note"
              >
                <i className="fas fa-check"></i>
              </span>
              <span
                className="title"
                title="Click to view description"
                onClick={() => descriptionHandler(note)}
              >
                {note.title}
              </span>
              <span
                className="edit-btn"
                onClick={(e) => editHandler(e, note)}
                title="Click to edit note"
              >
                <i className="fas fa-pencil-alt"></i>
              </span>
              <br />
              <p id="date-txt"> {note.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: state.notes.data,
});
export default connect(mapStateToProps)(AllNotes);
