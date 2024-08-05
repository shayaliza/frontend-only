import React from "react";
import "./timeline2.css";

function Path() {
  const courses = [
    {
      number: 1,
      title: "Stellar JavaScript for the React Universe",
      description:
        "This course is an exciting step towards understanding necessary JavaScript basics and ES6 specifically, which are essential to leverage the power of React. Learn about...",
      lessons: 4,
      practices: 21,
    },
    {
      number: 2,
      title: "Galactic Gateway to React",
      description:
        "Extend your JavaScript knowledge by exploring React components. Learn to outline functional components, handle their lifecycle, and interact dynamically with user...",
      lessons: 7,
      practices: 35,
    },
    {
      number: 3,
      title: "Stellar Explorations in React",
      description:
        "Extend your JavaScript knowledge by exploring React components. Learn to handle components lifecycle, and interact dynamically with user interaction.",
      lessons: 6,
      practices: 32,
    },
  ];

  return (
    <section class="hero-section">
      <div class="timeline_title">
        <h1>START YOUR JOURNEY</h1>
      </div>
      <div class="container">
        <div class="timeline">
          <div class="timeline-container primary" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fab fa-html5"></i> */}1
            </div>
            <div class="timeline-body timeline-html">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">
                    <i class="ri-file-2-line"></i>
                  </div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice"></div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">
                Embark on a coding adventure with HTML
              </h1>
              <p class="timeline-content">
                HTML is the basic and must have skill-set for every web
                developer. It is used and extended by various other
                technologies. To be completely able to understand how things
                work in web development, you should develop an understanding of
                HTML
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
          <div class="timeline-container danger" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fab fa-css3-alt"></i> */}2
            </div>
            <div class="timeline-body timeline-css">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">
                    <i class="ri-file-2-line"></i>
                  </div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice">
                    <i class="ri-code-box-line"></i>
                  </div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">Style your Success with Css</h1>
              <p class="timeline-content">
                CSS is another important language amongst the web development
                trifecta. It will help you style, plan a layout and control the
                behaviour and look and feel of the web apps that you build.
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
          <div class="timeline-container success" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fab fa-js-square"></i> */}3
            </div>
            <div class="timeline-body timeline-javascript">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">3</div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice">
                    <i class="ri-code-box-line"></i>
                  </div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">Join the JavaScript journey</h1>
              <p class="timeline-content">
                The third one amongst the must learn trifecta, Js is present in
                about 90% of the internet. To make sense of what you’re doing
                and to design and build new web apps, this language is used
                predominantly, and it is indispensable
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
          <div class="timeline-container warning" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fab fa-react"></i>  */}4
            </div>
            <div class="timeline-body timeline-react">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">
                    <i class="ri-file-2-line"></i>
                  </div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice">
                    <i class="ri-code-box-line"></i>
                  </div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">React to success with ReactJs</h1>
              <p class="timeline-content">
                Reactjs is the best and most popular framework for front-end
                development. An integral part of the MERN stack, its community
                is great, and the demand for reactjs specialists is only
                increasing day-by-day. React is great for Rapid app development,
                SPAs and for creating awesome responsive and interactive web
                apps
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
          <div class="timeline-container" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fab fa-node-js"></i> */}5
            </div>
            <div class="timeline-body timeline-node">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">
                    <i class="ri-file-2-line"></i>
                  </div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice">
                    <i class="ri-code-box-line"></i>
                  </div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">Embark on a Node journey</h1>
              <p class="timeline-content">
                Nodejs is a great skill to have. It is JS based, and it
                completes the javascript full stack experience. It is a backend
                skill, which is in demand and pays well
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
          <div class="timeline-container info" data-aos="fade-up">
            <div class="timeline-icon">
              {/* <i class="fas fa-database"></i> */}6
            </div>
            <div class="timeline-body timeline-mongodb">
              <div class="gradient"></div>
              <div class="timeline-lessons">
                <div class="timeline-lesson">
                  <div class="icon">
                    <i class="ri-file-2-line"></i>
                  </div>
                  <p>23 lessons</p>
                </div>
                <div class="timeline-practice">
                  <div class="practice">
                    <i class="ri-code-box-line"></i>
                  </div>
                  <p>33 practices</p>
                </div>
              </div>

              <h1 class="timeline-headline">Master the MongoDb</h1>
              <p class="timeline-content">
                This is a data driven schema-less NoSql database. It is a great
                tool to know. The syntax is very similar to javascript making it
                much easier to learn. You can use this for projects of any size
                and is also very easy to scale up or down depending on your
                requirements
              </p>
              <div class="timeline-foot">
                <p class="timeline-subtitle">2 Hours Ago</p>
                <button class="timeline-button" onclick="showDetailsPopUp()">
                  view details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Path;
