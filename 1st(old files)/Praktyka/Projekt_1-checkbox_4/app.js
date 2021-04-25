const ValidationMessage = (props) => <p>{props.txt}</p>;

//formularz w komponencie z przekazanymi propsami
const OrderForm = (props) => {
  const { submit, change, checked } = props;
  return (
    <form onSubmit={submit}>
      <input type='checkbox' id='age' onChange={change} checked={checked} />
      <label htmlFor='age'>Mam minimum 16lat</label>
      <br />
      <button>Kup bilet</button>
    </form>
  );
};

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
    //blokuje przeładowanie strony
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt='Zapraszam na film' />;
      } else {
        return <ValidationMessage txt='Nie możesz obejrzeć tego filmu' />;
      }
    } else {
      return null;
    }
  };

  render() {
    //destrukturyzacja
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        {/* komponent formularza i przekazanie do niego propsów */}
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
