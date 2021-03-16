class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    const text =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet eaque a explicabo id molestiae atque rem at et, adipisci repellat labore eum quam temporibus maxime, officiis mollitia iusto voluptas.";

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
  /* <p>{this.state.messageIsActive && text}</p> */
}
