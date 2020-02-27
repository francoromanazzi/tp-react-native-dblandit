import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Snackbar } from 'react-native-paper';

import { postCurso, clearCursoBorrado } from '../../redux/actions/cursos'
import isEmpty from '../../utils/isEmpty'

class SnackbarDeleteCurso extends Component {
    state = {
        visible: false
    }

    handleUndoPress = () => {
        this.props.postCurso(this.props.cursoBorrado)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(!isEmpty(nextProps.cursoBorrado)) {
            this.setState({ visible: true })
        }
    }

    handleDismiss = () => {
        this.setState({ visible: false }, () => {
            this.props.clearCursoBorrado()
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
                duration={2000}
            >
            Curso borrado correctamente
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
    cursoBorrado: state.cursos.cursoBorrado
})

export default connect(mapStateToProps, { postCurso, clearCursoBorrado })(SnackbarDeleteCurso)
