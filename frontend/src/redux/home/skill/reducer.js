import { listSkills, listSkillsSuccess, listSkillsFail } from './action';


const initState = {
    skills: [],
    error: ''
}

export const listOfSkillsReducer = (state = initState, action) => {
    switch (action.type) {
        case listSkills:
            return { ...state }
        case listSkillsSuccess:
            return { ...state, skills: action.payload }
        case listSkillsFail:
            return {
                ...state, skills: [
                    {
                        "id": 1,
                        "title": "Python",
                        "is_fab_icon": true,
                        "icon": "python",
                        "button_color": "unique",
                        "rank": 1
                    },
                ]
            }
        default:
            return state
    }
}