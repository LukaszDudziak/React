//metoda poza komponentem
const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt='Zapraszam na film' />;
    } else {
      return <ValidationMessage txt='Nie możesz obejrzeć tego filmu' />;
    }
  } else {
    return null;
  }
};

//jeden komponent z dwóch, przy pomocy propsów
const ValidationMessage = (props) => <p>{props.txt}</p>;

// const PositiveMessage = () => <p>Zapraszam na film</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu</p>;

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

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMessage txt='Zapraszam na film' />;
  //     } else {
  //       return <ValidationMessage txt='Nie możesz obejrzeć tego filmu' />;
  //     }
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
          <label htmlFor='age'>Mam minimum 16lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {/* wywołanie metody i przekazanie arg poza komponentem */}
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
