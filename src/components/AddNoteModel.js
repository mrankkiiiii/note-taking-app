import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/index";
import { Button, Modal, Form } from "react-bootstrap";

const AddNoteModel = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    let obj = {
      title,
      description,
      date,
    };
    props.dispatch(addNote(obj));
    props.handleClose();
    setTitle("");
    setDescription("");
    setDate("");
  };
  return (
    <div>
      <Modal show={props.isaddModelOpen} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
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
                required
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
                required
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
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => submitHandler(event)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect()(AddNoteModel);
