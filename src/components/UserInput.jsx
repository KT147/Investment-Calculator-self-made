import { useState } from "react";


function UserInput({initialInvestment, setInitialInvestment, annualInvestment, setAnnualInvestment, expectedReturn, setExpectedReturn, duration, setDuration}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input value={initialInvestment} onChange={(e) => setInitialInvestment (Number(e.target.value))} type="number" required />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input value={annualInvestment} onChange={(e) => setAnnualInvestment(Number(e.target.value))} type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} type="number" required />
        </p>
        <p>
          <label>DURATION</label>
          <input value={duration} onChange={(e) => setDuration(Number(e.target.value))} type="number" required />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
