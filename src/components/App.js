import React, { useState } from "react";
import AddNotesModel from "./AddNoteModel";
import AllNotes from "./AllNotes";
function App() {
  const [isaddModelOpen, setIsaddModelOpen] = useState(false);
  const handleClose = () => setIsaddModelOpen(false);
  const handleShow = () => setIsaddModelOpen(true);
  return (
    <div className="main-app">
      <h1>Note App</h1>
      <div className="App">
        <div className="left">
          <p id="add-btn" onClick={handleShow} title="Click to add note">
            <i className="fas fa-plus-circle"></i>
            <p id="add-btn-txt">Add Note</p>
          </p>
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
    </div>
  );
}

export default App;
