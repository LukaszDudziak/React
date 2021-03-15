class ShoppingList extends React.Component {
  state = {
    item1: "ogórki",
    item2: "sok",
    item3: "cziperki",
  };

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList name={this.state.item1} example={2 + 2} />
          <ItemList name={this.state.item2} />
          <ItemList name={this.state.item3} />
        </ul>
      </>
    );
  }
}

// const ItemList = (props) => {
//   return (
//     <li>
//       {props.name} - {props.example}
//     </li>
//   );
// };

class ItemList extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.example}
      </li>
    );
  }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
