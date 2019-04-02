import React, {Component} from 'react';
// import PropTypes from 'primport React, {Component} from 'react';
import s from './Admin.module.css'
import axios from "axios";

// import Login from "../Login/Login";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            loading: false
        };
        this.save = this.save.bind(this);
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
        this.inputField = React.createRef();
    }

    save = (e) => {
        const {fields} = this.state;
        console.log(fields);
        e.preventDefault();
        fields.name = e.currentTarget.name.value;
        fields.description = e.currentTarget.description.value;
        fields.mainImg = e.currentTarget.mainImg.value;
        fields.id = '';

        const inputField = this.inputField.current;
        if (!inputField || !inputField.value) {
            return;
        }
        const maxId = this.fields.id.reduce((max, item) => {
            return item.id > max ? item.id : max;
        }, 0);


        fields.id.push({label: fields.id, id: (maxId + 1)});
        fields.name.push(this.name);
        fields.description.push(this.description);

        let mainImg = this.encodeImageFileAsURL(fields.mainImg);
        mainImg.push(this.mainImg);
        // fields.mainImg.push(this.mainImg);

        this.setState({fields});
        inputField.value = null;
        this.setState({loading: true});


        axios.post('http://localhost:4000/projects', this.state.fields)
            .then(response => this.setState({loading: false}))
            .catch(error => console.error(error));


    };

    encodeImageFileAsURL = (element) => {
        let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            return ('RESULT', reader.result)
        };
        reader.readAsDataURL(file);
        console.log('RESULT', reader.result)
    };

    componentDidMount() {
        this.setState({loading: true});
        axios.get('http://localhost:4000/projects')
            .then(response => this.setState({items: response.data || [], loading: false}))
            .catch(function (error) {
                    console.log(error);
                }
            );
    }

    render() {


        return (
            <div className={s.container}>
                <h2>Add Project</h2>
                <h3>Project name</h3>
                <input className={s.text} name="name" placeholder={"Name"} type="text"/>
                <h3>Project description</h3>
                <input className={s.description} name="description" placeholder="Description" type="textarea" rows="10"
                       cols="30"/>
                <h3>Project main img</h3>
                <input className={s.mainImg} name="mainImg" type="file"/>
                <h3>Project images</h3>
                <input className={s.projectImg} name="img" type="file"/>
                <button className={s.button} onClick={this.save}>Save
                </button>
            </div>
        );
    }
}

Admin.propTypes = {};
export default Admin;