import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import s from './Portfolio.module.css';
import ImageBackground from '../../img/lviv.jpg';
import Radium from "radium";
import {PortfolioFull} from './PortfolioFull/PortfolioFull';
import {BrowserRouter} from "react-router-dom";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            loading: true,
            expanded: null,
        };
        this.closeExpandedPost = this.closeExpandedPost.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/projects').then(resp => resp.json()).then(data => {
            this.setState({projects: data, loading: false});
        });
    }

    closeExpandedPost() {
        this.setState({expanded: null});
    }

    render() {
        const {projects, loading, expanded} = this.state;
        console.log(expanded);

        return loading ? <span>Loading ...</span> :
            <div className={s.container}>
                {
                    projects.map(project =>
                        <div
                            key={project.id}
                            className={(expanded && project.id === expanded) ? 'expanded' : '' + ' ' + s.post}
                            onClick={() => this.setState({expanded: project.id})}
                        >
                            <div className={s.name}>{project.name}</div>
                            <img src={project.mainImg} alt={"img"}/>
                            {/*{project.title}*/}
                            {(expanded && project.id === expanded) &&
                            <PortfolioFull
                                name={project.name}
                                description={project.description}
                                mainImg={project.mainImg}
                                // images={project.images}
                                closer={this.closeExpandedPost}
                            />
                            }
                            {/*<Portfolio style={{ display: 'none' }} />*/}
                        </div>
                    )
                }
            </div>
    }
}


//     // handleClick() {
//     //
//     //     let expanded = this.state.expanded;
//     //     console.log(this.state.expanded);
//     //     if (expanded) {
//     //         expanded = false;
//     //     } else {
//     //         expanded = true;
//     //     }
//     //     this.setState({expanded: expanded});
//     // }
//
//     componentDidMount() {
//         // const expanded = this.state;
//         let url = "http://localhost:4000/projects";
//         fetch(url)
//             .then(resp => resp.json())
//             .then(data => {
//                 // console.log(this.state.expanded);
//                 let projects = data.map((project, index) => {
//
//                     // if (expanded) {
//                     //     return (
//                     //         <div>
//                     //             <div className={s.name}>{project.name}</div>
//                     //             <img src={project.mainImg} alt={"img"}/>
//                     //             <div><h3>{project.description}</h3></div>
//                     //         </div>
//                     //     )
//                     // } else {
//                         return (
//                             <div key={index} className={s.post}
//                                  // onClick={this.handleClick}
//                             >
//                                 <div className={s.name}>{project.name}</div>
//                                 <img src={project.mainImg} alt={"img"}/>
//                             </div>
//                         )
//                     // }
//                 });
//                 this.setState({projects: projects});
//             })
//     }
//
//
//     render() {
//         return (
//             <div className={s.container}>
//                 {this.state.projects}
//             </div>
//         );
//     }
// }

Portfolio.propTypes = {};
export default Portfolio;