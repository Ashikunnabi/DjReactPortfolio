import { FETCH_IMAGE_GALLERY, FETCH_IMAGE_GALLERY_SUCCESS, FETCH_IMAGE_GALLERY_FAIL, VIEW_IMAGE, CLOSE_IMAGE } from './action';


const initState = {
    photoIndex: 0,
    isOpen: false,
    images: [],
    error: '',
    status: 'progress'
}

export const imageGalleryReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_GALLERY:
            return {
                ...state,
            }
        case FETCH_IMAGE_GALLERY_SUCCESS:
            return {
                ...state,
                images: action.payload,
                status: 'success'
            }
        case FETCH_IMAGE_GALLERY_FAIL:
            return {
                ...state,
                images: [],
                error: action.payload,
                status: 'failed'
            }
        case VIEW_IMAGE:
            return {
                ...state,
                photoIndex: action.payload.photoIndex,
                isOpen: action.payload.isOpen
            }
        case CLOSE_IMAGE:
            return {
                ...state,
                photoIndex: 0,
                isOpen: false
            }
        default:
            return state
    }
}