import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
} from "react-router-dom";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  {/* <a href='/'>start</a> */}
                  <NavLink to='/' exact activeClassName='home_selected'>
                    start
                  </NavLink>
                </li>
                <li>
                  {/* <a href='/news'>newsy</a> */}
                  <NavLink to='/news' activeClassName='news_selected'>
                    newsy
                  </NavLink>
                </li>
                <li>
                  {/* <a href='/contact'>kontakt</a> */}
                  <NavLink to='/contact' activeClassName='contact_selected'>
                    kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path='/' exact component={Home} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
