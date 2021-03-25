class FortuneTeller extends React.Component {
  state = {
    number: 0,
    newTell: "",
  };

  //lista obiektów wróżb
  tells = [
    { id: 1, content: "Pierwsza wróżba" },
    { id: 2, content: "Druga wróżba" },
    { id: 3, content: "Trzecia wróżba" },
  ];

  //losowanie numeru pod buttonem
  handleRandomButton = () => {
    let randomNumber = Math.floor(Math.random() * this.tells.length) + 1;
    this.setState({
      number: randomNumber,
    });
  };

  //ustawianie stanu
  handleChange = (e) => {
    this.setState({
      newTell: e.target.value,
    });
  };

  handleAddButton = () => {
    //utworzenie nowego obiektu
    const newTell = { id: this.tells.length + 1, content: this.state.newTell };
    //wepchnięcie w tablice
    this.tells.push(newTell);
    //reset stanu inputa
    this.setState({
      newTell: "",
    });
  };

  render() {
    //przypisanie numeru do odpowiedniej wróżby
    let activeTell;
    this.tells.forEach((tell) => {
      if (tell.id === this.state.number) {
        activeTell = tell.content;
        return activeTell;
      }
    });

    return (
      <>
        <button onClick={this.handleRandomButton}>Wylosuj wróżbę</button>
        <br />
        <input
          type='text'
          //o wartości decyduje element state
          value={this.state.newTell}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddButton}>Dodaj wróżbę</button>
        <h1>{activeTell}</h1>
      </>
    );
  }
}

ReactDOM.render(<FortuneTeller />, document.getElementById("root"));
