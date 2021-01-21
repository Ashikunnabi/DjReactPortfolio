import { api_endpoint } from '../../api'


export const listSkills = 'LIST_SKILLS'
export const listSkillsSuccess = 'LIST_SKILLS_SUCCESS'
export const listSkillsFail = 'LIST_SKILLS_FAIL'


export const fetchSkills = () => {
    return function(dispatch){
        dispatch(listOfSkills())        
        let tmpArray = []
        fetch(`${api_endpoint}skills/`)
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                tmpArray.push(data[i])
            }
            dispatch(listOfSkillsSuccess(tmpArray))
        }).catch((data) => {
            dispatch(listOfSkillsFail(data))
        })
    }
}


export const listOfSkills = () => ({
    type: listSkills
})

export const listOfSkillsSuccess = (data) => ({
    type: listSkillsSuccess,
    payload: data
})

export const listOfSkillsFail = (data) => ({
    type: listSkillsFail,
    payload: data
})