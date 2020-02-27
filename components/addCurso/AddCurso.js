import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withTheme, TextInput, Button } from 'react-native-paper'
import Constants from 'expo-constants';

import getErrorForParam from '../../utils/getErrorForParam'
import isEmpty from '../../utils/isEmpty'
import { postCurso } from '../../redux/actions/cursos'

import SnackbarAddCurso from './SnackbarAddCurso'
import MainTitle from './MainTitle'
import AddAlumnos from './addAlumnos/AddAlumnos'

export class AddCurso extends Component {
    state = {
        tema: '',
        anioDictado: '',
        duracion: '',
        alumnos: []
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.postCurso(this.state)
    }

    handleAddAlumnoPress = () => {
        this.setState(prevState => ({
            alumnos: [...prevState.alumnos, {
                nombre: '',
                apellido: '',
                dni: '',
                direccion: '',
                nota: ''
            }]
        }))
    }

    handleAlumnoChange = (i, name, value) => {
        this.setState(prevState => ({
            alumnos: prevState.alumnos.map((alumno, i2) => {
                if(i === i2) {
                    return {
                        ...alumno,
                        [name]: value
                    }
                } else {
                    return alumno
                }
            })
        }))
    }

    handleAlumnoDelete = i => {
        this.setState(prevState => ({
            alumnos: prevState.alumnos.filter((_, i2) => i !== i2)
        }))
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(!isEmpty(nextProps.cursoAgregado)) {
            this.setState({
                tema: '',
                anioDictado: '',
                duracion: '',
                alumnos: []
            })
        }
    }

    render() {
        const { tema, anioDictado, duracion, alumnos } = this.state;
        const { errors, theme } = this.props;

        const errores = {
            tema: getErrorForParam(errors, 'tema'),
            anioDictado: getErrorForParam(errors, 'anioDictado'),
            duracion: getErrorForParam(errors, 'duracion')
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <MainTitle />
                    <View style={styles.formItem}>
                        <TextInput
                            label={errores.tema || 'Tema'}
                            value={tema}
                            onChangeText={this.handleChange.bind(this, 'tema')}
                            style={styles.input}
                            dense
                            error={!!errores.tema}
                            placeholder="Tema"
                        />
                    </View>
                    <View style={styles.formItem}>
                        <TextInput
                            label={errores.anioDictado || 'Año'}
                            value={anioDictado}
                            onChangeText={this.handleChange.bind(this, 'anioDictado')}
                            style={styles.input}
                            dense
                            error={!!errores.anioDictado}
                            placeholder="Año"
                        />
                    </View>
                    <View style={styles.formItem}>
                        <TextInput
                            label={errores.duracion || 'Duracion (hs)'}
                            value={duracion}
                            onChangeText={this.handleChange.bind(this, 'duracion')}
                            style={styles.input}
                            dense
                            error={!!errores.duracion}
                            placeholder="Duracion (hs)"
                        />
                    </View>
                    <AddAlumnos
                        alumnos={alumnos}
                        handleAlumnoChange={this.handleAlumnoChange}
                        handleAlumnoDelete={this.handleAlumnoDelete}
                    />
                    <View style={styles.formItem}>
                    <Button
                        icon="plus"
                        mode="outlined"
                        compact
                        onPress={this.handleAddAlumnoPress}
                        style={styles.addAlumnoBtn}
                    >
                        Agregar alumno
                    </Button>
                    </View>
                    <View style={styles.formItem}>
                        <Button
                            mode="contained"
                            onPress={this.handleSubmit}
                            style={styles.submitBtn}    
                            color={theme.colors.accentLight}
                        >
                            Agregar
                        </Button>
                    </View>
                </ScrollView>
                <SnackbarAddCurso />           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    },
    formItem: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: '85%',
        marginVertical: 4,
        backgroundColor: '#f3f3f3'
    },
    submitBtn: {
        marginVertical: 24,
        width: '85%',
    },
    addAlumnoBtn: {
        marginTop: 16
    }
})

const mapStateToProps = state => ({
    cursoAgregado: state.cursos.cursoAgregado,
    errors: state.errors.addCurso
})

export default connect(mapStateToProps, { postCurso })(withTheme(AddCurso))