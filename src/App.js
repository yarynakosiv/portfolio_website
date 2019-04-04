import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/about/about'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import FixedMenu from './components/fixedMenu/fixedMenu'
import Login from './components/Login/Login'
import Image from './components/Admin/Image'
import Admin from './components/Admin/Admin'
import projects from './projects.json'
import PortfolioFull from './components/Portfolio/PortfolioFull/PortfolioFull'
import { BrowserRouter, Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route exact path="/login" component={Login}/>
                    {/*<Route exact path="/" component={}/>*/}
                    <Route exact path='/' render={props =>
                        <div>
                            <About/>
                            <FixedMenu/>
                            <Portfolio/>
                            <Contact/>
                            <Image/>
                        </div> } />
                </BrowserRouter>

                {/*// <FixedMenu/>*/}
                {/*// <About/>*/}
                {/*// <Portfolio/>*/}
                {/*<Route path="/admin" component={Admin} />*/}
                {/*{*/}
                {/*projects.map(project => <Portfolio key={project.id} project={project} />)*/}
                {/*}*/}
                {/*// <Contact/>*/}
                {/*<Login/>*/}
                {/*<Admin/>*/}
                {/*<PortfolioFull/>*/}

            </div>
        );
    }
}

export default App;
