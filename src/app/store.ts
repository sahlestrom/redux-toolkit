import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import { reducer } from '../pages/api/mood'

// export function makeStore() {
//   return configureStore({
//     reducer: { counter: counterReducer },
//   })
// }

// const store = makeStore()
const store = createStore(reducer)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
