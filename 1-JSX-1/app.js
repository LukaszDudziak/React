// console.log(React);
// console.log(ReactDOM);

const element = <div>Pierwszy element React</div>;

const element2 = React.createElement("div", null, "Pierwszy element React");

const element3 = (
  <div>
    <p>Tekst</p>
  </div>
);

const element4 = (
  <div id="main">
    <p>Tekst</p>
  </div>
);

const element5 = (
  <>
    <section></section>
    <section></section>
  </>
);
