const initialState = {
  data: [],
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {};
    case "DELETE_NOTE":
      return {};
    case "EDIT_NOTE":
      return {};
      default: 
      return state;
  }
};

export default notes;
