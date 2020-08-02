import React, {Component} from "react";
import Header from "./HR/header";
import Footer from "./HR/footer";
export default class LandingPage extends Component {
    render() {
        return (
            <body>
                  <Header/>
                  <div>
                         <div class="box card text-white bg-info mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Secondary card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                  </div>
            
                    <Footer/>
            </body>

        )
    }
}