import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null,
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
      //obsłużenie obiektu json
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      //obsłuż przechwycony błąd
      .catch((error) => console.log(error));
  };

  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {/* uruchomienie komponentu kiedy jest coś w liście w przypadku nulla */}
        {users && <UsersList users={users} />}
      </div>
    );
  }
}

export default App;
