/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class FortuneTeller extends React.Component {
  state = {
    fortunes: ["wróżba 1", "wróżba 2", "wróżba 3"],
    displayedFortune: "",
    inputFortune: "",
  };

  //obsługa wyświetlania wróżb
  handleShowFortune = () => {
    let randomNumber = Math.floor(Math.random() * this.state.fortunes.length);
    console.log(typeof this.state.fortunes);
    this.setState({
      displayedFortune: this.state.fortunes[randomNumber],
    });
  };

  //obsługa inputa
  handleInputChange = (e) => {
    this.setState({
      inputFortune: e.target.value,
    });
  };

  //obsługa dodawania wróżby
  handleAddFortune = () => {
    //sprawdzenie czy input nie jest pusty
    if (this.state.inputFortune === "") return;
    //kopia tablicy i wbicie zawratości inputa do tablicy
    // const fortunes = [...this.state.fortunes];
    // fortunes.push(this.state.inputFortune);

    //lub użycie concata
    const fortunes = this.state.fortunes.concat(this.state.inputFortune);

    this.setState({
      fortunes,
      inputFortune: "",
    });
  };

  render() {
    const { inputFortune, displayedFortune } = this.state;
    return (
      <>
        <button onClick={this.handleShowFortune}>Zobacz wróżbę</button>
        <br />
        <input
          type='text'
          value={inputFortune}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddFortune}>Dodaj wróżbę</button>
        {displayedFortune ? <h1>{displayedFortune}</h1> : ""}
      </>
    );
  }
}

ReactDOM.render(<FortuneTeller />, document.getElementById("root"));
