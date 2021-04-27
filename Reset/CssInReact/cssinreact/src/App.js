import React, { Component } from "react";
import Text from "./Text";
import "./App.css";
import "./Text.css";

class App extends Component {
  state = {
    active: false,
    underline: false,
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    // const btn_off = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "white",
    // };

    // const btn_on = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "cadetblue",
    //   color: "white",
    // };

    //Pierwsza opcja - obiekt z dwoma opcjami

    // const styles = {
    //   btn_off: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "white",
    //   },

    //   btn_on: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "cadetblue",
    //     color: "white",
    //   },
    // };

    //druga opcja - obiekt ogólny z warunkową edycją
    let btn = {
      border: "2px solid black",
      padding: "10px 20px",
      fontFamily: "arial",
      fontSize: 30,
      display: "block",
      margin: "20px auto",
      backgroundColor: "white",
    };

    if (this.state.active) {
      btn.backgroundColor = "cadetblue";
      btn.color = "white";
    }

    // let classes = "";
    // if (this.state.underline) {
    //   classes += " line";
    // }

    const text = "Witaj na stronie";
    // if (text.length > 10) classes += " big";

    //wrzucanie klas w postaci listy
    const classes = ["one"];
    if (this.state.underline) classes.push("line");
    if (text.length > 10) classes.push("big");

    return (
      <div
        className='app'
        onClick={() => {
          this.setState({ underline: !this.state.underline });
        }}
      >
        <button style={btn} onClick={this.handleClick}>
          {this.state.active ? "Wyłącz" : "Włącz"}
        </button>

        <h1 className={classes.join(" ")}>{text}</h1>
        <Text />
      </div>
    );
  }
}

export default App;
