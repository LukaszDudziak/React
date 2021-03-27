const Person = (props) => {
  return (
    <>
      <li>{props.name}</li>
      <button onClick={() => props.handleButton(props.id)}>Usuń</button>
    </>
  );
};

class List extends React.Component {
  state = {
    peopleList: [
      {
        id: 0,
        name: "Jan K.",
      },
      {
        id: 1,
        name: "Piotr C.",
      },
      {
        id: 2,
        name: "Marysia W.",
      },
      {
        id: 3,
        name: "John S.",
      },
    ],
  };

  handleButton = (id) => {
    //kopia, żeby nie działać na state (wszystkie 3 opcje są prawidłowe)
    const peopleList = [...this.state.peopleList];
    // const peopleList = Array.from(this.state.peopleList);
    // const peopleList = this.state.peopleList.slice();

    //znajduje konkretny index z zaktualizowanej listy osób, po id konkretnego elementu
    const toRemove = peopleList.findIndex((person) => person.id === id);
    //usuwam osobę na podstawie zaktualizowanego indexu
    peopleList.splice(toRemove, 1);
    //zmiana stanu
    this.setState({
      peopleList,
    });
  };

  render() {
    //tworzenie obiektów Person z przekazanym z rodzica stejtem i handlerem
    const people = this.state.peopleList.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        handleButton={this.handleButton}
      />
    ));
    //wywołanie listy
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
