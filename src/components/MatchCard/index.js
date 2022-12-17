import './index.css'

const MatchCard = props => {
  const {allDetails1, key} = props
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
  } = allDetails1
  return (
    <li className="harika">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="hema"
      />
      <p className="heading">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
