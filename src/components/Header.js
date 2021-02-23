import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userIsLoggedIn, removeToken as logout } from '../utils/authManager';

export class Header extends Component {
  render() {
    return (
      <header id="header-container">
        <div id="top-bar">
          <div className="container">
            <div className="left-side">
              <ul className="top-bar-menu">
                <li>
                  <i className="fa fa-phone" />   +216 22 333 444{' '}
                </li>
                <li>
                  <i className="fa fa-envelope" /> info@fsm.tn{' '}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="1e717878777d7b5e7b667f736e727b307d7173"
                    />
                  </a>
                </li>
              
              </ul>
            </div>

            <div className="right-side">
              <ul className="social-icons">

              <li>
                <a className="instagram" href="www.instagram.com">
                  <i className="icon-instagram" />
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div id="header">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <a href="index-2.html">
                  <img src="images/Capture.PNG" alt="" />
                </a>
              </div>

              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>

                <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <li>
                    <a className="current" href="./">
                      Home
                    </a>

                  </li>

                  <li>
                    <a href="#">News</a>
                    <ul>
                      <li>
                        <a href="http://www.fsm.rnu.tn/">Faculté de science monastir</a>
                      </li>
                      <li>
                        <a href="elements.html">Daily News</a>
                      </li>
                      <li>
                        <a href="elements.html">Guidelines</a>
                      </li>
                      <li>
                        <a href="elements.html">Reports</a>


                            <ul>
                              <li>
                                <a href="../single-uni-page-2.html">
                                Results
                                </a>
                              </li>
                              <li>
                                <a href="single-uni-page-1.html">
                                Timelines
                                </a>
                              </li>
                              <li>
                                <a href="single-uni-page-1.html">
                                Exams Report
                                </a>
                              </li>
                              <li>
                                <a href="single-uni-page-1.html">
                                Financial support
                                </a>
                              </li>
                            </ul>

                      </li>
                      <li>
                        <a href="https://www.google.com/maps/place/University+of+Monastir/@35.760671,10.76488,13z/data=!4m5!3m4!1s0x0:0x3f336b12e79caf21!8m2!3d35.763326!4d10.829131?hl=en-US">Map</a>
                      </li>

                    </ul>
                  </li>

                  <li>
                    <a href="#">Departements</a>
                    <ul>
                      <li>
                        <a href="compare-properties.html">Chemistry</a>
                      </li>
                      <li>
                        <a href="submit-uni.html">Computer Science</a>
                      </li>
                      <li>
                        <a href="submit-uni.html">Mathematiques</a>
                      </li>
                      <li>
                        <a href="submit-uni.html">Physiques</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Student life  </a>
                    <ul>
                      <li>
                        <a href="clubs.html">Clubs</a>
                      
                      </li>
                      <li>
                        <a href="project.html">Project in progress</a>
                      </li>
                      <li>
                        <a href="activites.html">Activities</a>
                      </li>
                      <li>
                        <a href="https://www.ooun.rnu.tn/web/fr/bourse.html">Bourse</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>

            <div className="right-side">
              <div className="header-widget">
                {userIsLoggedIn() ? (
                  <button onClick={logout} className="sign-in">
                    Log Out
                  </button>
                ) : (
                  <Link to="/depose " className="sign-in">
                    <i className="fa fa-user" /> Depose Courses
                  </Link>
                )}
                <Link to="/login" className="button border">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
