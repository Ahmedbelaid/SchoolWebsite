import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
            <div id="footer" className="dark">
        <div className="container-fluid">
          <div className="row">
            

            <div className="col-md-4 col-sm-6 small">
             
              <ul className="footer-links">
                <li>
                  <a href="#">Student Funds</a>
                </li>
                <li>
                  <a href="#">Projects In Action</a>
                </li>
          
           
              </ul>

              <ul className="footer-links">
                <li>
                  <a href="#">stages et pfe</a>
                </li>
                <li>
                  <a href="#">Stage offre</a>
                </li>
                <li>
                  <a href="#">clubs</a>
                </li>
                <li>
                  <a href="#">Master & licence</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>

            <div className="col-md-3  col-sm-12 small">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>Monastir, Tunisia.</span> <br />
                Phone: <span>+216 22 333 444</span>
                <br />
                E-Mail: info@FSM.tn
                <span>
                  {' '}
                  <a href="#">

                  </a>{' '}
                </span>
                <br />
              </div>

              <ul className="social-icons margin-top-20">

              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2021 all rights reserved for Faculté de science monastir
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
