class Form extends React.Component {
  //obiekt przechowujący zawartość inputa
  state = {
    city: "Londyn",
    text: "",
    isLiked: true,
    number: "2",
  };

  //obsługa całego formularza przy użyciu jednego handlera
  handleChange = (e) => {
    console.log(e.target.type);
    //obsługa gdzie działam na checked
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      //obsługa gdzie działam na value
      this.setState({
        // przekazuje string więc w kwadratowych
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
            //name dla obsługi wszystkich pól jednym handlerem
            name='city'
            // odwołanie do state
            value={this.state.city}
            //obsługa zmiany zachodzi przy pomocy onchange
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
            name='isLiked'
            type='checkbox'
            checked={this.state.isLiked}
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
