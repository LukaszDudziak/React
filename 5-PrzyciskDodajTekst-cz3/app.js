// Nowy komponent wyświetlenie cyfr
// losowanie liczby
// Wyświetlenie nazwy przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state.

class App extends React.Component {
  state = {
    text: "",
    //state
    btn: "uruchom",
  };

  handleClick = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number,
    });
  };

  render() {
    //zmienna
    const btnName = "utwórz liczbę";
    return (
      <>
        <button onClick={this.handleClick}>
          {this.props.btnTitle}|{btnName}|{this.state.btn}
        </button>
        <PanelResult text={this.state.text} />
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};
//z propsów
ReactDOM.render(
  <App btnTitle='dodaj cyfrę' />,
  document.getElementById("root")
);
