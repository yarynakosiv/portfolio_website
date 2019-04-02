import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/about/about'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import FixedMenu from './components/fixedMenu/fixedMenu'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import projects from './projects.json'
import PortfolioFull from './components/Portfolio/PortfolioFull/PortfolioFull'
import { BrowserRouter, Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route path="/admin" component={Login}/>
                </BrowserRouter>
                <FixedMenu/>
                <About/>
                <Portfolio/>
                {/*{*/}
                {/*projects.map(project => <Portfolio key={project.id} project={project} />)*/}
                {/*}*/}
                <Contact/>
                {/*<Login/>*/}
                <Admin/>
                {/*<PortfolioFull/>*/}

            </div>
        );
    }
}

export default App;
