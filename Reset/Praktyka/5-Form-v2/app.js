class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "2",
  };

  //metoda do obsługi wszystkich zmian z pomocą dodatkowego propa elementów formularza "name" i sprawdzeniem jakiego typu jest element formularza
  handleChange = (e) => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
            type='text'
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name='isLoved'
            type='checkbox'
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
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
