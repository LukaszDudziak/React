const ValidationMessage = (props) => <p>{props.txt}</p>;

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    return isConfirmed ? (
      <ValidationMessage txt='Możesz obejrzeć film. Zapraszamy!' />
    ) : (
      <ValidationMessage txt='Nie możesz obejrzeć tego filmu.' />
    );
  } else {
    return null;
  }
};

//komponent formularza. pamiętaj, że w strzałkowej, używając od razu ( oznacza to samo co return(
const OrderForm = (props) => (
  <form onSubmit={props.submit}>
    <input
      type='checkbox'
      id='age'
      onChange={props.change}
      checked={props.checked}
    />
    <label htmlFor='age'>Mam co najmniej 16 lat</label>
    <br />
    <button>Kup bilet</button>
  </form>
);

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        {/* wywołanie komponentu formularza z przekazaniem propsów (zwróć uwagę na nazwę propsów i jak są wywoływane w komponencie) */}
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
