import { listSkills, listSkillsSuccess, listSkillsFail } from './action';


const initState = {
    skills: [],
    error: '',
    status: 'progress'
}

export const listOfSkillsReducer = (state = initState, action) => {
    switch (action.type) {
        case listSkills:
            return {
                ...state,
            }
        case listSkillsSuccess:
            return {
                ...state,
                skills: action.payload,
                status: 'success'
            }
        case listSkillsFail:
            return {
                ...state,
                skills: [],
                error: action.payload,
                status: 'failed'
            }
        default:
            return state
    }
}