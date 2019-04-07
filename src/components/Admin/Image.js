import React, {Component} from 'react';
import {storage} from '../../firebase';
import s from "./Admin.module.css";
import axios from "axios";

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: '',
            description: '',
            mainImg: {
                image: null,
                url: '',
                progress: 0
            }
        };
        this.changeImg = this.changeImg.bind(this);
        this.save = this.save.bind(this);
        this.changeText = this.changeText.bind(this);
        this.createUUID = this.createUUID.bind(this);
    }

    changeImg = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    };

    changeText = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    createUUID = () => {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line:no-bitwise
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            // tslint:disable-next-line:no-bitwise
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    save = () => {
        const {image} = this.state;
        const {mainImg}=this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                    console.log(this.state)
                })

                // let id = createUUID();
                const accessToken = localStorage.getItem('accessToken');
                const newProject = {
                    id:this.createUUID,
                    name: this.state.name,
                    // mainImg: this.state.mainImg,
                    description: this.state.description,
                    img: this.state.img
                };
                console.log(newProject.id)
                // newProject.id = this.findId();
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

            });
    };

    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
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
                       onChange={this.changeImg}
                />
                {/*<h3>Upload multiple project images</h3>*/}
                {/*<input className={s.projectImg}*/}
                       {/*name="img"*/}
                       {/*type="file"*/}
                       {/*multiple*/}
                    {/*// value={this.state.img}*/}
                       {/*onChange={this.changeImg}*/}
                {/*/>*/}
                <button className={s.button} onClick={this.save}>Save
                </button>
            </div>

        // {/*<div style={style}>*/
        // }
        // {/*<progress value={this.state.progress} max="100"/>*/
        // }
        // {/*<br/>*/
        // }
        // {/*<input type="file" onChange={this.handleChange}/>*/
        // }
        // {/*<button onClick={this.handleUpload}>Upload</button>*/
        // }
        // {/*<br/>*/
        // }
        // {/*<img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300"*/
        // }
        // {/*width="400"/>*/
        // }
        // {/*</div>*/
        // }
    )
    }
}

export default ImageUpload;