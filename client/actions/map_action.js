import { CHANGE_BOUNDS, CHANGE_ORIGIN, CHANGE_DESTINATION } from './actions';

export const changeBounds = (newBounds) => ({
  type: CHANGE_BOUNDS,
  newBounds
})

export const changeOrigin = (newOrigin) => ({
  type:CHANGE_ORIGIN,
  newOrigin
})

export const changeDestination = (newDestination) => ({
  type:CHANGE_DESTINATION,
  newDestination
})
