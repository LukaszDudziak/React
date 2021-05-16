import logo from "./logo.svg";
import "./App.css";

import Comments from "./Comments";
import Form from "./Form";
import StoreProvider from "./stores/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <div className='App'>
        <h1>Opinie na temat książki</h1>
        <Comments />
        <Form />
      </div>
    </StoreProvider>
  );
}

export default App;
