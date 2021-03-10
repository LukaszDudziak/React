// komponent funkcyjny, bezstanowy

const Header = () => {
  return (
    <div>
      <h1>Witaj na stronie</h1>
    </div>
  );
};
// komponent klasowy, stanowy

class Blog extends React.Component {
  // state = {
  //   number: 0,
  // };
  render() {
    return (
      <section>
        <h2>artykuł</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          voluptatum pariatur nam a possimus quidem reprehenderit reiciendis,
          repellendus perspiciatis ad.
        </p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
