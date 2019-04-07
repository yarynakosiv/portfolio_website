import React, {Component} from 'react';
// import PropTypes from 'primport React, {Component} from 'react';
import s from './Login.module.css'
import Admin from "../Admin/Admin";
import axios from 'axios';
// import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorized: false,
            fields: {},
            email: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(email, password);

        axios({
            method: 'post',
            url: `http://localhost:4000/login`,
            data: {email, password}
        })
            .then(response => {
                localStorage.setItem('accessToken', response.data.accessToken);
                this.setState({authorized: true});
                if (this.authorized) {
                    return (<Admin/>)
                }
            })
            .catch(error => console.log(error));


    }

    // onSubmit = (e) => {
    //     const {fields} = this.state;
    //     console.log(fields);
    //     e.preventDefault();
    //     fields.login =
    //     fields.password =
    //     this.setState({fields});
    // };
    //
    // componentDidMount() {
    //     let Name;
    //     let Password;
    //
    //     axios.get('http://localhost:4000/passwords')
    //         .then(function (response) {
    //             // const {name, password} = response.data[0];
    //             Name = this.name;
    //             Password = this.password;
    //             console.log(Password);
    //             console.log(Name);
    //         })
    //         .catch(function (error) {
    //                 console.log(error);
    //             }
    //         );
    //     console.log(Password);
    //     console.log(Name);
    //     if (Name && Password) {
    //         console.log('hi');
    //         this.data(Name, Password)
    //     }
    //
    // }
    //
    // data = (Name, Password) => {
    //     const {fields, authorized} = this.state;
    //     console.log(authorized);
    //     if (fields.login == Name &&
    //         fields.password == Password) {
    //         this.authorized = true;
    //         console.log("hi")
    //     }
    // };

    render() {
        let token = localStorage.getItem('accessToken');
        // const { authorized } = this.state.
        return (
            token ?
                <Admin/>
                :
                <div className={s.container}>
                    {/*<h5>Please,login</h5>*/}
                    <form name="myForm">
                        <Link to="/">
                            <button className={s.close}><b>x</b></button>
                        </Link>
                        <input
                            placeholder={"email"}
                            value={this.state.email}
                            type="text" name="email"
                            onChange={e => this.change(e)}
                        />

                        <input placeholder={"password"}
                               value={this.state.password}
                               type="text" name="password"
                               onChange={e => this.change(e)}
                        />
                        <button onClick={(e) => this.onSubmit(e)} type="button" className={s.save}>login</button>
                    </form>
                </div>
        );
    }
}


Login.propTypes = {};
export default Login;