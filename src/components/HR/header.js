import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
          <div>
                <nav class="navbar">
                    <div class="brand-title"><a style={{textDecoration:'none'}} href="/">Home</a></div>
                    <div class="navbar-links">
                      <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                      </ul>
                    </div>
                  </nav>
          </div>
        )
    }
}