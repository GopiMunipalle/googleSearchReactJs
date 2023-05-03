// Write your code here
import {Component} from 'react'

import SuggetionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggetions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onGoogleSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <div className="google-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
          </div>
          <div className="google-card-search-container">
            <div className="google-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onGoogleSearch}
              />
            </div>
            <ul>
              {searchResults.map(eachSuggetion => (
                <SuggetionItem
                  key={eachSuggetion.id}
                  suggetionDetails={eachSuggetion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggetions
