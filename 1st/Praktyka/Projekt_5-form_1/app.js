class Form extends React.Component {
  //obiekt przechowujący zawartość inputa
  state = {
    city: "Londyn",
    text: "",
    isLiked: true,
    number: "2",
  };

  //metoda zmieniająca stan
  handleCityChange = (e) => {
    this.setState({
      //zmiana w handlerze zachodzi za pomocą event.target.value
      city: e.target.value,
    });
  };
  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleIsLikedChange = (e) => {
    this.setState({
      isLiked: e.target.checked,
    });
  };

  handleVisitsNumberChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            // odwołanie do state
            value={this.state.city}
            //obsługa zmiany zachodzi przy pomocy onchange
            onChange={this.handleCityChange}
            type='text'
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            type='checkbox'
            checked={this.state.isLiked}
            onChange={this.handleIsLikedChange}
          />
        </label>
        <label>
          Ile razy byliście w tym mieście?
          <select
            value={this.state.number}
            onChange={this.handleVisitsNumberChange.bind(this)}
          >
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='more'>więcej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
