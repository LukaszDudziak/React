const header = <h1 className='title'>Witaj na stronie</h1>;

const classBig = "big";

const handleClick = () => alert("klik");
const main = (
  <div>
    <h1 onClick={handleClick} className='red'>
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
      reiciendis facilis. Odit fugiat ex ut inventore, illo rem doloribus eos.
    </p>
  </div>
);

const text = "stopka";
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
