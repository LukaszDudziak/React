import React from "react";
import "./Word.css";

const Word = (props) => {
  return (
    <li>
      Słowo po angielsku: {props.english}. Tłumaczenie: {props.polish}.
    </li>
  );
};

export default Word;
