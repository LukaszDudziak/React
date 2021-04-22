import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,
    message: "",

    //stan błędów
    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  //utworzenie powiadomieć
  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć 8 znaków",
    accept_incorrect: "Zgoda nie potwierdzona",
  };

  handleChange = (e) => {
    //określa z którego inputa leci wartość
    const name = e.target.name;
    //określa jakiego typu jest input z którego idzie info
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      //podaje samą wartość
      const value = e.target.value;
      //uniwersalna obsługa wpisywania w różne inputy formularz
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      //obsługa checkboxa
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      // reset wartości po submicie jeśli wszystko poszło ok
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,
        message: "Formularz został wysłany",

        //stan błędów
        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        },
      });
      console.log("formularz wysłany");
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept,
        },
      });
    }
  };

  //obsługa walidacji formularza
  formValidation = () => {
    //true - ok
    //false - jest źle
    let username = false;
    let email = false;
    let pass = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass.length === 8) {
      pass = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && pass && accept) {
      correct = true;
    }
    return {
      correct,
      username,
      email,
      pass,
      accept,
    };
  };

  //usunięcie potwierdzenia formularza po czasie
  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        3000
      );
    }
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor='user'>
            Twoje imie:
            <input
              type='text'
              id='user'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            {/* wyświetlanie warunkowe wiadomości o błędzie */}
            {this.state.errors.username && (
              <span>{this.messages.username_incorrect}</span>
            )}
          </label>

          <label htmlFor='email'>
            Twój adres:
            <input
              type='email'
              id='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span>{this.messages.email_incorrect}</span>
            )}
          </label>

          <label htmlFor='password'>
            Twoje hasło:
            <input
              type='password'
              id='password'
              name='pass'
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {this.state.errors.pass && (
              <span>{this.messages.password_incorrect}</span>
            )}
          </label>

          <label htmlFor='accept'>
            <input
              type='checkbox'
              name='accept'
              id='accept'
              checked={this.state.accept}
              onChange={this.handleChange}
            />{" "}
            Wyrażam zgodę
          </label>
          {this.state.errors.accept && (
            <span>{this.messages.accept_incorrect}</span>
          )}

          <button>Zapisz formularz</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}
export default App;
