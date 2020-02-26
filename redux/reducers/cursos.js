const initialState = {
    cursos: [],
    cursoBorrado: {},
    cursoAgregado: {}
}

const cursosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURSOS':
            return {
                ...state,
                cursos: action.payload
            }
        case 'DELETE_CURSO':
            return {
                ...state,
                cursos: state.cursos.filter(curso => curso._id !== action.payload._id),
                cursoBorrado: action.payload
            }
        case 'ADD_CURSO':
            return {
                ...state,
                cursos: [...state.cursos, action.payload],
                cursoAgregado: action.payload
            }
        case 'CLEAR_CURSO_BORRADO':
            return {
                ...state,
                cursoBorrado: {}
            }
        case 'CLEAR_CURSO_AGREGADO':
            return {
                ...state,
                cursoAgregado: {}
            }
        default:
            return state
    }
}

export default cursosReducer