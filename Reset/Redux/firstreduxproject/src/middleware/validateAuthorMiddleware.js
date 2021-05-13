import { ADD } from "../actions/appActions";

export const validateAuthorMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log("Jesteśmy w middlewarze");

    if (action.type === ADD && !action.payload.author.length) {
      console.warn("Brak imienia i nazwiska");
      return;
    }

    next(action);
  };
