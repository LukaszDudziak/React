const Header = (props) => {
  //sprawdzam ile elementów jest aktywne (+przypisuje propsy do nowej tablicy)
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>Do zapłaty: {number ? `${number * 10} złotych` : "weź coś zamów"}</h2>
    </header>
  );
};
