import React from "react";

const ButtonFetchUsers = (props) => {
  return (
    <button
      style={{
        margin: "20px",
        padding: "10px 20px",
        border: "2px solid black",
        backgroundColor: "white",
      }}
      onClick={props.click}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
