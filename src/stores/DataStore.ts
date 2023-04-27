import { configureStore } from "@reduxjs/toolkit"
import peopleReducer from './peopleReducer'

export const dataStore = configureStore({
  reducer: {
    people: peopleReducer
  }
})

export type RootState = ReturnType<typeof dataStore.getState>