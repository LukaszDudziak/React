const Cash = (props) => (
  <div>
    {props.title}
    {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}{" "}
  </div>
);

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  };

  currencies = [
    { id: 1, name: "dollar", ratio: 3.6, title: "Wartość w dolarach " },
    { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euro " },
    { id: 3, name: "pound", ratio: 4.5, title: "Wartość w funtach " },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={this.state.amount}
      />
    ));
    return (
      <div className='app'>
        <label>
          <input
            type='number'
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {/* wywołanie z pomocą zmapowanej tablicy komponentów */}
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
