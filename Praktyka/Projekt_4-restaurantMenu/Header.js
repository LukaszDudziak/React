const Header = (props) => {
  //tworzę nową tablicę w której zapisane będą tylko aktywne elementy
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>
        Do zapłaty: {number ? `${number * 10} złotych ` : `nic nie kupujesz`}{" "}
      </h2>
    </header>
  );
};
