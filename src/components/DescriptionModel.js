import React from "react";
import { Button, Modal } from "react-bootstrap";

const DescriptionModel = (props) => {
  console.log(props);
  return (
    <div>
      <Modal show={props.isdescriptionOpen} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.description.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowWrap: "anywhere" }}>
          {props.description.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default DescriptionModel;
