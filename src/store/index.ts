import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokedex from './pokedex/reducer'

const reducer = combineReducers({
    pokedex
})
// ...
const store = configureStore({
  reducer
})

export default store

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch