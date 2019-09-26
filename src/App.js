import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// import AppRouter from "./routes/app.router";
// import AdminRouter from "./routes/admin.router";

const NotFound = lazy(() => import("./components/NotFound"));
const AppRouter = lazy(() => import("./routes/app.router"));
const AdminRouter = lazy(() => import("./routes/admin.router"));

function App() {
  return (
    <Router>
      {/* <div>hello aman</div> */}
      <ul className="nav-links">
        <li>
          <Link to="/admin">Admin Login</Link>
        </li>
        <li>
          <Link to="/home">User Login</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppRouter />
        </Switch>
        <Switch>
          <AdminRouter />
        </Switch>
        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Router>
  );
}

export default App;
