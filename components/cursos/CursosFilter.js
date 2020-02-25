import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet ,View } from 'react-native'
import { TextInput } from 'react-native-paper'

import { getCursos } from '../../redux/actions/cursos'
import getErrorForParam from '../../utils/getErrorForParam'

class CursosFilter extends Component {
    state = {
        anio: '',
        duracion: ''
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        }, () => {
            const { anio, duracion } = this.state;
            this.props.getCursos(anio, duracion)
        })
    }

    render() {
        const { anio, duracion } = this.state;
        const { errors } = this.props;

        const errores = {
            anioDictado: getErrorForParam(errors, 'anioDictado'),
            duracion: getErrorForParam(errors, 'duracion')
        }

        return (
            <View style={styles.container}>
                <TextInput
                    label={errores.anioDictado || 'Año'}
                    value={anio}
                    onChangeText={this.handleChange.bind(this, 'anio')}
                    style={styles.input}
                    dense
                    error={!!errores.anioDictado}
                />
                <TextInput
                    label={errores.duracion || 'Duracion (hs)'}
                    value={duracion}
                    onChangeText={this.handleChange.bind(this, 'duracion')}
                    style={styles.input}
                    dense
                    error={!!errores.duracion}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
        width: '85%',
        marginVertical: 4,
        backgroundColor: '#f3f3f3'
    }
});

const mapStateToProps = state => ({
    errors: state.errors.errors
})

export default connect(mapStateToProps, { getCursos })(CursosFilter)
