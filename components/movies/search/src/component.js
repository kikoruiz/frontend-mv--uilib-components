import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AtomInput from '@s-ui/react-atom-input'
import AtomCard from '@s-ui/react-atom-card'

class MoviesSearch extends Component {
  state = {
    list: []
  }

  _onSearch = async (_, {value}) => {
    const {list} = await this.props.domain
      .get('search_movies_use_case')
      .execute({
        keyword: value
      })

    this.setState({list})
  }

  render() {
    return (
      <div className="mv-MoviesSearch">
        <div className="mv-MoviesSearch-box">
          <AtomInput type="text" onEnter={this._onSearch} />
        </div>
        <div className="mv-MoviesSearch-list">
          {this.state.list.map(item => {
            const imageSrc = `https://image.tmdb.org/t/p/w200${item.image}`
            const renderMedia = () => (
              <img className="mv-MoviesSearch-itemImage" src={imageSrc} />
            )
            const renderContent = () => <header>{item.title}</header>

            return (
              <AtomCard
                key={item.id}
                media={renderMedia}
                content={renderContent}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

MoviesSearch.displayName = 'MoviesSearch'

MoviesSearch.propTypes = {
  domain: PropTypes.object
}
export default MoviesSearch
