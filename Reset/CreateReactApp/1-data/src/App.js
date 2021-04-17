import React, { Component } from "react";
import "./App.css";

//pseudo baza-danych
const data = [
  { id: 1, title: "Wiadomość nr.1", body: "Zawartość wiadomości nr.1 ..." },
  { id: 2, title: "Wiadomość nr.2", body: "Zawartość wiadomości nr.2 ..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr.${index}`,
    body: `Zawartość wiadomości nr.${index} ...`,
  });
}, 5000);

class App extends Component {
  state = {
    //pobranie kopii danych
    comments: [...data],
  };
  //pobranie aktualizacji danych bez sprawdzenia z optymalizacją czasów rendera względem zmian w pobranych danych
  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      });
    } else {
      console.log("dane takie same");
    }
  };

  //ustawienie pobierania aktualizacji już po pierwszym renderze co 5 sekund
  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  //ustawienia czyszczenia, nawet jak nie będę likwidował komponentu to i tak powinienem to tworzyć
  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <p>{comment.body}</p>
      </div>
    ));
    return <div className='App'>{comments.reverse()}</div>;
  }
}

export default App;
