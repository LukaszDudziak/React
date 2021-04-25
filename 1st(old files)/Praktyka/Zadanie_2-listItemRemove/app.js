// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

//komponent dziecko
const Person = (props) => {
  //wyciągnięcie id, które później będzie można przekazać do handlera usuwania elementu
  const id = props.content.id;
  //utworzenie elementu na podstawie przekazanego obiektu tablicy i ustawienie handlera do usuwania
  return (
    <div>
      <li>
        {props.content.name}
        <button onClick={() => props.handler(id)}>Usuń</button>
      </li>
    </div>
  );
};

//komponent rodzic
class List extends React.Component {
  state = {
    list: [
      { id: 0, name: "Jan K." },
      { id: 1, name: "Piotr C." },
      { id: 2, name: "Marysia W." },
      { id: 3, name: "John C." },
    ],
  };
  //1
  // // metoda obsługi buttona usuwania
  // handleRemovePerson = (id) => {
  //   const list = [...this.state.list];
  //   //index sprawdza czy index danego elementu zgadza się z id danego elementu, dzięki czemu można usuwać właściwe elementy zależnie od aktualnego stanu listy
  //   const index = list.findIndex((person) => person.id === id);
  //   list.splice(index, 1);
  //   this.setState({
  //     list,
  //   });

  handleRemovePerson(name) {
    //kopiowanie tablicy, nie referencji
    // let people = Array.from(this.state.list);
    //tutaj również tworzenie kopii
    let list = this.state.list.slice();
    //usuwa element na podstawie wyfiltrowania wszystkich innych elementów poza kliknięciem i utworzeniem z nich nowej tablicy
    list = list.filter((person) => name !== person.name);
    this.setState({
      list,
    });
  }

  render() {
    //1
    // //wywołanie komponentów person na podst. tablicy ze state, przekazany obiekt jak i metoda obsługi usuwania
    // const list = this.state.list.map((person) => (
    //   <Person
    //     key={person.id}
    //     content={person}
    //     handler={this.handleRemovePerson}
    //   />
    // ));

    //wywołanie komponentów person na podst. tablicy ze state, przekazany obiekt jak i metoda obsługi usuwania
    const list = this.state.list.map((person) => (
      <Person
        key={person.id}
        content={person}
        handler={this.handleRemovePerson.bind(this, person.name)}
      />
    ));

    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
