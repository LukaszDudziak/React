class App extends React.Component {
  //w state mam listę wszystkich elementów
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: true },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: false },
    ],
  };

  handleChangeStatus = (id) => {
    console.log(id);

    const items = this.state.items.map((item) => {
      //edycja obiektu klikniętego
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    //podmiana zaktualizowanego obiektu items
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* przekazuję sobie do headera przez propsy tablicę elementów  */}
        <Header items={this.state.items} />
        {/* w propsach przekazuję sobie metodę, która ma obsłużyć zmianę active */}
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
