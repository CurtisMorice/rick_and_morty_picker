import React from 'react'
import { Store } from './Store'
// import { IEpisodeProps } from './interfaces'
import { toggleFavAction } from './Actions'


const EpisodeList = React.lazy<any>(()=> import('./EpisodesList'))

const FavPage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store)

  const props = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }
  return (
    <React.Suspense fallback={<div style={{textAlign:'center', fontSize: '50px', color:'orange'}}>...Loading</div>} >
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  )
}
export default FavPage