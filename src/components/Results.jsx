import { calculateInvestmentResults, formatter } from "../util/investment"


function Results({initialInvestment, annualInvestment, expectedReturn, duration}) {
const resultData= calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration})


console.log(resultData)
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
        {resultData.map(yearData =>
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment)}</td>
            <td>{formatter.format(yearData.valueEndOfYear - (yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment))}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Results