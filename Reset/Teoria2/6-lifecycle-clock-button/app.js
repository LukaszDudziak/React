class App extends React.Component {
  state = {
    active: true,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  render() {
    return (
      <>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class Clock extends React.Component {
  interval = "";

  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({ time });
  };

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  //bez tego react będzie sypał warningami o braku obsługi ubitych komponentów
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours > 9 ? hours : `0${hours}`}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
