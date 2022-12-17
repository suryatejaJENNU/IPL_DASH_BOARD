import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {values, key} = props
  const {id, name, teamImageUrl} = values
  return (
    <Link
      to={`/team-matches/${id}`}
      className="blog-item-link
    "
    >
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="vk" />
        <p className="main-heading1">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
