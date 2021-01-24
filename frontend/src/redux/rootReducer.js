import { combineReducers } from 'redux'
import { listOfSkillsReducer } from './home/skill/reducer'
import { carouselImageReducer } from './home/carousel/reducer'
import { imageGalleryReducer } from './home/image_gallery/reducer'
import { portfolioReducer } from './portfolio/reducer'


export default combineReducers({
  listOfSkillsReducer,
  carouselImageReducer,
  imageGalleryReducer,
  portfolioReducer,
})