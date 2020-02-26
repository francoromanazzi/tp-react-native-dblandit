import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, } from 'react-native'
import { Surface, TextInput, TouchableRipple, Text } from 'react-native-paper'
import { MaterialIcons } from 'react-native-vector-icons';

import getErrorForParam from '../../utils/getErrorForParam'

class AddAlumnosItem extends Component {
    state = {
        open: true
    }

    handleLongPress = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { i, alumno, handleAlumnoChange, handleAlumnoDelete, errors } = this.props;
        const { open } = this.state;

        const errores = {
            nombre: getErrorForParam(errors, `alumnos[${i}].nombre`),
            apellido: getErrorForParam(errors, `alumnos[${i}].apellido`),
            dni: getErrorForParam(errors, `alumnos[${i}].dni`),
            direccion: getErrorForParam(errors, `alumnos[${i}].direccion`),
            nota: getErrorForParam(errors, `alumnos[${i}].nota`)
        }

        const openedRender = (
            <React.Fragment>
                <TextInput
                    label={errores.nombre || 'Nombre'}
                    value={alumno.nombre}
                    onChangeText={handleAlumnoChange.bind(this, i, 'nombre')}
                    style={styles.input}
                    dense
                    error={!!errores.nombre}
                    placeholder="Nombre"
                />
                <TextInput
                    label={errores.apellido || 'Apellido'}
                    value={alumno.apellido}
                    onChangeText={handleAlumnoChange.bind(this, i, 'apellido')}
                    style={styles.input}
                    dense
                    error={!!errores.apellido}
                    placeholder="Apellido"
                />
                <TextInput
                    label={errores.dni || 'DNI'}
                    value={alumno.dni}
                    onChangeText={handleAlumnoChange.bind(this, i, 'dni')}
                    style={styles.input}
                    dense
                    error={!!errores.dni}
                    placeholder="DNI"
                />
                <TextInput
                    label={errores.direccion || 'Direccion'}
                    value={alumno.direccion}
                    onChangeText={handleAlumnoChange.bind(this, i, 'direccion')}
                    style={styles.input}
                    dense
                    error={!!errores.direccion}
                    placeholder="Direccion"
                />
                <TextInput
                    label={errores.nota || 'Nota'}
                    value={alumno.nota}
                    onChangeText={handleAlumnoChange.bind(this, i, 'nota')}
                    style={styles.input}
                    dense
                    error={!!errores.nota}
                    placeholder="Nota"
                />
                <TouchableRipple
                    onPress={handleAlumnoDelete.bind(this, i)}
                >
                    <MaterialIcons name="delete" size={24} style={styles.deleteIcon}/>
                </TouchableRipple>
            </React.Fragment>
        )

        const closedRender = (
            <Text>
                {alumno.nombre && alumno.apellido ? 
                    `${alumno.apellido}, ${alumno.nombre}` : 
                    `Alumno ${i + 1}`
                }
            </Text>
        )
    
        return (
            <View  style={styles.container}>
                <Surface style={styles.surface}>
                    <TouchableRipple
                        onPress={() => {}}
                        onLongPress={this.handleLongPress}
                        style={styles.longPressRipple}
                        rippleColor="#fff"
                    >
                        <React.Fragment> 
                            {open ? openedRender : closedRender}
                        </React.Fragment>
                    </TouchableRipple>
                </Surface>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 8,
        flex: 1,
        alignItems: 'center'
    },
    surface: {
        paddingVertical: 8,
        elevation: 3,
        width: '85%',
    },
    formItem: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: '85%',
        backgroundColor: '#fff'
    },
    deleteIcon: {
        marginTop: 8
    },
    longPressRipple: {
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = state => ({
    errors: state.errors.addCurso
})

export default connect(mapStateToProps, null)(AddAlumnosItem)
