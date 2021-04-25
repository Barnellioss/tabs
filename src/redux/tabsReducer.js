
const SET_TAB = 'SET_TAB';


let initialState = {
    tabs: [
        { name: "Job Focus", active: false, id: 1 },
        { name: "Soft Skills", active: false, id: 2 },
        { name: "Technical Skills", active: true, id: 3 },
        { name: "Functional Expertise", active: false, id: 4 },
        { name: "Domain Expertise", active: false, id: 5 },
        { name: "Patent Expertice", active: true, id: 6 },
        { name: "Personal Expertise", active: false, id: 7 },
        { name: "Hard Expertise", active: 'Disabled', id: 8 },
        { name: "Domain Expertise", active: 'Disabled', id: 9 },
        { name: "Domain Expertise", active: false, id: 10 }
    ]
}

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAB:
            return {
                ...state,
                tabs: state.tabs.map(e => e.id === action.value ? {...e, active: !e.active} : e)
            }
        default:
            return state
    }
}

export const setTab = (value) => ({ type: SET_TAB, value });


export default tabsReducer;