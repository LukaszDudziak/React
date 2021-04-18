import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  //zgodnie z dokumentacją jest to najlepsze miejsce na wywołanie pobierania danych, w konstruktorze się też da, ale nie jest polecane
  componentDidMount() {
    //tworzę intancje obiektu xhr
    const xhr = new XMLHttpRequest();
    //otwarcie połączenia metoda|adres|async?
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //co ma się wydarzyć w momencie odpowiedzi z serwera? Obsługa statusu przesyłu; zamiast onload można użyć addeventListener z wydarzeniem 'load'
    xhr.onload = () => {
      //w momencie statusu 200 (tj. pozytywny) przy pomocy JSON parsuje dane odebrane z serwera do obiektu JSON
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        //przypisanie danych do swojego state
        this.setState({ users });
      }
    };
    //wysłanie obiektu
    xhr.send();
  }

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.address.city}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default App;
