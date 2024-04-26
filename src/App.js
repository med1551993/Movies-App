import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import HomePages from "./home/HomePage";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/singlePage/:id" component={SinglePage} />
          {/*  <Route path="/about">
            <About />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
