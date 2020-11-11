class Message extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        messageIsActive: false,
      });
    //bindowania thisa w konstruktorze
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }
  render() {
    console.log(this.state.messageIsActive);

    const text =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eveniet dolorum similique minima ut placeat.";
    return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p>{text}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
{
  /* <p>{this.state.messageIsActive && text} </p> */
}
