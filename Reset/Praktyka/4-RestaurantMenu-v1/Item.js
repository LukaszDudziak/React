const Item = (props) => (
  <li
    //przekazanie styli w wyrażeniu, w którym przekazane są obiekty, zależnie od ?
    // style={props.active ? { fontWeight: "bold" } : { color: "gray" }}

    //przypisanie klasy css zależnie od ?
    className={props.active ? "enabled" : "disabled"}
    //przypisanie metody z 2. poziomów wyżej, wywołanie jej z przekazaniem id klikniętego elementu
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
);
