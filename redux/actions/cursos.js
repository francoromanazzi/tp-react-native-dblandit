import { apiUrl } from '../../config.json'

import axios from 'axios';


export const getCursos = (anio, duracion) => dispatch => {
    let url = apiUrl + '/api/v1/cursos';
    if (anio && duracion) url += `?anioDictado=${anio}&duracion=${duracion}`
    else if (anio) url += `?anioDictado=${anio}`
    else if (duracion) url += `?duracion=${duracion}`

    axios
        .get(url)
        .then(res => {
            // console.log(res);
            dispatch({
                type: 'GET_CURSOS',
                payload: res.data.message
            });
            dispatch({
                type: 'CLEAR_ERRORS_GET_CURSOS'
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'GET_ERRORS_GET_CURSOS',
                payload: { error: err.response.data }
            });
        });
};

export const deleteCurso = cursoId => dispatch => {
    axios
        .delete(apiUrl + `/api/v1/cursos/${cursoId}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'DELETE_CURSO',
                payload: res.data.message
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'GET_ERRORS_DELETE_CURSO',
                payload: { error: err.response.data }
            });
        });
}

export const postCurso = (curso, history) => dispatch => {
    axios
        .post(apiUrl + '/api/v1/cursos/', curso)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'ADD_CURSO',
                payload: res.data.message
            });
            dispatch({
                type: 'CLEAR_ERRORS_ADD_CURSO'
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'GET_ERRORS_ADD_CURSO',
                payload: { error: err.response.data }
            });
        });  
}

export const clearCursoBorrado = () => {
    return {
      type: 'CLEAR_CURSO_BORRADO'
    };
};

export const clearCursoAgregado = () => {
    return {
      type: 'CLEAR_CURSO_AGREGADO'
    };
};