const ListItems = (props) => {
  const items = props.items.map((item) => (
    //   utworzoną wyżej metodę przekazuję jeszcze niżej, tak samo robię z id, jako że key jest tylko i wyłącznie dla reacta i nie jest przekazywany w propsach
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <div className='list'>
      <h1>Twoje zamówienie</h1>
      <ul>{items}</ul>
    </div>
  );
};
