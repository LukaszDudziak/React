// komponent funkcyjny, bezstanowy (stateless)

const Header = () => {
  return <h1 className>Witaj na stronie</h1>;
};

// komponent klasowy, stanowy (stateful)

class Article extends React.Component {
  // state = {
  //   number: 0,
  // };

  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
          asperiores. Voluptas voluptates ratione id voluptatibus beatae unde
          qui! Aliquam, consequatur?
        </p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Article />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
