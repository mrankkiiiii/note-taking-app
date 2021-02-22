import "./App.css";
import AddNotesModel from "./components/AddNoteModel";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <div className="App">
      <AddNotesModel />
      <AllNotes />
    </div>
  );
}

export default App;
