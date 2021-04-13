class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("wywołana metoda konstruktora");
  }

  componentWillMount() {
    console.log("wywołana metoda componentWillMount");
  }

  componentDidMount() {
    console.log("wywołana metoda componentDidMount");
    this.setState({
      number: 1,
    });
  }

  componentDidUpdate() {
    console.log("wywołana metoda componentDidUpdate");
  }
  render() {
    console.log("wywołana metoda render");
    return (
      <>
        <p>lifecycle - montowanie komponentu</p>
        <Child />
      </>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log("wywołana metoda componentDidMount w komponentcie Child");
    // this.setState({
    //   number: 1,
    // });
  }

  render() {
    console.log("wywołana metoda render w komponencie child");
    return <h1>Dziecko</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
