import React from 'react'
import { View, } from 'react-native'

import AddAlumnosItem from './AddAlumnosItem'

function AddAlumnos({ alumnos, handleAlumnoChange, handleAlumnoDelete }) {
    return (
        <View>
            {alumnos && alumnos.map((alumno, i) => 
                <AddAlumnosItem
                    key={i}
                    i={i}
                    alumno={alumno}
                    handleAlumnoChange={handleAlumnoChange}
                    handleAlumnoDelete={handleAlumnoDelete}
                />
            )}
        </View>
    )
}

export default AddAlumnos
