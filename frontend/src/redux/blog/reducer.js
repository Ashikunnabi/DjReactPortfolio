import { FETCH_BLOG, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAIL } from './action';


const initState = {
    blogs: [],
    error: '',
    status: 'progress'
}

export const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_BLOG:
            return {
                ...state,
            }
        case FETCH_BLOG_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
                status: 'success'
            }
        case FETCH_BLOG_FAIL:
            return {
                ...state,
                blogs: [],
                error: action.payload,
                status: 'failed'
            }
        default:
            return state
    }
}