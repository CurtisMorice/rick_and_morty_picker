  import {IAction, IEpisode, IState } from './interfaces'

  export const fetchDataAction = async (dispatch: any) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  // Add favorite to the store
  export const toggleFavAction = (state:IState, dispatch: any, episode:IEpisode | any): IAction => {
    const episodeInFav = state.favorites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    if(episodeInFav) {
      //filter out episode if already there
      const favWithoutEpisodeArray = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisodeArray
      }
    }
    return dispatch(dispatchObj)
 }