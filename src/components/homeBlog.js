import React, {Component} from 'react'
import './homeBlog.css'
import '../App.css';
import HomeBlogItem from './homeBlogItem'
import { Link } from 'react-router-dom';

import img0 from '../images2/pexels.jpg'
import img1 from '../images2/hot-tea.jpg'
import img2 from '../images2/turmeric-powder.jpg'

// const blogsArray=[0,1,2];
// const srcImg=[img0,img1,img2];
const blogsArray=[0,1];
const blogsArray2=[0];
const srcImg=[img0,img1];
const srcImg2=[img2];

class HomeBlog extends Component{
      constructor(props){
          super(props);
          this.state={
            text: ['What is Organic farming in India Benefits and Methods', 'Is a Healthy Lifestyle your Priority? Let us talk about Abubaba Organic'],
            text2:['Why our Lakadong Turmeric is the best Immunity booster for you?'],
            path: ['/services','/services','/services','/services']
          };
      }

      render(){
        return (
          <>
          <div className='blogs'>
            <h1>Latest Blogs</h1>
            <div className='blogs_container'>
                <div className='blogs_items'>
                {blogsArray.map(i => {
                    return <HomeBlogItem src={srcImg[i]} text={this.state.text[i]} path={this.state.path[i]}/>
                  })}
                {(window.innerWidth>680)&&blogsArray2.map(i => {
                    return <HomeBlogItem src={srcImg2[i]} text={this.state.text2[i]} path={this.state.path[i]}/>
                  })}
                </div>
                {/* <a href="/blogs">Explore more</a> */}
            </div>
          </div>
          </>
        );
    }
}

export default HomeBlog;