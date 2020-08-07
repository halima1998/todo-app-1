import React, {Component} from "react";
import Header from './HR/header';
import Footer from './HR/footer';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//   '/home/mkhalil/Projects/todo/src/components/img/dogs.jpg',
//   'img/food.jpg',
//   'img/glasses.jpg'
  
// ];
 
const slideImages = [ 
     require('./img/javascript.png'),
     require('./img/node.png'),
     require('./img/react.png')
     ];

export default class LandingPage extends Component {
    render() {
        return (
            <body>
                <Header/>
                         <div className="slide-container">
                            <Slide>
                            { slideImages.map( (image) => <img  src={image}/>)} 
                     </Slide>
                     <div class="row">
                     <div class="col1 col-lg-3">
                                <div class="card-header"><h2>JavaScript</h2></div>
                                <div class="card-body">
                                    <h5 class="card-title">What is JavaScript?</h5>
                                    <p class="card-text">
                                    JavaScript is a programming language commonly used in web development. 
                                    It was originally developed by Netscape as a means to add dynamic and 
                                    interactive elements to website...
                                    </p>
                                    <a href="https://www.w3schools.com/js">Read more</a>
                                </div>
                                </div>

                                <div class="col col-lg-3">
                                <div class="card-header"><h2>React.Js</h2></div>
                                <div class="card-body">
                                <h5 class="card-title">What is React.js?</h5>
                                    <p class="card-text">
                                    React is a JavaScript library for building user interfaces.
                                     React is used to build single page applications.
                                     React allows us to create reusable UI components...
                                    </p>
                                    <a href="https://reactjs.org/tutorial/tutorial.html">Read more</a>
                                </div>
                                </div>

                                <div class="col col-lg-3">
                                <div class="card-header"><h2>Node.Js</h2></div>
                                <div class="card-body">
                                <h5 class="card-title">What is Node.js?</h5>
                                    <p class="card-text"> Node.js is an open source server environment </p>
                                    <p class="card-text"> Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)...</p>
                                    <a href="https://www.w3schools.com/nodejs/nodejs_intro.asp">Read more</a>
                                </div>
                                </div>    
                             </div>
                        </div>
              <Footer/>
           </body>
        )
    }
        }
