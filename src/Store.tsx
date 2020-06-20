import React from 'react';
import {IState, IAction} from './interfaces'

const intitialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = React.createContext<IState | any>(intitialState);

const reducer = (state:IState, action:IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, episodes: action.payload }
    case 'ADD_FAV':
      return {...state, favorites: [...state.favorites, action.payload ]}
    case 'REMOVE_FAV':
      return {...state, favorites: action.payload }
    default:
    return state
  }
}

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute):JSX.Element => {
  const [ state, dispatch ] = React.useReducer(reducer, intitialState)
  return <Store.Provider value={{state, dispatch}}>{ children }</Store.Provider>
}

