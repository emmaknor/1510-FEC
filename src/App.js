/* eslint-disable object-shorthand */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
// import './App.css';
import React, { useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RatingsAndReviews from './components/ratingsAndReviews/rrMain';
import RelatedAndComparison from './components/relatedAndComparison/rcMain';
import QuestionsAndAnswers from './components/questionsAndAnswers/qaMain';
import Overview from './components/overview/ovMain';

function App() {
  // set up var to link review section
  const reviews = useRef(null);

  // func to navigate to review section
  const goToReviews = () => {
    // window.scrollTo({ top: reviews.current.offsetTop, behavior: "smooth" })
    reviews.current.scrollIntoView({ behavior: 'smooth' })
    //document.getElementById('please-work').scrollIntoView();
  };

  // click tracking function to pass down to components
  const clickTracker = (widget, e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let date = new Date();
    let elementClicked = e.target.type.concat(`, ${e.target.className}`);
    console.log(date.toTimeString());
    let clickData = {
      element: e.target.type,
      widget: widget,
      time: date.toTimeString(),
    };
    axios.post('http://localhost:3000/', clickData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // main application
    <div className="App">
      <div className="overview">
        <Overview goToReviews={goToReviews}/>
      </div>
      <div className="related-comparison">
        <RelatedAndComparison />
      </div>
      <div className="questions-answers">
        <QuestionsAndAnswers />
      </div>
      <div className="ratings-reviews" ref={reviews}>
        <RatingsAndReviews/>
      </div>
    </div>

    // setting up routes
    // <Router>
    //   <Route path="/overview" component={Overview} />
    //   <Route path="/related" component={RelatedAndComparison} />
    //   <Route path="/questions" component={QuestionsAndAnswers} />
    //   <Route path="/reviews" component={RatingsAndReviews} />
    // </Router>
  );
}

export default App;
