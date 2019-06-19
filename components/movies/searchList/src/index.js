import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'

const MoviesSearchList = ({list}) => (
  <div className="mv-MoviesSearch-list">
    {list.map(item => {
      const imageSrc =
        item.image && `https://image.tmdb.org/t/p/w200${item.image}`
      const renderMedia = () =>
        imageSrc && <img className="mv-MoviesSearch-itemImage" src={imageSrc} />
      const renderContent = () => <header>{item.title}</header>

      return (
        <AtomCard key={item.id} media={renderMedia} content={renderContent} />
      )
    })}
  </div>
)

MoviesSearchList.displayName = 'MoviesSearchList'

MoviesSearchList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

MoviesSearchList.defaultProps = {
  list: []
}

export default MoviesSearchList
