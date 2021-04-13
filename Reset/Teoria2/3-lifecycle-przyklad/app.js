class App extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    console.log("App zamontowana");
  }

  componentDidUpdate() {
    console.log("App aktualizowana");
  }

  render() {
    console.log("App render");

    return (
      <>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Przełącz
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("Child1 zamontowana");
  }

  componentDidUpdate() {
    console.log("Child1 aktualizowana");
  }
  render() {
    console.log("Child1 render");
    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("Child2 zamontowana");
  }

  componentDidUpdate() {
    console.log("Child2 aktualizowana");
  }

  componentWillUnmount() {
    console.log("Child2 odmontowany");
  }
  render() {
    console.log("Child2 render");
    return <div>Komponent Child2 zamontowany</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
