import { combineReducers } from 'redux'
import { listOfSkillsReducer } from './home/skill/reducer'
import { carouselImageReducer } from './home/carousel/reducer'


export default combineReducers({
  listOfSkillsReducer,
  carouselImageReducer,
})