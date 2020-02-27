import React from 'react'
import { List } from 'react-native-paper'

function AlumnoItem({ alumno }) {
    return (
        <List.Item
            title={`${alumno.apellido}, ${alumno.nombre} (${alumno.nota})`}
            description={`DNI ${alumno.dni} - ${alumno.direccion}`}
        />
    )
}

export default AlumnoItem
