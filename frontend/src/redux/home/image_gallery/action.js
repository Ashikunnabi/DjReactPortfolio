import { api_endpoint } from '../../api'


export const FETCH_IMAGE_GALLERY = 'FETCH_IMAGE_GALLERY'
export const FETCH_IMAGE_GALLERY_SUCCESS = 'FETCH_IMAGE_GALLERY_SUCCESS'
export const FETCH_IMAGE_GALLERY_FAIL = 'FETCH_IMAGE_GALLERY_FAIL'
export const VIEW_IMAGE = 'VIEW_IMAGE'
export const CLOSE_IMAGE = 'CLOSE_IMAGE'


export const fetchImageGalleryApiCall = () => {
    return function (dispatch) {
        dispatch(fetchImageGallery())
        let tmpArray = []
        fetch(`${api_endpoint}quotes/`)
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                if (!data[i].show_as_carousel) tmpArray.push(data[i].image)
            }
            dispatch(fetchImageGallerySuccess(tmpArray))
        }).catch((data) => {
            dispatch(fetchImageGalleryFail(data))
        })
    }
}


export const fetchImageGallery = () => ({
    type: FETCH_IMAGE_GALLERY
})

export const fetchImageGallerySuccess = (data) => ({
    type: FETCH_IMAGE_GALLERY_SUCCESS,
    payload: data
})

export const fetchImageGalleryFail = (data) => ({
    type: FETCH_IMAGE_GALLERY_FAIL,
    payload: data
})

export const viewImage = (data) => ({
    type: VIEW_IMAGE,
    payload: data
})

export const closeImage = () => ({
    type: CLOSE_IMAGE
})