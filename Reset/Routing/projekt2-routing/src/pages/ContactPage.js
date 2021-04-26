import React, { Component } from "react";
import { Prompt } from "react-router-dom";

import "../styles/ContactPage.css";
class ContactPage extends Component {
  state = {
    value: "",
    //do obsługi zamiast prompta w handlerze
    isEmpty: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
      });
    }
  };

  render() {
    return (
      <div className='contact'>
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do mnie</h3>
          <textarea
            placeholder='Wpisz wiadomość...'
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        {/* można to zrobić prościej robiąc when z samym value */}
        <Prompt
          when={!this.state.isEmpty}
          message='Masz niewypełniony form, czy na pewno chcesz opuścić tę stronę?'
        />
      </div>
    );
  }
}

export default ContactPage;
