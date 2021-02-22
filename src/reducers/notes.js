const initialState = {
  data: [],
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        data: [
          ...state.data,
          {
            ...action.data,
            id: action.id,
          },
        ],
      };
    case "DELETE_NOTE":
      const newData = state.data.filter((note) => note.id !== action.id);
      return {
        ...state,
        data: newData,
      };
    case "EDIT_NOTE":
      return {};
    default:
      return state;
  }
};

export default notes;
