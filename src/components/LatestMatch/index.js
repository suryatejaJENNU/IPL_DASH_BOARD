import './index.css'

const LatestMatch = props => {
  const {allDetails, key} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = allDetails

  return (
    <div className="backbone">
      <div className="cricket">
        <p className="heading">{competingTeam}</p>
        <p className="heading">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="oppo"
        />
      </div>
      <div className="cricket">
        <h1 className="heading">First Innings</h1>
        <p className="para">{firstInnings}</p>
        <h1 className="heading">Second Innings</h1>
        <p className="para">{secondInnings}</p>
        <h1 className="heading">Man Of The Match</h1>
        <p className="para">{manOfTheMatch}</p>
        <h1 className="heading">Umpires</h1>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
