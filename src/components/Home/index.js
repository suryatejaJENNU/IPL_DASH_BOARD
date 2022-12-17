import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {teams: [], isTrue: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updated = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updated)
    this.setState({teams: updated, isTrue: false})
  }

  render() {
    const {teams, isTrue} = this.state
    return (
      <div className="bg-container">
        <div className="dashing">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isTrue && (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isTrue && (
          <ul className="unorder">
            {teams.map(each => (
              <TeamCard values={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
