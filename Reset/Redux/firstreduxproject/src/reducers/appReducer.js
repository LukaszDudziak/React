import { ADD, DELETE, EDIT } from "../actions/appActions";

//reducer używa przygotowanych wcześniej akcji
export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map((currentElement) => {
        if (currentElement.id !== action.payload.id) {
          return currentElement;
        }
        const { author, comment, rate } = action.payload;

        return {
          author: author,
          comment: comment,
          id: rate.id,
          rate: rate,
        };
      });
    case DELETE:
      return state.filter(
        (currentStateElement) => currentStateElement.id !== action.payload.id
      );

    default:
      console.log("Brak tego typu akcji");
      return state;
  }
};
