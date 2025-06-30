import { useState } from "react";


function UserInput() {

  const [initialInvestment, setInitialInvestment] = useState()
  const [annualInvestment, setAnnualInvestment] = useState()
  const [expectedReturn, setExpectedReturn] = useState()
  const [duration, setDuration] = useState()


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input value={initialInvestment} onChange={e => setInitialInvestment(e.target.value)} type="number" required />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input value={annualInvestment} onChange={e => setAnnualInvestment(e.target.value)} type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input value={expectedReturn} onChange={e => setExpectedReturn(e.target.value)} type="number" required />
        </p>
        <p>
          <label>DURATION</label>
          <input value={duration} onChange={e => setDuration(e.target.value)} type="number" required />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
