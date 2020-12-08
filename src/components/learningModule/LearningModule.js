import React from 'react';
import SelectionBox from '../selectionBox/SelectionBox';
import Button from '../button/Button';
import Intro from '../intro/Intro';
import './Styles.scss';
import ProgressBar from '../progressBar/ProgressBar';

const LearningModule = ({setGameStatus, gameStatus}) => {
  const [currentQuestionId, setCurrentQuestionId] = React.useState(0);
  const [quizData, setQuizData] = React.useState({});
  const [isComplete, setIsComplete] = React.useState(false);
  const [percentCompletion, setPercentCompletion] = React.useState(0);
  
  let currentQuestion = quizData.questionArr ? quizData.questionArr[currentQuestionId]: {};

  let calculatePercentage = (questionID, totalQuestions) => {
    return (Math.round((questionID + 1) / (totalQuestions + 1) * 100))
  }
  
  React.useEffect(()=>{
    getQuizData(); 
  },[]);

  React.useEffect(()=>{
    console.log(gameStatus); 
  },[gameStatus]);


  const getQuizData=()=>{
    fetch("http://localhost:8080/problems")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        setQuizData(data);
        setPercentCompletion(calculatePercentage(0, data.totalQuestions))
      }).catch((err)=>{
        console.log(err);
      });
  }

  const handleSubmit=()=> {
    if(currentQuestionId < quizData.totalQuestions-1){
      console.log(currentQuestionId)
      let nextId = currentQuestionId + 1
      setCurrentQuestionId(nextId); 
      setPercentCompletion(calculatePercentage(nextId, quizData.totalQuestions));
    } else if (!isComplete) {
      setIsComplete(true);
      setPercentCompletion(100);
    } else {
      setCurrentQuestionId(0); 
      setIsComplete(false);
      setGameStatus('new');
      setPercentCompletion(0);
    }
  }
  let possibleAnswers = [];
  if(currentQuestion.possibleAnswers){
    possibleAnswers = currentQuestion.possibleAnswers.map((answer, index) => {
      return <SelectionBox id={index} key={index} answer={answer} />
    })
  }

  return (
    <div className="learningModule">
      <ProgressBar percentage={percentCompletion}/>
      { currentQuestion.title && !isComplete &&
        <>
          <div className="learningModule__header">
            <div className="learningModule__title">
              { currentQuestion.title }
            </div>
            <div className="learningModule__subHeader">
              { currentQuestion.additionalInfo }
            </div>
          </div>

          <div className="learningModule__answerArea">
            <div className="learningModule__selections">
              { possibleAnswers }
            </div>
            <div className="learningModule__submitButtonContainer">
              <Button label="Submit" inactive handleSubmit={ handleSubmit } />
            </div>
          </div>
        </>
      }
      {isComplete &&
        <Intro message="Congratulations. You've completed this level!" buttonLabel="Play again"  buttonClick={handleSubmit} />
      }
    </div>
  )
}

export default LearningModule;
