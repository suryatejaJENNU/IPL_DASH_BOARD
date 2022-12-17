import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch/index'

import './index.css'

import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {teamBaner: '', id1: '', lost: {}, tick: [], isTrue: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatches = data.recent_matches
    const latestMatchDetails = data.latest_match_details
    const teamBannerUrl = data.team_banner_url

    const latest = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const rithwik = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    console.log(rithwik)

    console.log(latest)
    this.setState({
      teamBaner: teamBannerUrl,
      id1: id,
      lost: latest,
      tick: rithwik,
      isTrue: false,
    })
  }

  render() {
    const {teamBaner, id1, lost, tick, isTrue} = this.state
    return (
      <div>
        {isTrue && (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isTrue && (
          <div className={id1}>
            <img src={teamBaner} alt="team banner" className="banner" />
            <LatestMatch allDetails={lost} key={lost.id} />
            <ul className="string">
              {tick.map(each => (
                <MatchCard allDetails1={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
