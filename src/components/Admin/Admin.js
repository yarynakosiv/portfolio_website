import React, {Component} from 'react';
// import PropTypes from 'primport React, {Component} from 'react';
import s from './Admin.module.css'
import axios from "axios";
import {storage} from '../../firebase';
// import Login from "../Login/Login";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: '',
            description: '',
            mainImg: [],
            mainImgUrl: '',
            img: [],
            imgUrl: ''
        };
        this.save = this.save.bind(this);
        this.changeImg = this.changeImg.bind(this);
        this.changeText = this.changeText.bind(this);
        console.log(this.state)
    }

    save = (e) => {
        e.preventDefault();
        const {img, mainImg} = this.state;
        console.log({img, mainImg});

        const uploadTask = storage.ref(`images/${mainImg.name}`).put(mainImg);
        uploadTask.on('state_changed',
            (snapshot) => {
                //progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                //error function
                console.log(error)
            },
            () => {
                //complete function
                storage.ref('images').child(mainImg.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                })
            });
    };

    changeText = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    changeImg = e => {
        e.preventDefault();
        const {img, mainImg} = this.state;
        if (e.target.name === "img") {
            for (let key in e.target.files) {
                if (key === "item" || key === "length") {
                    continue
                }
                let tmpPath = URL.createObjectURL(e.target.files[key]);
                img.push(tmpPath)
            }

            this.setState({
                [e.target.name]: img
            });
        } else {
            let tmpPath = URL.createObjectURL(e.target.files[0]);
            mainImg.push(tmpPath);
            this.setState({
                [e.target.name]: mainImg
            });
        }
        console.log(img);
        console.log(this.state)
    };

    findId = (maxId) => {
        axios.get('http://localhost:4000/projects')
            .then(function () {
                maxId = this.projects.id.reduce((max, item) => {
                    return item.id > max ? item.id : max;
                }, 0);
                console.log(maxId)
            })
            .catch(function (error) {
                    console.log(error);
                }
            );
    };

    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        const newProject = {
            id: '',
            name: this.state.name,
            mainImg: this.state.mainImg,
            description: this.state.description,
            img: this.state.img
        };
        newProject.id = this.findId();
        // project.id.push({label: id, id: (id + 1)});
        // this.img.push.({this.state.mainImg});

        axios({
            method: 'post',
            url: `http://localhost:4000/664/projects`,
            data: newProject,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(data => {
                console.log('project created')
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className={s.container}>
                <h2>Add Project</h2>
                <h3>Project name</h3>
                <input className={s.text}
                       name="name"
                       placeholder={"name"}
                       value={this.state.name}
                       type="text"
                       onChange={e => this.changeText(e)}
                />
                <h3>Project description</h3>
                <input className={s.description}
                       name="description"
                       placeholder="Description"
                       value={this.state.description}
                       type="textarea"
                       rows="10"
                       cols="30"
                       onChange={e => this.changeText(e)}
                />
                <h3>Upload main img</h3>
                <input className={s.mainImg}
                       name="mainImg"
                       type="file"
                    // value={this.state.mainImg}
                       onChange={e => this.changeImg(e)}
                />
                <h3>Upload multiple project images</h3>
                <input className={s.projectImg}
                       name="img"
                       type="file"
                       multiple
                    // value={this.state.img}
                       onChange={e => this.changeImg(e)}
                />
                <button className={s.button} onClick={this.save}>Save
                </button>
            </div>
        );
    }
}

Admin.propTypes = {};
export default Admin;