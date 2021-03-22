class App extends React.Component {
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
    //robię nową tablicę na podstawie tej ze state
    const items = this.state.items.map((item) => {
      //sprawdzam każdy element tablicy, do momentu aż będzie on tym samym, który kliknąłem
      if (id === item.id) {
        //jeśli będzie, to odwracam jego active
        item.active = !item.active;
      }
      //nadpisuje każdy iterowany element
      return item;
    });
    this.setState({
      //nadpisuję tablicę ze state, utworzoną kopią
      items: items,
    });
  };
  render() {
    return (
      //react.fragment, bo <> dostępne od babela 7, a na tym projekcie mam 6
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
