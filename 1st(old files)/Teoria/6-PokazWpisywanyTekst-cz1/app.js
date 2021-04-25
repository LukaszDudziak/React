class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleButtonClick = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder='wpisz...'
          onChange={this.handleInputChange.bind(this)}
          type='text'
        />
        <button onClick={this.handleButtonClick}>Reset</button>
        <h1 className='title'>{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
