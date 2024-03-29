const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className='userInfo'>
    <h1>Użytkownik: {user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek: {user.age}</p>
    <p>Płeć: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all",
  };
  //funkcja zmiany state
  handleUsersFilter = (option) => {
    this.setState({
      select: option,
    });
  };
  //funkcja wyświetlania komponentu
  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map((user) => <Item user={user} key={user.id} />);
      case "female":
        users = users.filter((user) => user.sex === "female");
        return users.map((user) => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter((user) => user.sex === "male");
        return users.map((user) => <Item user={user} key={user.id} />);
      default:
        return "Brak danych";
    }
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleUsersFilter("all")}>Wszyscy</button>
        <button onClick={() => this.handleUsersFilter("female")}>
          Kobiety
        </button>
        <button onClick={() => this.handleUsersFilter("male")}>
          Mężczyźni
        </button>
        {this.usersList()}
      </div>
    );
  }
}
ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
