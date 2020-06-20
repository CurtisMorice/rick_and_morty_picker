import React from 'react'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'
import  {fetchDataAction, toggleFavAction} from './Actions'

const EpisodeList = React.lazy<any>(()=> import('./EpisodesList'))
const HomePage = () => {
  const {state, dispatch} = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })


  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: {state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }
  return (
    <div>
      <React.Suspense fallback={<div style={{textAlign:'center', fontSize: '50px', color:'orange'}}>...Loading</div>} >
        <section className="episode-layout">
          <EpisodeList {...props}/>
        </section>
      </React.Suspense>
    </div>
  )
}
export default HomePage