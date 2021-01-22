import { api_endpoint } from '../../api'


export const FETCH_IMAGE = 'FETCH_IMAGE'
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS'
export const FETCH_IMAGE_FAIL = 'FETCH_IMAGE_FAIL'


export const fetchImageApiCall = () => {
    return function (dispatch) {
        dispatch(fetchImage())
        let tmpArray = []
        fetch(`${api_endpoint}quotes/`)
            .then(res => res.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].show_as_carousel) tmpArray.push(data[i])
                }
                dispatch(fetchImageSuccess(tmpArray))
            }).catch((data) => {
                dispatch(fetchImageFail(data))
            })
    }
}


export const fetchImage = () => ({
    type: FETCH_IMAGE
})

export const fetchImageSuccess = (data) => ({
    type: FETCH_IMAGE_SUCCESS,
    payload: data
})

export const fetchImageFail = (data) => ({
    type: FETCH_IMAGE_FAIL,
    payload: data
})