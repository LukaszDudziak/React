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
  render() {
    //dzięki let mogę nadpisywać tablicę w kolejnych krokach
    let users = this.props.data.users;
    //filtrowanie po płci (tworzy nową tablicę)
    users = users.filter((user) => user.sex == "female");
    //mapowanie po przefiltrowaniu (tworzy nową tablicę)
    const Items = users.map((user) => <Item key={user.id} user={user} />);
    return <ul>{Items}</ul>;
  }
}
ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
