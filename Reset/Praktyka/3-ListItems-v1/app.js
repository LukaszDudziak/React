class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    return (
      <ul>
        {/* 1 - element, 2 - index elementu */}
        {this.state.items.map((item, id) => (
          <li key={id}>{`owoc: ${item}`}</li>
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<ListItems />, document.getElementById("root"));
