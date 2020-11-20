// i odebranie ich
const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    {
      /* przekazanie danych do komponentu przy pomocy propsów i przekazanie klucza */
    }
    const items = this.state.items.map((item) => (
      <Item key={item} content={item} />
    ));
    return <ul>{items}</ul>;
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
