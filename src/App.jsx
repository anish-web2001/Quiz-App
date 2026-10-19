import React, { useState }  from 'react'
import WelcomeComponents from './components/WelcomeComponents'
import QuizComponents from './components/QuizComponents'
import ResultComponents from './components/ResultComponents'

function App() {

  const [showScreen, setShowScreen] = useState('welcome')
  const [answers,setAnswers] = useState([])

  return (
    <>
      
      {showScreen == 'welcome' && <WelcomeComponents {...{showScreen, setShowScreen}}/>}
      {showScreen== 'quiz' && <QuizComponents showScreen={showScreen} setShowScreen={setShowScreen}
      answers= {answers} setAnswers={setAnswers}/>}
      {showScreen== 'result' && <ResultComponents answers= {answers} />}

    </>
  )
}

export default App
