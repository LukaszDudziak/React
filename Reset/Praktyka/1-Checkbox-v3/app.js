// funkcja wyodrębniona poza komponent
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

//komponent utworzony z dwóch i z przekazanym propsem
const ValidationMessage = (props) => <p>{props.txt}</p>;

// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

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

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     return this.state.isConfirmed ? (
  //       <ValidationMessage txt='Możesz obejrzeć film. Zapraszamy!' />
  //     ) : (
  //       <ValidationMessage txt='Nie możesz obejrzeć tego filmu.' />
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    //destrukturyzacja
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type='checkbox'
            id='age'
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
          />
          <label htmlFor='age'>Mam co najmniej 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {/* przekazanie argumentów do metody poza komponentem */}
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
