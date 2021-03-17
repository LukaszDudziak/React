const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      //informacja podana w momencie zmiany checkboxa
      isConfirmed: !this.state.isConfirmed,
    });
  };

  //metoda wyboru komunikatu
  displayMessage = () => {
    return this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />;
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input
          type='checkbox'
          id='age'
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor='age'>Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
