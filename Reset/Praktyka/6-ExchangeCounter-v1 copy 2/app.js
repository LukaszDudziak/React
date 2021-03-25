const Cash = (props) => (
  <div>
    {props.title}
    {props.cash <= 0
      ? ""
      : ((props.cash / props.ratio) * props.price).toFixed(2)}{" "}
  </div>
);

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    //ustawienie def wartości
    product: "electricity",
  };

  static defaultProps = {
    currencies: [
      { id: 0, name: "zloty", ratio: 1, title: "Wartość w złotówkach " },
      { id: 1, name: "dollar", ratio: 3.6, title: "Wartość w dolarach " },
      { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euro " },
      { id: 3, name: "pound", ratio: 4.5, title: "Wartość w funtach " },
    ],

    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  insertSuffix(select) {
    if (select === "electricity") {
      return <em> kWh</em>;
    } else if (select === "gas") {
      return <em> litrów</em>;
    } else if (select === "oranges") {
      return <em> kilogramów</em>;
    } else {
      return null;
    }
  }

  selectPrice(select) {
    //wbicie nazwy w ścieżkę wywołania
    return this.props.prices[select];
  }

  render() {
    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={this.state.amount}
        // zwrócenie odpowiedniej ceny względem wybranego elementu
        price={this.selectPrice(this.state.product)}
      />
    ));
    return (
      <div className='app'>
        <label>
          Wybierz produkt:
          <select value={this.state.product} onChange={this.handleSelect}>
            <option value='electricity'>prąd</option>
            <option value='gas'>waha</option>
            <option value='oranges'>pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type='number'
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {/* dodanie suffixu do przelicznika */}
          {this.insertSuffix(this.state.product)}
        </label>
        {/* wywołanie z pomocą zmapowanej tablicy komponentów */}
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
