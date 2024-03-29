class Form extends React.Component {
  //state w którym trzymam wartości
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "2",
  };

  //handlery do obsługi zmian w polach formularza
  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleIsLovedChange = (e) => {
    this.setState({
      isLoved: e.target.checked,
    });
  };

  handleVisitsNumberChange(e) {
    this.setState({
      number: event.target.value,
    });
  }

  //elementy formularza z onChange, które obsługują pola
  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            value={this.state.city}
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
            checked={this.state.isLoved}
            onChange={this.handleIsLovedChange}
          />
        </label>
        <br />
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
