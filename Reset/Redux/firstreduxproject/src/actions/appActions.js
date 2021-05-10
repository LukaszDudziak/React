export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

//przykład akcji
const addRate = ({ author, comment, rate }) => ({
  type: ADD,
  payload: {
    id: Math.floor(Math.random() * 1000),
    author,
    comment,
    rate,
  },
});

//usunięcie po wyszukanym id
const deleteRate = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});

const editRate = ({ id, author, comment, rate }) => ({
  type: EDIT,
  payload: {
    id,
    author,
    comment,
    rate,
  },
});
