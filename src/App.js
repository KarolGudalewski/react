import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";

class App extends Component {

    render() {
        return (
            <div>
                <GlobalStyle/>
                <Router>
                    <div>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/about" component={About} />
                    </Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
export default App;
