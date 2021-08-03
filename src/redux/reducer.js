const value = 0;

export const reduxReducer = (state = value, { type }) => {
  switch (type) {
    case "add_count":
      return state + 1;
    case "remove_decrement":
      return state - 1;
    default:
      return state;
  }
};
