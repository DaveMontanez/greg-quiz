import React, { Component } from 'react';
import { Link } from "react-router-dom";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedAnswer: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { correctAnswer, setScore } = this.props;
    const { selectedAnswer } = this.state;
    const isCorrect = selectedAnswer === correctAnswer;

    if (prevState.selectedAnswer !== selectedAnswer) {
      setScore(isCorrect);
    }
  }

  onValueChange = (value) => {
    this.setState({
      selectedAnswer: value
    });
  }
  
  render() {
    const { question, possibleAnswers, img, nextPath } = this.props;

    return (
      <div className="question-page-container">
        
        <div className="image-container">
          <img src={img} alt="office" />
        </div>

        <form>
          <legend className="question-text heading-m">{question}</legend>

          <ul className="answer-list">
            {possibleAnswers.map((answer, i) => {
              const key = `answer-${i}`;
              const isSelected = this.state.selectedAnswer === answer;

              return (
                <li className="list-item" key={key}>
                  <label 
                    id={key}
                    className={isSelected ? 'selected' : null}
                  >
                    <input 
                      type="radio" 
                      htmlFor={key}
                      checked={isSelected}
                      onChange={() => this.onValueChange(answer)}
                    />
                    <span>{answer}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </form>
        <Link
          to={nextPath}
          className="submit-btn"
        >
          Submit
        </Link>
      </div>
    );
  }
}

export default QuestionPage;