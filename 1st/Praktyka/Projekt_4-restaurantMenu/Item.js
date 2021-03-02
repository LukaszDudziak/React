const Item = (props) => (
  <li
    className={props.active ? "enabled" : "disabled"}
    // style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
);
