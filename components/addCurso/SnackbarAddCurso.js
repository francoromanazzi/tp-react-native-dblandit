import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Snackbar } from 'react-native-paper';

import { deleteCurso, clearCursoAgregado } from '../../redux/actions/cursos'
import isEmpty from '../../utils/isEmpty'

class SnackbarAddCurso extends Component {
    state = {
        visible: false
    }

    handleUndoPress = () => {
        this.props.deleteCurso(this.props.cursoAgregado._id)
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if(!isEmpty(nextProps.cursoAgregado)) {
            this.setState({ visible: true })
        }
    }

    handleDismiss = () => {
        this.setState({ visible: false }, () => {
            this.props.clearCursoAgregado()
        })
    }
    
    render() {
        const { visible } = this.state;

        return (
          <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={this.handleDismiss}
                action={{
                    label: 'Deshacer',
                    onPress: this.handleUndoPress
                }}
            >
            Curso creado correctamente
            </Snackbar>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    }
});

const mapStateToProps = state => ({
    cursoAgregado: state.cursos.cursoAgregado
})

export default connect(mapStateToProps, { deleteCurso, clearCursoAgregado })(SnackbarAddCurso)
