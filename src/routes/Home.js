import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

import Gallery from '../components/Gallery';

export default class Home extends Component {

    constructor(){
        super();
        this.state = { 
            posts : []
        };
    }

    componentDidMount(){
        
        // 갤러리 첫화면에서 보여줄 데이터 가져오기
        axios.get('/v1/posts/list', {
        }).then( (res) => {
            this.setState({
                posts: res.data.posts
            });
        }).catch( (error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <Gallery posts={ this.state.posts }/>
            </div>
        );
    }
}