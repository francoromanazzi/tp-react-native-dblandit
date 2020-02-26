const initialState = {
    getCursos: [],
    deleteCurso: [],
    addCurso: []
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ERRORS_GET_CURSOS':
            return {
                ...state,
                getCursos: action.payload.error.message
            }
        case 'GET_ERRORS_ADD_CURSO':
            return {
                ...state,
                addCurso: action.payload.error.message
            }    
        case 'GET_ERRORS_DELETE_CURSO':
            return {
                ...state,
                deleteCurso: action.payload.error.message
            }           
        case 'CLEAR_ERRORS_GET_CURSOS':
            return {
                ...state,
                getCursos: []
            }
        case 'CLEAR_ERRORS_ADD_CURSO':
            return {
                ...state,
                addCurso: []
            }
        default:
            return state
    }
}

export default errorReducer