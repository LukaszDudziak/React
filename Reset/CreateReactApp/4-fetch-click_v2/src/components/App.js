import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
  };

  //pobranie danych z api
  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
      //jeśli respons jest ok, to zwróć go i przechodzimy dalej
      .then((response) => {
        if (response.ok) {
          return response;
        }
        // przechwyć błąd, czyli uruchom .catch
        throw Error(response.status);
      })
      //wyodrębnienie obiektu json z promisa
      .then((response) => response.json())
      //obsłużenie obiektu json przez dodanie obiektu do listy
      .then((data) => {
        const user = data.results;
        this.setState((prevState) => ({
          //dodanie obiektów do listy
          users: prevState.users.concat(user),
        }));
      })
      //obsłuż przechwycony błąd
      .catch((error) => console.log(error));
  };

  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {/* uruchomienie komponentu kiedy jest coś w liście */}
        {users.length > 0 && <UsersList users={users} />}
      </div>
    );
  }
}

export default App;
