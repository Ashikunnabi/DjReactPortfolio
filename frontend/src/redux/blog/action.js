import { api_endpoint } from '../api'


export const FETCH_BLOG = 'FETCH_BLOG'
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS'
export const FETCH_BLOG_FAIL = 'FETCH_BLOG_FAIL'



export const fetchBlogApiCall = () => {
    return function (dispatch) {
        dispatch(fetchBlog())
        let tmpArray = []
        fetch(`${api_endpoint}blogs/`)
            .then(res => res.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].show_as_carousel) tmpArray.push(data[i])
                }
                dispatch(fetchBlogSuccess(data))

            }).catch((data) => {
                dispatch(fetchBlogFail(data))
            })
    }
}


export const fetchBlog = () => ({
    type: FETCH_BLOG
})

export const fetchBlogSuccess = (data) => ({
    type: FETCH_BLOG_SUCCESS,
    payload: data
})

export const fetchBlogFail = (data) => ({
    type: FETCH_BLOG_FAIL,
    payload: data
})
