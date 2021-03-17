const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      // żeby zmiana w checkboxie wymagała ponownej walidacji buttonem
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    //blokada przeładowania strony
    e.preventDefault();
    //render tylko w momencie gdy jest zmiana stanu z false
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    //żaden komunikat nie jest wyświetlany, jeśli nie ma submita
    if (this.state.isFormSubmitted) {
      return this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />;
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type='checkbox'
            id='age'
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor='age'>Mam co najmniej 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
