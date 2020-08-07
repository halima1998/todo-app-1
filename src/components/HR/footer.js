import React, {Component} from "react";
export default class Footer extends Component {
    render() {
        return (
<footer class="page-footer font-small stylish-color-dark pt-4">
  <div class="container text-center text-md-left">
    <div class="row">
      <div class="col-md-6">
        <h5 class="font-weight-bold text-uppercase mt-4 mb-4">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>
      <div md="6">
                    <h3 className="title">Contact us</h3>
                    <ul class="foot">
                      <li className="list-unstyled">
                        <a href="#!">WhatsApp</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">IMO</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">YouTube</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">Faceboof</a>
                      </li>
                    </ul>
                  </div>
              </div>
  </div>
  <hr/>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
  </div>
</footer>

        )
    }
}