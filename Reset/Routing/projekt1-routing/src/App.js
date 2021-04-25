import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  {/* <a href='/'>start</a> */}
                  <Link to='/'>start</Link>
                </li>
                <li>
                  {/* <a href='/news'>newsy</a> */}
                  <Link to='/news'>newsy</Link>
                </li>
                <li>
                  {/* <a href='/contact'>kontakt</a> */}
                  <Link to='/contact'>kontakt</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>witaj</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
