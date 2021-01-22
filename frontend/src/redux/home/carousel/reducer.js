import { FETCH_IMAGE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL } from './action';


const initState = {
    images: [],
    error: '',
    status: 'progress'
}

export const carouselImageReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_IMAGE:
            return {
                ...state,
            }
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload,
                status: 'success'
            }
        case FETCH_IMAGE_FAIL:
            return {
                ...state,
                images: [],
                error: action.payload,
                status: 'failed'
            }
        default:
            return state
    }
}