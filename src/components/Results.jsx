import {calculateInvestmentResults} from "../util/investment.js"

function Results() {

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>${calculateInvestmentResults.initialInvestment}</td>
          <td>${calculateInvestmentResults.annualInvestment}</td>
          <td>${calculateInvestmentResults.expectedReturn}</td>
          <td>${calculateInvestmentResults.duration}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Results