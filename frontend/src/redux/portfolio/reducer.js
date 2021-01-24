import { FETCH_PORTFOLIO, FETCH_PORTFOLIO_SUCCESS, FETCH_PORTFOLIO_FAIL, SEE_MORE_PORTFOLIO } from './action';


const initState = {
    projects: [],
    nextURL: null,
    error: '',
    status: 'progress'
}

export const portfolioReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO:
            return {
                ...state,
            }
        case FETCH_PORTFOLIO_SUCCESS:
            return {
                ...state,
                projects: action.payload.results,
                nextURL: action.payload.next,
                status: 'success'
            }
        case FETCH_PORTFOLIO_FAIL:
            return {
                ...state,
                projects: [],
                error: action.payload,
                status: 'failed'
            }
        case SEE_MORE_PORTFOLIO:
            console.log(action)
            return {
                ...state,
                projects: state.projects.concat(action.payload.results),
                nextURL: action.payload.next,
                status: 'success'
            }
        default:
            return state
    }
}