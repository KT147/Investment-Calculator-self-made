import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import "./index.css"

function App() {

  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualInvestment, setAnnualInvestment] = useState(1200)
  const [expectedReturn, setExpectedReturn] = useState(6)
  const [duration, setDuration] = useState(10)

  const inputIsvalid = duration >=0;

  return (
    <>
      <Header />
      <UserInput 
      initialInvestment={initialInvestment} setInitialInvestment={setInitialInvestment}
      annualInvestment= {annualInvestment} setAnnualInvestment={setAnnualInvestment}
      expectedReturn={expectedReturn} setExpectedReturn={setExpectedReturn}
      duration={duration} setDuration={setDuration}
       />
      {inputIsvalid ? <Results
       initialInvestment={initialInvestment} setInitialInvestment={setInitialInvestment}
       annualInvestment= {annualInvestment} setAnnualInvestment={setAnnualInvestment}
       expectedReturn={expectedReturn} setExpectedReturn={setExpectedReturn}
       duration={duration} setDuration={setDuration} />:
       <p className="center">Too less years..No-no-no! Need more years! Yes-yes-yes!</p>}
    </>
  )
}

export default App
