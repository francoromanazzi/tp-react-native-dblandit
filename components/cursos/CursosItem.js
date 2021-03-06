import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Surface, Title, Caption, TouchableRipple } from 'react-native-paper';
import { MaterialIcons } from 'react-native-vector-icons';

import { deleteCurso } from '../../redux/actions/cursos'

import Alumnos from './alumnos/Alumnos'

function CursosItem({ curso, deleteCurso, isAuthenticated }) {
    return (
        <View style={styles.container}>
            <Surface style={styles.surface}>
                <View style={styles.row}>
                    <Title>{curso.tema} ({curso.anioDictado})</Title>
                    {isAuthenticated && (
                        <TouchableRipple
                            onPress={deleteCurso.bind(this, curso._id)}
                        >
                            <MaterialIcons name="delete" size={18} style={styles.deleteIcon}/>
                        </TouchableRipple>
                    )}
                </View>
                <Caption>{curso.duracion} horas</Caption>
                <Alumnos alumnos={curso.alumnos}/>
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    surface: {
        padding: 12,
        margin: 8,
        width: '85%',
        elevation: 2,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        marginRight: 20
    }
});

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { deleteCurso })(CursosItem)
