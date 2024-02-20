import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './reducers/carsReducer'

export default configureStore({
  reducer: {
    cars: carsReducer
  },
})