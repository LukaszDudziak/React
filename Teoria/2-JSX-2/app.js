const header = <h1 className="title">Witaj na stronie</h1>;

const classBig = "big";
const handleClick = () => alert("klik");

const main = (
  <div>
    <h1 person="osoby" onClick={handleClick} className="red">
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est
      aperiam modi exercitationem asperiores consequatur maxime quas, labore id
      ad laborum corporis, eaque eveniet maiores explicabo necessitatibus fuga
      ipsam quam?
    </p>
  </div>
);

const tekst = "stopkaa";
const largetxt =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, commodi!";
const footer = (
  <footer>
    <p className={classBig}>{tekst}</p>
    {largetxt}
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
