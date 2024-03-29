// const Dollars = (props) => (
//   <div>
//     Wartość w dolarach:{" "}
//     {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}{" "}
//   </div>
// );
// const Euros = (props) => (
//   <div>
//     Wartość w euro:{" "}
//     {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}{" "}
//   </div>
// );

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

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
      ratioDollar: 3.6,
      ratioEuro: 4.2,
    });
  };
  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;
    return (
      <div className='app'>
        <label>
          <input type='number' value={amount} onChange={this.handleChange} />
        </label>
        {/* <Dollars cash={amount} ratio={ratioDollar} /> */}
        {/* <Euros cash={amount} ratio={ratioEuro} /> */}
        <Cash cash={amount} ratio={ratioEuro} title='Wartość w euro: ' />
        <Cash cash={amount} ratio={ratioDollar} title='Wartość w dolarach: ' />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
