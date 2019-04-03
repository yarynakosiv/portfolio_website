import React, {Component} from 'react';
// import PropTypes from 'primport React, {Component} from 'react';
import s from './Login.module.css'
import Admin from "../Admin/Admin";
import axios from 'axios';
import {Link} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorized: false,
            fields: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        axios.post('http://localhost:4000/login', {
            email: "admin@mail.com",
            password: "qwerty"
        }).then(response => {
            const accessToken = response.accessToken;
        });
    }

    // onSubmit = (e) => {
    //     const {fields} = this.state;
    //     console.log(fields);
    //     e.preventDefault();
    //     fields.login = e.currentTarget.login.value;
    //     fields.password = e.currentTarget.password.value;
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
        const {authorized} = this.state;
        console.log(authorized)
        return (
            authorized ?
                <Admin/> :
                <div className={s.container}>
                    {/*<h5>Please,login</h5>*/}
                    <form name="myForm">
                        <Link to="/">
                            <button className={s.close}><b>x</b></button>
                        </Link>
                        <input placeholder={"login"} type="text" name="login"/>
                        <input placeholder={"password"} type="text" name="password"/>
                        <button onClick={this.onSubmit} type="button" className={s.save}>login</button>
                    </form>
                </div>
        );
    }
}


Login.propTypes = {};
export default Login;