

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
          <td>${initialInvestment}</td>
          <td>${annualInvestment}</td>
          <td>${expectedReturn}</td>
          <td>${duration}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Results