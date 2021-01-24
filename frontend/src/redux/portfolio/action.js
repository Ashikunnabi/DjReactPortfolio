import { api_endpoint } from '../api'


export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO'
export const FETCH_PORTFOLIO_SUCCESS = 'FETCH_PORTFOLIO_SUCCESS'
export const FETCH_PORTFOLIO_FAIL = 'FETCH_PORTFOLIO_FAIL'
export const SEE_MORE_PORTFOLIO = 'SEE_MORE_PORTFOLIO'



export const fetchPortfolioApiCall = (url = `${api_endpoint}projects/`, seeMore = false) => {
    return function (dispatch) {
        dispatch(fetchPortfolio())
        let tmpArray = []
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].show_as_carousel) tmpArray.push(data[i])
                }
                if (seeMore) {
                    dispatch(fetchMorePortfolio(data))
                } else {
                    dispatch(fetchPortfolioSuccess(data))
                }

            }).catch((data) => {
                dispatch(fetchPortfolioFail(data))
            })
    }
}


export const fetchPortfolio = () => ({
    type: FETCH_PORTFOLIO
})

export const fetchPortfolioSuccess = (data) => ({
    type: FETCH_PORTFOLIO_SUCCESS,
    payload: data
})

export const fetchPortfolioFail = (data) => ({
    type: FETCH_PORTFOLIO_FAIL,
    payload: data
})

export const fetchMorePortfolio = (data) => ({
    type: SEE_MORE_PORTFOLIO,
    payload: data
})