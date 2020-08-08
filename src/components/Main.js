import React, { Component } from 'react';
import '../styles/index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
import QuestionOneResults from './QuestionOneResults';

const questions = [
  {
    question: null,
    possibleAnwers: ['', ''],
    correctAnswer: null
  },
  {
    question: null,
    answer: null
  },
  {
    question: null,
    answer: null
  },
  {
    question: null,
    answer: null
  },
  {
    question: null,
    answer: null
  },
  {
    question: null,
    answer: null
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentQuestionIndex: 0,
      score: 0
    }
  }
  
  render() {

    return (
      <Router>
        <div className="main-container">

          <Switch>
            
            <Route exact path="/">
              <StartPage />
            </Route>

            <Route exact path="/question-1">
              <QuestionOne 
                questions={questions[0].question}
                possibleAnwers={questions[0].possibleAnwers}
                answer={questions[0].answer}
              />
            </Route>

            <Route exact path="/question-1-results">
              <QuestionOneResults 
                
              />
            </Route>

            <Route exact path="/question-2">
              <QuestionTwo 
                questions={questions[1].question}
                possibleAnwers={questions[1].possibleAnwers}
                answer={questions[1].answer}
              />
            </Route>

            <Route exact path="/question-3">
              <QuestionThree 
                questions={questions[2].question}
                possibleAnwers={questions[2].possibleAnwers}
                answer={questions[2].answer}
              />
            </Route>

            <Route exact path="/question-4">
              <QuestionFour
                questions={questions[3].question}
                possibleAnwers={questions[3].possibleAnwers}
                answer={questions[3].answer}
              />
            </Route>

            <Route exact path="/question-5">
              <QuestionFive
                questions={questions[4].question}
                possibleAnwers={questions[4].possibleAnwers}
                answer={questions[4].answer}
              />
            </Route>
            
          </Switch>

        </div>
      </Router>
    );
  }
}

export default Main;

function StartPage() {
  return (
    <div className="start-page-container">
      <h2>Greg Trivia</h2>

      <Link 
        className="start-btn"
        to="question-1"
      >
        Start
      </Link>
    </div>
  );
}