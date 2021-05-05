//pisany z pomocą hooków i komponentów funkcyjnych

const ADDITION = "addition";
const RESET = "reset";
const SUBTRACTION = "subtraction";

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === RESET) {
      setCount(count + 1);
      setResult(props.result);
    } else if (type === ADDITION) {
      setCount(count + 1);
      setResult(result + number);
    }
  };

  return (
    <React.Fragment>
      <MathButton
        name='-10'
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name='-1'
        number={1}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton name='Reset' type={RESET} click={handleMathClick} />
      <MathButton name='1' number={1} type={ADDITION} click={handleMathClick} />
      <MathButton
        name='10'
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </React.Fragment>
  );
};

const MathButton = ({ click, type, number, name }) => {
  const handleOnClick = () => click(type, number);
  return <button onClick={handleOnClick}>{name}</button>;
};

const ResultPanel = ({ count, result }) => {
  const additionalInformation = count > 10 ? <span>Przeciążenie</span> : null;

  return (
    <React.Fragment>
      <h2>
        Liczba kliknięć: {count}
        {additionalInformation}
      </h2>
      <h2>Wynik: {result}</h2>
    </React.Fragment>
  );
};

const startValue = 10;

ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
