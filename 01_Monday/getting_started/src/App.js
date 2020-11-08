import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./style1.css";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Her er der noget content, det kan være meget</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>CVR</th>
            <th>Hjemmeside</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proudboys</td>
            <td>20202020</td>
            <td>proudboys.com</td>
          </tr>
          <tr>
            <td>Antifa</td>
            <td>24242424</td>
            <td>Antifa.com</td>
          </tr>
          <tr>
            <td>Qanon</td>
            <td>66666666</td>
            <td>stop-the-vote.com</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/about/nested`}>Nested route</Link>
      <Route path={`/about/nested`} component={Nested}></Route>
    </div>
  );
}

function Nested() {
  return (
    <div>
      <h3>This is showing a nested route</h3>
    </div>
  )
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
