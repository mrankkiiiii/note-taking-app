import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../actions/index";
import { Button, Modal, Form } from "react-bootstrap";

const EditNoteModel = (props) => {
  const [title, setTitle] = useState(props.note.title);
  const [description, setDescription] = useState(props.note.description);
  const [date, setDate] = useState(props.note.date);
  const [noteID, setNoteID] = useState(props.note.id);
  const submitHandler = (event) => {
    event.preventDefault();
    let obj = {
      title,
      description,
      date,
      id: noteID,
    };
    props.dispatch(editNote(obj));
    props.handleClose();
    setTitle("");
    setDescription("");
    setDate("");
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    props.dispatch(deleteNote(noteID));
    props.handleClose();
  };
  return (
    <div>
      <Modal show={props.isEditModalOpen} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="title">Title</Form.Label>
              <Form.Control
                id="title"
                name="title"
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="date">Date</Form.Label>
              <Form.Control
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                type="date"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteHandler}>
            <i className="fas fa-trash-alt"></i>
            Delete
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => submitHandler(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});
export default connect(mapStateToProps)(EditNoteModel);
