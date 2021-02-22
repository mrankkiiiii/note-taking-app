import React, { useState } from "react";
import AddNotesModel from "./AddNoteModel";
import AllNotes from "./AllNotes";
import { Button } from "react-bootstrap";
import "../App.css";
function App() {
  const [isaddModelOpen, setIsaddModelOpen] = useState(false);
  const handleClose = () => setIsaddModelOpen(false);
  const handleShow = () => setIsaddModelOpen(true);
  return (
    <div className="App">
      <div className="left">
        <Button onClick={handleShow}>
          <i className="fas fa-plus-circle"></i>
        </Button>
      </div>

      <AddNotesModel
        handleClose={handleClose}
        handleShow={handleShow}
        isaddModelOpen={isaddModelOpen}
      />
      <div className="right">
        <AllNotes />
      </div>
    </div>
  );
}

export default App;
