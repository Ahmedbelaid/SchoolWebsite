import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    fetch('', {
      mode: 'cors'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.error(data);
        this.setState({ news: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id="wrapper">
        <div className="clearfix" />

        <div className="fullwidth-home-slider margin-bottom-0">
          <div
            data-background-image="images/home-slider-01.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
                        Student Bourse <i></i>
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
                            For top students
                          </a>
                        </h3>
                                          </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                        View Details <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/aa.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">Supporting Founders</div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
                             FSM University
                          </a>
                        </h3>
                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                        View Details <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/home-slider-03.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
Clubs and Activities
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
Join NOW
                          </a>
                        </h3>

                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/home-slider-04.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
CI2 certificat
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
Enroll now to get your certificat                          </a>
                        </h3>

                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/home-slider-05.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
Stages & PFE
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
Stage categroy list
                          </a>
                        </h3>


                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <section
          className="fullwidth"
          data-background-color="#f7f7f7"
          style={{
            background: 'rgb(247, 247, 247) none repeat scroll 0% 0%',
            padding: 0,
            margin: 0
          }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Books-2" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Latest Courses
                      </a>
                    </div>
                  </div>

                  <h3>Latest Courses</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Check" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Test Results
                      </a>
                    </div>
                  </div>

                  <h3> Test Results </h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Student-MaleFemale" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Student scholarship
                      </a>
                    </div>
                  </div>

                  <h3>Top Student </h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Handshake" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Contact Professor
                      </a>
                    </div>
                  </div>

                  <h3>Contact Professor</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullwidth margin-top-95 margin-bottom-0">
          <h3 className="headline-box">Latest news</h3>

          <div className="container">
            <div className="row">
              <h1>LFSI3 - mini-projets Technologies et Programmation Web</h1>
              <p>Il est porté à la connaissance des étudiants de LFSI3 qu’une séance de rattrapage pour présenter vos mini-projets « Technologies et Programmation Web » aura lieu le
<br></br>
mercredi 24 février 2021 à partir de 14h00 au labo 302 Info.</p>
            </div>
          </div>
        </section>
        

        <section
          className="fullwidth border-top margin-top-40 margin-bottom-0 padding-top-60 padding-bottom-65"
          data-background-color="#ffffff">
          <h3 className="headline-box">Partners</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo-carousel dot-navigation">
                  <div className="item">
                    <img src="images/logo-01.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-02.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-03.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-04.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-05.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-06.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-07.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="backtotop">
          <a href="#" />
        </div>
      </div>
    );
  }
}

export default Homepage;


