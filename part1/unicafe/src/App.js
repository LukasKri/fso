import { useState } from 'react'
import Button from './Button'
import Heading from './Heading'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad;

  const countAvg = () => {
    if (!!all) {
      return (good * 1 + neutral * 0 + bad * -1) / all;
    }
    return 0;
  }

  const countPositive = () => {
    if (!!all) {
      return good * 100 / all; 
    }
    return 0;
  }

  return (
    <div>
      <Heading/>
      <Button name="good" onClick={handleGoodClick}/>
      <Button name="neutral" onClick={handleNeutralClick}/>
      <Button name="bad" onClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <p>all {all}</p>
      <p>average {countAvg()}</p>
      <p>positive {countPositive()} %</p>
    </div>
  )
}

export default App
