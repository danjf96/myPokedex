import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokedex from './pokedex/reducer'
import Reactotron from '../../ReactotronConfig'


const reducer = combineReducers({
    pokedex
})
// ...
const store = configureStore({
  reducer,
  enhancers: (getDefaultEnhancers) => {
    const reactotronEnhancer = __DEV__ ? [Reactotron.createEnhancer!()] : [];
    return getDefaultEnhancers().concat(reactotronEnhancer);
  },
})

export default store

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch